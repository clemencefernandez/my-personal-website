"use client";

import React from "react";
import Footer from "@/components/footer";
import { GameProvider, useGame } from "@/context/game-context";
import { steps } from "@/data/steps";
import { StartCard } from "@/components/start-card";
import EndCard from "@/components/end-card";
import GameCard from "@/components/game-card";
import { GamePage, Steps } from "@/types/model";

const isValidGameStep = (stepItem: Steps[number]): stepItem is GamePage => {
  const index = steps.findIndex((item) => item === stepItem);
  return index > 0 && index < steps.length - 1;
};

const PageContent = () => {
  const { step, goToNextStep, handleResetAndReload } = useGame();

  if (step === 0) return <StartCard goToNextStep={goToNextStep} />;

  if (step === steps.length - 1)
    return <EndCard handleRestart={handleResetAndReload} />;

  const stepItem = steps[step];
  if (!isValidGameStep(stepItem)) {
    console.error("Invalid step number:", { step }, stepItem);
    return null; // replace by "error content"
  }

  return (
    <GameCard key={step} stepItem={stepItem} goToNextStep={goToNextStep} />
  );
};

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <GameProvider>
        <main className="flex flex-col gap-8 row-start-2 items-center w-full">
          <PageContent />
        </main>
        <Footer />
      </GameProvider>
    </div>
  );
}
