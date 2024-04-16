"use client";

import SignupForm from "@/components/SignupForm";
import FacebookIcon from "@/components/ui/FacebookIcon";
import GoogleIcon from "@/components/ui/GoogleIcon";
import SocialIcon from "@/components/ui/SocialIcon";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-4">
      <h2 className=" font-bold text-4xl p-8">
        Log in into LG
      </h2>
      <SignupForm buttonName="Log in with email" />
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
          name="Continue with Google"
          type="button"
          className=" bg-blue-500 w-full p-1 hover:bg-blue-600 text-white"
        >
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon
          name="Continue with Google"
          type="button"
          className=" bg-slate-100 w-full p-1 hover:bg-slate-200"
        >
          <GoogleIcon />
        </SocialIcon>
        <Link className=" pt-6" href={"/signup"}>
          You don&apos;t have an account?
        </Link>
        <Link href={"/forgot"}>Forgot your password?</Link>
      </div>
    </div>
  );
};

export default LoginPage;
