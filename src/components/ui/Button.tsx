import React from "react";

interface ButtonProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={` font-medium rounded ` + className}
    >
      {name}
    </button>
  );
};

export default Button;
