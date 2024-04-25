import React from "react";

interface FromWrapperProps {
  heading: string;
  para: string;
  children: React.ReactNode;
}

const FromWrapper: React.FC<FromWrapperProps> = ({
  heading,
  para,
  children,
}) => {
  return (
    <>
      <h2 className=" font-bold text-2xl md:text-4xl text-center py-4 md:py-8">
        {heading}
      </h2>
      <p>{para}</p>
      <div className=" flex flex-col gap-4 py-6">
        {children}
      </div>
    </>
  );
};

export default FromWrapper;
