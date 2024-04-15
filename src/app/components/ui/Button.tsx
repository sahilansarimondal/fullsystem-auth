import React from "react";

interface Value {
  name: string;
  className: string;
}

const Button = ({ value }: { value: Value }) => {
  return (
    <button className={value.className}>
      {value.name}
    </button>
  );
};

export default Button;
