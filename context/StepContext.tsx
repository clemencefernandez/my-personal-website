import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
  useCallback,
} from "react";

type Step = {
  title: string;
  description: string;
  inputs?: Array<{
    label: string;
    validResponses: string[];
    description: string;
  }>;
};
export const steps: Step[] = [
  {
    title: "Bienvenue",
    description: "Bienvenue dans le formulaire.",
  },
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

const stepNumberArray = Array.from({ length: steps.length }, (_, i) => i);

type StepContextType = {
  step: (typeof stepNumberArray)[number];
  goToNextStep: () => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [step, setStep] = useState<number>(stepNumberArray[0]);

  // Load the step from localStorage when the component mounts
  // Avoid error "window is undefined" in SSR
  useEffect(() => {
    const stepLocalStorage = window.localStorage.getItem("step");
    const storedStep = stepLocalStorage ? parseInt(stepLocalStorage) : 0;

    if (storedStep < steps.length) {
      setStep(storedStep);
    }
  }, []);

  const goToNextStep = useCallback(() => {
    const nextStep = step + 1;
    console.log(steps);
    if (nextStep < steps.length) {
      setStep(nextStep);
      window.localStorage.setItem("step", nextStep.toString());
    } else {
      console.log("Il n'y a pas d'étape suivante.");
    }
  }, [step]);

  return (
    <StepContext.Provider value={{ step, goToNextStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep should be used inside StepProvider");
  }
  return context;
};
