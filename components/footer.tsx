"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";

function resetStepInLocalStorage() {
  // Remettre à zéro l'étape dans le localStorage
  localStorage.setItem("step", "0");
  // Ici, tu peux aussi effectuer toute autre réinitialisation si nécessaire
}

export default function Footer() {
  const handleReset = () => {
    resetStepInLocalStorage();
    window.location.reload();
  };

  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-white">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://troubled-trollius-231.notion.site/Protection-num-rique-1c7ae4a6665e801fa652f71ab2b1fbc6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Apprendre
      </a>
      <Button variant="ghost" onClick={handleReset}>
        <RotateCcw />
        Recommencer
      </Button>
    </footer>
  );
}
