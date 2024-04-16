"use client";

import SignupForm from "@/components/SignupForm";
import Link from "next/link";
import React from "react";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const page = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-4">
      <h2 className=" font-bold text-4xl p-8">
        Get unlimited access to the key ideas of 6,500+
        non-fiction bestsellers
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
        <FacebookLoginButton
          align="center"
          preventActiveStyles={true}
          size="44px"
        />
        <GoogleLoginButton
          align="center"
          preventActiveStyles={true}
          size="44px"
        />
        <Link className=" pt-6" href={"/login"}>
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default page;
