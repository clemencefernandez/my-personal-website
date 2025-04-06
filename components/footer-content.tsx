"use client";

import { Button } from "./ui/button";
import { HelpingHandIcon, RotateCcw } from "lucide-react";
import { useGame } from "@/context/game-context";
import Image from "next/image";
import KnownInfoDrawer from "./known-info-drawer";

export default function FooterContent() {
  const { handleResetAndReload } = useGame();

  return (
    <div className="rounded-md flex flex-wrap gap-6 items-center justify-center px-4 w-full">
      {/* Section Aide */}
      <div className="flex flex-col items-center gap-3 rounded-md text-sm font-medium">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white!"
          href="https://troubled-trollius-231.notion.site/Protection-num-rique-1c7ae4a6665e801fa652f71ab2b1fbc6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HelpingHandIcon className="h-4 w-4" />
          Aide
        </a>

        <Image
          src="/QRCodeProtectionNumerique.svg"
          alt="QR code vers le livret d'aide"
          width={120}
          height={120}
          className="hidden md:block"
        />
      </div>
      <Button variant="secondary" onClick={handleResetAndReload}>
        <RotateCcw className="mr-2 h-4 w-4" />
        <span className="hidden md:block">Recommencer</span>
      </Button>
      <KnownInfoDrawer />s
    </div>
  );
}
