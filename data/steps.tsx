import { Steps } from "@/types/model";
import Link from "next/link";

export const steps: Steps = [
  {
    title: "Bienvenue",
    description:
      "Vous êtes des hackers d’élite 🎭. Votre objectif : infiltrer les réseaux et retrouver une information ultra-confidentielle sur un certain",
  },
  {
    title: "Première étape",
    description: (
      <>
        <p>
          {`Vous avez récemment été victimes d'une cyberattaque. Aucun dégât
          majeur n’a été constaté, et les systèmes ne présentent pas de signes
          évidents de compromission.`}
        </p>
        <p>
          Cependant, lors de l’investigation, les administrateurs ont découvert
          une{" "}
          <Link
            href="https://raw.githubusercontent.com/OsintDojo/public/3f178408909bc1aae7ea2f51126984a8813b0901/sakurapwnedletter.svg"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-primary hover:text-secondary transition-colors"
          >
            image
          </Link>{" "}
          laissée par le cybercriminel.
        </p>
        <p>
          Peut-être contient-elle des indices permettant d’identifier les
          attaquants ?
        </p>
      </>
    ),
    inputs: [
      {
        label: "Quel est le pseudo de l’attaquant ?",
        validResponses: ["tom"],
        description:
          "Trouvez le pseudo de l'attaquant en vous appuyant sur les indices donnés.",
      },
    ],
  },
  {
    title: "Deuxième étape",
    description: "so whaaaat.",
    inputs: [
      {
        label: "Quel est le nom de l'attaquant ?",
        validResponses: ["tom", "tom fraize"],
        description: "Plus d'informations sur cette question.",
      },
    ],
  },
  {
    title: "Fin.",
    description: "so whaaaat.",
  },
];
