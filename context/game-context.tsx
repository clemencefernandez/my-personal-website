import { steps } from "@/data/steps";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
  useCallback,
} from "react";

const stepNumberArray = Array.from({ length: steps.length }, (_, i) => i);

type GameContextType = {
  step: (typeof stepNumberArray)[number];
  goToNextStep: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  handleReset: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
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

  const handleReset = () => {
    localStorage.setItem("step", "0");
    window.location.reload();
  };

  return (
    <GameContext.Provider value={{ step, goToNextStep, handleReset }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame should be used inside the contexte");
  }
  return context;
};
