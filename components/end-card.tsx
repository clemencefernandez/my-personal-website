import { useEffect } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

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
            <strong>craquer le mot de passe</strong> de Tom Fraize et à accéder
            à ses <strong>coordonnées bancaires</strong>. Vous avez le combo
            parfait : numéro de téléphone + mot de passe personnel !
          </span>
          <span>
            Mais comme vous êtes <strong>véritable hacker éthique</strong>, vous
            n’en ferez <strong>évidemment rien</strong>. vous savez que le but,
            c’est d’apprendre, pas de nuire 💡.
          </span>
          <span>
            Vous venez de comprendre comment des données peuvent être
            utilisées... et vous avez relevé l’enquête avec brio !
          </span>
          <span>
            ⏱️ Temps réalisé : <strong>{formattedTime}</strong>
          </span>
          <span>
            Vous voulez donner votre avis sur ce jeu ? Envoyez un DM à{" "}
            <strong>@tom_fraize</strong> sur Insta 😉
          </span>
          <span>
            📚 Pour revoir tous les outils utilisés et les bonnes pratiques :{" "}
            <a
              href="https://troubled-trollius-231.notion.site/Protection-num-rique-1c7ae4a6665e801fa652f71ab2b1fbc6"
              target="_blank"
              rel="noopener noreferrer"
            >
              consulte le livret d’enquête ici
            </a>
            .
          </span>
          <span>
            <h2 className="text-2xl font-bold">
              {`🕵️‍♂️ Explore l'OSINT par toi-même`}
            </h2>
            <p className="text-muted-foreground">
              L’OSINT (Open Source Intelligence) consiste à collecter des
              informations à partir de sources publiques. Voici quelques outils
              gratuits et amusants pour tester ce qui est accessible en ligne te
              concernant. Ces exercices sont légaux, éducatifs et souvent
              surprenants !
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
                  <Link href="https://haveibeenpwned.com" target="_blank">
                    <Button variant="outline">
                      🔎 Tester sur Have I Been Pwned
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">
                    📱 Que révèle ton numéro de téléphone ?
                  </h3>
                  <p>
                    Découvre les informations publiques associées à ton numéro
                    de téléphone.
                  </p>
                  <Link href="https://epieos.com" target="_blank">
                    <Button variant="outline">🔎 Rechercher sur Epieos</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">
                    🖼️ Des photos de toi circulent-elles en ligne ?
                  </h3>
                  <p>
                    Utilise la reconnaissance faciale pour savoir si des images
                    de toi sont disponibles sur le web.
                  </p>
                  <Link href="https://pimeyes.com" target="_blank">
                    <Button variant="outline">🔎 Rechercher sur PimEyes</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-semibold">
                    🧠 Apprends les Google Dorks
                  </h3>
                  <p>
                    Découvre comment utiliser les Google Dorks pour effectuer
                    des recherches avancées sur Google.
                  </p>
                  <Link
                    href="https://www.jedha.co/formation-cybersecurite/google-dorks-techniques-gratuites-pour-exploiter-google"
                    target="_blank"
                  >
                    <Button variant="outline">📖 Lire le tutoriel</Button>
                  </Link>
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

      <CardContent></CardContent>

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
