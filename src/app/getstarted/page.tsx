"use client";

import AddFriends from "@/components/AddFriends";
import PaymentForm from "@/components/PaymentForm";
import SetPassword from "@/components/SetPassword";
import Button from "@/components/ui/Button";
import useMultistepFrom from "@/components/useMultistepFrom";
import React, { useEffect, useState } from "react";

type FormData = {
  email1: string;
  email1Error: boolean;
  email2: string;
  email3: string;
  email4: string;
  groupPassword: string;
  groupPasswordError: boolean;
  planValue: string;
  CardHolderName: string;
  cardNumber: string;
};

const InitialData: FormData = {
  email1: "",
  email1Error: false,
  email2: "",
  email3: "",
  email4: "",
  groupPassword: "",
  groupPasswordError: false,
  planValue: "",
  CardHolderName: "",
  cardNumber: "",
};

const GetStarted = () => {
  const [data, setData] = useState(InitialData);
  const [formError, setFormError] = useState(false);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const {
    steps,
    currentStepIndex,
    step,
    firstIndex,
    isLastStep,
    next,
    back,
  } = useMultistepFrom([
    <AddFriends {...data} updateFields={updateFields} />,
    <SetPassword {...data} updateFields={updateFields} />,
    <PaymentForm {...data} updateFields={updateFields} />,
  ]);

  const emailErrorHandler = () => {
    if (currentStepIndex === 0) {
      if (!data.email1.trim()) {
        setFormError(true);
        setData((prev) => {
          return { ...prev, email1Error: true };
        });
      } else {
        setFormError(false);
        setData((prev) => {
          return { ...prev, email1Error: false };
        });
      }
    } else if (currentStepIndex === 1) {
      if (!data.groupPassword.trim()) {
        setFormError(true);
        setData((prev) => {
          return { ...prev, groupPasswordError: true };
        });
      } else {
        setFormError(false);
        setData((prev) => {
          return { ...prev, groupPasswordError: false };
        });
      }
    } else {
      setFormError(false);
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!formError) {
      next();
    }
  };

  return (
    <div className=" relative bg-white border border-black rounded-lg p-8 m-4 flex flex-col gap-3 justify-center items-center max-w-[1080px] md:px-12 md:max-w-[700px] mt-12 min-h-[550px]  md:mx-auto">
      <form onSubmit={handleSubmit}>
        <div className=" absolute top-1 right-1">
          {" "}
          {currentStepIndex + 1}/{steps.length}{" "}
        </div>

        {step}

        <div className=" button flex justify-between pt-6">
          <div>
            {!firstIndex && (
              <Button
                name="Back"
                type="button"
                onClick={() => back()}
                className=" bg-white border-2 hover:bg-slate-100 border-green-400 hover:border-green-500 py-[2px] px-5"
              />
            )}
          </div>

          <Button
            name={isLastStep ? "Pay" : "Next"}
            type="submit"
            className=" bg-green-400 border-2 hover:bg-green-500 border-green-400 hover:border-green-500 py-[2px] px-5"
          />
        </div>
      </form>
    </div>
  );
};

export default GetStarted;
