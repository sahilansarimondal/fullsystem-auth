"use client";
import PricingCard from "@/components/PricingCard";
import Button from "@/components/ui/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentPage = () => {
  const router = useRouter();
  const [prices, setPrices] = React.useState([]);

  React.useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/api/products");
    setPrices(data);
    console.log(data);
  };

  return (
    <div className=" relative  bg-white border border-black rounded-lg p-2 m-4 flex flex-col gap-3 justify-center items-center md:p-4  md:max-w-[800px] mt-12 min-h-[550px]  md:mx-auto">
      <div className=" button flex flex-col pb-4 justify-between pt-6">
        <section className=" py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-orange-500 sm:text-5xl">
                Pricing Plans
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Simple, transparent pricing for your
                business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {prices &&
                prices.map((price) => (
                  <PricingCard price={price} />
                ))}
            </div>
          </div>
        </section>

        <div>
          <Button
            name="Back"
            type="button"
            className=" bg-white border-2 hover:bg-slate-100 border-green-400 hover:border-green-500 py-[2px] px-5"
            onClick={() => {
              router.push("/getstarted");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
