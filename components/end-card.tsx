import { useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { supabase } from "@/lib/supabaseClient";

type Props = {
  handleRestart: () => void;
};

const saveToDatabase = async ({
  team_name,
  start_at,
}: {
  team_name: string;
  start_at: string;
}) => {
  try {
    const { error } = await supabase.from("game_sessions").insert([
      {
        team_name,
        start_at,
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", { start_at, team_name });
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};

const EndCard = ({ handleRestart }: Props) => {
  const startTime = window.localStorage.getItem("startTime");
  const userName = window.localStorage.getItem("userName") || "agent anonyme";
  const endTimeInMs = Date.now();
  const startTimeInMs = startTime ? new Date(startTime).getTime() : 0;
  const timeElapsed = startTime ? endTimeInMs - startTimeInMs : 0;
  const minutes = Math.floor(timeElapsed / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);
  const formattedTime = `${minutes} minutes et ${seconds} secondes`;

  useEffect(() => {
    if (startTime && userName) {
      saveToDatabase({
        start_at: startTime,
        team_name: userName,
      });
    }
    // We want to save the data only one
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="w-full max-w-7xl">
      <CardHeader>
        <CardTitle>🎉 Mission accomplie !</CardTitle>
        <CardDescription className="space-y-2 flex flex-col gap-4">
          <span>
            Bien joué équipe <strong>{userName}</strong> ! Grâce à votre
            persévérance, vous avez réussi à{" "}
            <strong>retrouver le hacker</strong> de Tom Fraize et à accéder à
            ses <strong>données personnelles</strong>.
          </span>
          <span>
            Mais comme vous êtes{" "}
            <strong>des véritables hackers éthiques</strong>, vous n’en ferez{" "}
            <strong>évidemment rien</strong> 💡.
          </span>
          <span>Vous avez relevé l’enquête avec brio !</span>
          <span className="py-4 self-center">
            ⏱️ Temps réalisé : <strong>{formattedTime}</strong>
          </span>
          <span>
            📚 Pour revoir tous les outils utilisés et les bonnes pratiques :{" "}
            <a
              href="https://troubled-trollius-231.notion.site/Protection-num-rique-1c7ae4a6665e801fa652f71ab2b1fbc6"
              target="_blank"
              rel="noopener noreferrer"
            >
              consulte le livret d’enquête ici.
            </a>
          </span>
          <span>
            <h2 className="text-2xl font-bold">
              {`🕵️‍♂️ Explore l'OSINT par toi-même`}
            </h2>
            <p className="text-muted-foreground">
              L’OSINT (Open Source Intelligence) consiste à collecter des
              informations à partir de sources publiques.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">
                    🔐 Tes informations ont-elles fuité ?
                  </h3>
                  <p>
                    Vérifie si ton adresse e-mail ou ton numéro de téléphone ont
                    été compromis dans des fuites de données.
                  </p>
                  <Image
                    src="/haveIbeenpwned.png"
                    alt="QR code vers le livret d'aide - Have I Been Pwned"
                    width={120}
                    height={120}
                    className="hidden md:block"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">
                    🖼️ Des photos de toi ou de tes sosies circulent-elles en
                    ligne ?
                  </h3>
                  <p>
                    Utilise la reconnaissance faciale pour savoir si des images
                    de toi sont disponibles sur le web.
                  </p>
                  <Image
                    src="/pimeyes.svg"
                    alt="QR code vers le livret d'aide - Pimeyes"
                    width={120}
                    height={120}
                    className="hidden md:block"
                  />
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground">
              {`⚠️ Assure-toi de n'utiliser ces outils que pour rechercher des
              informations te concernant ou avec l'autorisation explicite des
              personnes concernées. L'OSINT est puissant et doit être pratiqué
              de manière éthique et responsable.`}
            </p>
          </span>
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button
          className="mx-auto"
          onClick={handleRestart}
        >{`Recommencer`}</Button>
      </CardFooter>
    </Card>
  );
};

export default EndCard;
