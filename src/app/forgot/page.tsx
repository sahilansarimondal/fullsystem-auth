"use client";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log({ email: email });
    if (!email.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);
      await signIn("email", {
        email: email,
        redirect: true,
        callbackUrl:
          process.env.NEXT_PUBLIC_URL + "/createpassword",
      });
    }
  };
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-4">
      <h2 className=" font-bold text-3xl p-6">
        Forgot your password?
      </h2>
      <p className=" text-slate-600 pb-6 font-medium">
        No problem—it happens to everyone!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3  min-w-full md:min-w-96"
      >
        <InputField
          type="email"
          label="Email"
          placeholder="Email"
          error={emailError}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          name={"Reset password"}
          className=" bg-green-400  hover:bg-green-500 py-2.5 px-4 "
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
