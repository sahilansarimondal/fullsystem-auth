import React, { ReactElement, useState } from "react";

const useMultistepFrom = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] =
    useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goto(index: number) {
    setCurrentStepIndex(index);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    firstIndex: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goto,
    next,
    back,
    steps,
  };
};

export default useMultistepFrom;
