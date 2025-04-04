"use client";
import React from "react";
import FormCard from "@/components/form-card";
import { useStep, StepProvider, steps } from "@/context/StepContext";

const PageContent = () => {
  const { step, goToNextStep } = useStep();

  return <FormCard key={step} handleNextStep={goToNextStep} {...steps[step]} />;
};

export default function Page() {
  return (
    <StepProvider>
      <PageContent />
    </StepProvider>
  );
}
