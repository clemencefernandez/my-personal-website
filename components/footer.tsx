"use client";
import { Button } from "./ui/button";
import { HelpingHandIcon, RotateCcw } from "lucide-react";
import { useGame } from "@/context/game-context";
import Image from "next/image";

export default function Footer() {
  const { handleResetAndReload } = useGame();

  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-4 border-white border-solid border-1">
      {/* Lien vers le livret d'aide */}
      <div className="flex items-center gap-3 bg-white py-2 px-3 rounded-md text-sm font-medium">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://troubled-trollius-231.notion.site/Protection-num-rique-1c7ae4a6665e801fa652f71ab2b1fbc6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HelpingHandIcon />
          Aide
        </a>
      </div>
      <Image
        src="/QRCodeProtectionNumerique.svg"
        alt="QR code vers le livret d'aide"
        width={120}
        height={120}
      />
      {/* Bouton pour recommencer */}
      <Button
        className="bg-white"
        variant="ghost"
        onClick={handleResetAndReload}
      >
        <RotateCcw />
        Recommencer
      </Button>
    </footer>
  );
}
