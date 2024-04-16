import SignupForm from "@/components/SignupForm";
import { Sign } from "crypto";
import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <h2>
        Get unlimited access to the key ideas of 6,500+
        non-fiction bestsellers
      </h2>
      <div>
        <SignupForm />
      </div>
    </div>
  );
};

export default page;
