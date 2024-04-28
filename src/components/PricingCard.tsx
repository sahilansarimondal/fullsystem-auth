import axios from "axios";
import React from "react";

const PricingCard = ({ price }: any) => {
  const handleCheckout = async () => {
    const { data } = await axios.post("/api/payment", {
      price: price.unit_amount,
      productName: price.product.name,
    });
    window.location.assign(data);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white">
          {price.nickname}
        </h3>
      </div>
      <div className="mb-8">
        <span className="text-4xl font-extrabold text-white">
          {(price.unit_amount / 100).toLocaleString(
            "en-US",
            { style: "currency", currency: "USD" }
          )}
        </span>
        <span className="text-xl font-medium text-gray-400">
          /mo
        </span>
      </div>
      <ul className="mb-8 space-y-4 text-gray-400">
        <li className="flex items-center">
          <svg
            className="h-6 w-6 text-green-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>5 user accounts</span>
        </li>
        <li className="flex items-center">
          <svg
            className="h-6 w-6 text-green-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>100 transactions per month</span>
        </li>
        <li className="flex items-center">
          <svg
            className="h-6 w-6 text-green-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Standard support</span>
        </li>
      </ul>
      <button
        onClick={handleCheckout}
        className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r bg-green-500 hover:bg-green-600 "
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
