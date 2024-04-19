import { AuthOptions } from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
};
