"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";

import React, { Suspense } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "@/components/PaymentForm/PaymentForm";
import { useEffect } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function Payment() {
  const [clientSecret, setClientSecret] =
    React.useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    axios
      .post("/api/create-payment-intent", {
        data: {
          amount: parseFloat(
            searchParams.get("price") as string
          ),
          paymentMethodType: "card",
        },
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [searchParams]);
  return (
    <>
      <div className=" relative bg-white border border-black rounded-lg p-8 m-4 flex flex-col gap-3 justify-center items-center max-w-[1080px] md:px-12 md:max-w-[700px] mt-12 min-h-[550px]  md:mx-auto">
        <h1 className="text-3xl font-bold">Make Payment</h1>

        <div className=" w-5/6 my-4">
          {clientSecret && stripePromise && (
            <Elements
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <PaymentForm />
            </Elements>
          )}
        </div>
      </div>
    </>
  );
}

const PaymentPage = () => {
  return (
    <Suspense>
      <Payment />
    </Suspense>
  );
};

export default PaymentPage;
