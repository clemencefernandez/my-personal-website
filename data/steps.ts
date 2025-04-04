import { Step } from "@/type/step";

export const steps: Step[] = [
  {
    title: "Bienvenue",
    subtitle: "Bienvenue dans le formulaire.",
    content: "ceci est du contenu",
  },
  {
    title: "Première étape",
    subtitle: "Voici la subtitle de la première étape.",
    inputs: [
      {
        label: "Quel est le nom de l'attaquant ?",
        validResponses: ["tom", "tom fraize"],
        subtitle: "Plus d'informations sur cette question.",
      },
      {
        label: "Quel est l'âge de l'attaquant ?",
        validResponses: ["18", "19", "20"],
        subtitle: "Répondez avec un âge valide.",
      },
    ],
  },
  {
    title: "Deuxième étape",
    subtitle: "so whaaaat.",
    inputs: [
      {
        label: "Quel est le nom de l'attaquant ?",
        validResponses: ["tom", "tom fraize"],
        subtitle: "Plus d'informations sur cette question.",
      },
    ],
  },
  {
    title: "Fin.",
    subtitle: "so whaaaat.",
    content: "Bravo ! Vous avez terminé le jeu.",
  },
];
