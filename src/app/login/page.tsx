import SignupForm from "@/components/SignupForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-4">
      <h2 className=" font-bold text-4xl p-8">
        Log in into LG
      </h2>
      <SignupForm />
      <div className=" w-full flex gap-4 justify-center items-center">
        <div className=" w-full border-b border-slate-300"></div>
        <div className=" text-center text-slate-400 font-semibold ">
          {" "}
          or
        </div>
        <div className=" w-full border-b border-slate-300"></div>
      </div>
    </div>
  );
};

export default LoginPage;
