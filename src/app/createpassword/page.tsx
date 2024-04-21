"use client";

import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { signIn, useSession } from "next-auth/react";
import React, {
  FormEvent,
  useEffect,
  useState,
} from "react";

const CreatePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const { data } = useSession();
  useEffect(() => {
    if (data) {
      setEmail(data.user?.email as string);
    }
  }, [password]);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log({ password: password });
    if (!password.trim()) {
      setPasswordError(true);
    } else {
      const response = await fetch("/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.status === 200) {
        console.log("we are getting response");
        console.log(response.json());
        await signIn("credentials", {
          email: email,
          password: password,
          redirect: true,
          callbackUrl: process.env.NEXT_PUBLIC_URL!,
        });
      }
      setPasswordError(false);
    }
  };
  return (
    <div className="flex flex-col gap-3 justify-center items-center p-4">
      <h2 className=" font-bold text-3xl p-6">
        Create your password?
      </h2>
      <p className=" text-slate-600 pb-6 font-medium">
        begin the journey with a strong password
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3  min-w-full md:min-w-96"
      >
        <InputField
          type="password"
          label="Password"
          placeholder="Password"
          error={passwordError}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          name={"Enter your password"}
          className=" bg-green-400  hover:bg-green-500 py-2.5 px-4 "
        />
      </form>
    </div>
  );
};

export default CreatePassword;
