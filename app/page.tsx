import * as React from "react";
import FormCard from "@/components/form-card";
const inputs = [
  {
    label: "Quel est le nom de l'attaquant ?",
    validResponses: ["tom", "tom fraize"],
    description: "Plus d'informations sur cette question.",
  },
  {
    label: "Quel est l'âge de l'attaquant ?",
    validResponses: ["18", "19", "20"],
    description: "Répondez avec un âge valide.",
  },
];
export default function Page() {
  return (
    <FormCard
      title="Première étape"
      inputs={inputs}
      description={"Voici la description de la première étape."}
    />
  );
}
