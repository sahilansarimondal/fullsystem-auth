"use client";

import SignupForm from "@/components/SignupForm";
import FacebookIcon from "@/components/ui/FacebookIcon";
import GoogleIcon from "@/components/ui/GoogleIcon";
import SocialIcon from "@/components/ui/SocialIcon";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SignupPage = () => {
  const router = useRouter();
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/getstarted?email=" + data.user?.email);
    }
  }, [status, router, data?.user?.email]);
  return (
    <div className="flex flex-col gap-3 justify-center items-center max-w-[1080px] md:px-12 p-4 md:mx-auto">
      <h2 className=" font-bold text-2xl md:text-4xl text-center py-4 md:py-8">
        Sign up for free
      </h2>

      <SignupForm buttonName="Create account" />
      <div className=" div-line w-full md:max-w-96 flex gap-4 justify-center items-center">
        <div className=" w-full border-b border-slate-300"></div>
        <div className=" text-center text-slate-400 font-semibold ">
          {" "}
          or
        </div>
        <div className=" w-full border-b border-slate-300"></div>
      </div>
      <div className=" w-full md:max-w-96 flex flex-col gap-3 justify-center font-medium items-center">
        <SocialIcon
          className=" bg-[#3b5998] text-white w-full p-1 hover:bg-blue-900"
          type="button"
          name="Continue with Facebook"
          onClick={() => signIn("facebook")}
        >
          {" "}
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon
          className=" bg-[#4285F4] text-white w-full p-1 hover:bg-blue-400"
          type="button"
          name="Continue with Google"
          onClick={() => signIn("google")}
        >
          {" "}
          <GoogleIcon />
        </SocialIcon>
        <Link
          className=" pt-6 hover:text-blue-500"
          href={"/login"}
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
