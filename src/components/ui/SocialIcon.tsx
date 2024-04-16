import React, { PropsWithChildren } from "react";

interface SocialIconProps {
  type: "button" | "submit" | "reset";
  name: string;
  onClick?: () => void;
  className?: string;
}

const SocialIcon: React.FC<
  PropsWithChildren<SocialIconProps>
> = ({ children, name, type, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        ` flex items-center gap-4 justify-center font-medium rounded ` +
        className
      }
    >
      <span>{children}</span>
      <span>{name}</span>
    </button>
  );
};

export default SocialIcon;
