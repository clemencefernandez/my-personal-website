"use client";
import * as React from "react";
import FormCard, { FormCardProps } from "@/components/form-card";
import { useEffect, useState } from "react";

const steps: FormCardProps[] = [
  {
    title: "Première étape",
    description: "Voici la description de la première étape.",
    inputs: [
      {
        label: "Quel est le nom de l'attaquant ?",
        validResponses: ["tom", "tom fraize"],
        description: "Plus d'informations sur cette question.",
      },
      {
        label: "Quel est l'âge de l'attaquant ?",
        validResponses: ["18", "19", "20"],
        description: "Répondez avec un âge valide.",
      },
    ],
  },
  {
    title: "Deuxième étape",
    description: "so whaaaat.",
    inputs: [
      {
        label: "Quel est le nom de l'attaquant ?",
        validResponses: ["tom", "tom fraize"],
        description: "Plus d'informations sur cette question.",
      },
    ],
  },
];

const stepsArray = [0, 1];
type Step = (typeof stepsArray)[number];

export default function Page() {
  const [step, setStep] = useState<Step>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedStep = localStorage.getItem("step");
      if (storedStep && stepsArray.includes(parseInt(storedStep))) {
        setStep(parseInt(storedStep));
      } else {
        console.log(storedStep, { storedStep });
        localStorage.setItem("step", "0");
      }
    }
  }, [setStep]);

  const handleNextStep = React.useCallback(() => {
    const nextStep = step + 1;
    if (!stepsArray.includes(nextStep)) {
      console.log("no next step");
      return;
    }
    if (nextStep < steps.length) {
      setStep(nextStep);
      if (typeof window !== "undefined") {
        localStorage.setItem("step", nextStep.toString());
      }
    }
  }, [step]);

  return (
    <FormCard key={step} handleNextStep={handleNextStep} {...steps[step]} />
  );
}
