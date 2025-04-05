"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { RotateCcw } from "lucide-react";
import { useGame } from "@/context/game-context";

export default function Footer() {
  const { handleResetAndReload } = useGame();

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
      <Button variant="ghost" onClick={handleResetAndReload}>
        <RotateCcw />
        Recommencer
      </Button>
    </footer>
  );
}
