"use client";

import React, { ChangeEvent } from "react";

interface InputFieldProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  value,
  className,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        id={label}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={`${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-500"
        } w-full p-2 border rounded`}
      />
      {error && (
        <p className="text-red-500">
          {label} can not be empty!
        </p>
      )}
    </div>
  );
};

export default InputField;
