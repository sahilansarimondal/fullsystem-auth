"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import { setEnvironmentData } from "worker_threads";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
    >
      <InputField
        type="email"
        label="Email"
        placeholder="Email"
        value={email}
        error={error}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        label="Password"
        placeholder="Password"
        value={password}
        error={false}
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
