"use client";
import React from "react";
import FormCard from "@/components/form-card";

import Footer from "@/components/footer";
import { GameProvider, useGame } from "@/context/game-context";
import { steps } from "@/data/steps";

const PageContent = () => {
  const { step, goToNextStep, handleReset } = useGame();

  return (
    <FormCard
      key={step}
      submitButtonProps={{
        onClick: step === steps.length - 1 ? handleReset : goToNextStep,
        children: step === steps.length - 1 ? "Recommencer" : "Suivant",
      }}
      {...steps[step]}
    />
  );
};

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <GameProvider>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <PageContent />
        </main>
        <Footer />
      </GameProvider>
    </div>
  );
}
