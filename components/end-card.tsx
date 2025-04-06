import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  handleRestart: () => void;
};

const EndCard = ({ handleRestart }: Props) => {
  const startTime = window.localStorage.getItem("startTime");
  const userName = window.localStorage.getItem("userName") || "agent anonyme";
  const finishTime = Date.now();
  const startTimeInMs = startTime ? parseInt(startTime) : 0;
  const timeElapsed = startTime ? finishTime - startTimeInMs : 0;
  const minutes = Math.floor(timeElapsed / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);
  const formattedTime = `${minutes} minutes et ${seconds} secondes`;

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
            Tu veux donner ton avis sur ce jeu ? Envoie un DM à{" "}
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
