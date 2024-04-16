"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import InputField from "./ui/InputField";
import Button from "./ui/Button";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    }
  };

  return (
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
      <InputField
        type="password"
        label="Password"
        placeholder="Password"
        value={password}
        error={passwordError}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        name="Sign up"
        className=" bg-green-400  hover:bg-green-500 py-2.5 px-4 "
      />
    </form>
  );
};

export default SignupForm;
