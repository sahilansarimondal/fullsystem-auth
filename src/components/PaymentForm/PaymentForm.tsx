"use client";
import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React from "react";
import Button from "../ui/Button";
import { useSearchParams } from "next/navigation";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const searchParams = useSearchParams();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url:
          "http://localhost:3000/payment/success?email=" +
          searchParams.get("email") +
          "&price=" +
          searchParams.get("price"),
      },
    });
    if (error) {
      throw new Error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button
        type="submit"
        name={"Pay"}
        className="  bg-green-400 mt-4 hover:bg-green-500 py-2 px-10 "
      />
    </form>
  );
}
