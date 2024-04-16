import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  name: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  name,
  className,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` font-medium rounded ` + className}
    >
      {name}
    </button>
  );
};

export default Button;
