"use client";

import InputField from "@/components/ui/InputField";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <h2>Forgot your password?</h2>
      <p>No problem—it happens to everyone!</p>
      <InputField
        type="email"
        label="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default ForgotPassword;
