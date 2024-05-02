"use client";

import React, { FormEvent, useState } from "react";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";
import { getUser } from "@/lib/actions";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface SignupFormProps {
  buttonName: string;
}

const SignupForm: React.FC<SignupFormProps> = ({
  buttonName,
}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log({ email: email, password: password });
    if (!email.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);

      const user = await getUser(email);

      if (user) {
        toast.error("User already exists, please login");
        router.push("/login");
        return;
      }

      await signIn("email", {
        email: email,
        redirect: true,
        callbackUrl:
          process.env.NEXT_PUBLIC_URL + "/createpassword",
      });
    }
  };
  const handleSubmitLog = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log({ email: email, password: password });

    if (!email.trim()) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password.trim()) {
      setPasswordError(true);
    } else {
      setPasswordError(false);

      const user = await getUser(email);

      if (!user) {
        toast.error("User not found, please signup");
        router.push("/signup");
        return;
      }

      await signIn("credentials", {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: process.env.NEXT_PUBLIC_URL!,
      });
    }
  };

  return (
    <form
      onSubmit={
        buttonName === "Create account"
          ? handleSubmit
          : handleSubmitLog
      }
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
      {buttonName !== "Create account" && (
        <InputField
          type="password"
          label="Password"
          placeholder="Password"
          value={password}
          error={passwordError}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}

      <Button
        type="submit"
        name={buttonName}
        className=" bg-green-400  hover:bg-green-500 py-2.5 px-4 "
      />
      <Toaster position="top-center" />
    </form>
  );
};

export default SignupForm;
