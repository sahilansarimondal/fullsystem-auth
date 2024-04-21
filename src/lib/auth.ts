import { AuthOptions } from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Email, {
  SendVerificationRequestParams,
} from "next-auth/providers/email";
import { Resend } from "resend";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "./prisma";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env
        .GOOGLE_CLIENT_SECRET as string,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_APP_ID as string,
      clientSecret: process.env
        .FACEBOOK_APP_SECRET as string,
    }),
    Email({
      server: "",
      from: "onboarding@sahilansari.online",
      sendVerificationRequest: async (
        params: SendVerificationRequestParams
      ) => {
        let { identifier, url, provider } = params;
        console.log({ identifier, url, provider });
        try {
          let resend = new Resend(
            process.env.RESEND_API_KEY!
          );
          await resend.emails.send({
            from: provider.from,
            to: identifier,
            subject: "Your Scott Login Link",
            html:
              '<html><body>\
              <h2>Your Login Link</h2>\
              <p>Welcome to Scott!</p>\
              <p>Please click the magic link below to sign in to your account.</p>\
              <p><a href="' +
              url +
              '"><b>Sign in</b></a></p>\
              <p>or copy and paste this URL into your browser:</p>\
              <p><a href="' +
              url +
              '">' +
              url +
              "</a></p>\
              <br /><br /><hr />\
              <p><i>This email was intended for " +
              identifier +
              ". If you were not expecting this email, you can ignore this email.</i></p>\
              </body></html>",
          });
        } catch (error) {
          console.log({ error });
        }
      },
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          // create user;
          throw new Error("User not found");
        } else {
          // check password and email varification
          const isValidPassword = await bcrypt.compare(
            credentials.password,
            user.password as string
          );
          const isVarifiedUser = user.emailVerified;
          if (isValidPassword) {
            if (!isVarifiedUser) {
              throw new Error("Email not verified");
            }
            return user;
          }
          throw new Error("Invalid password");
        }
      },
    }),
  ],
  pages: {
    error: "/error", // Custom error page
  },
  debug: process.env.NODE_ENV === "development",

  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
};
