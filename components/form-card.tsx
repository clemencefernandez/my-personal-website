"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { JSX, useState } from "react";
import FormFieldInput from "./form-field-input";

const FormCard = (): JSX.Element => {
  const [isInput1Correct, setIsInput1Correct] = useState<boolean>(false);
  const [isInput2Correct, setIsInput2Correct] = useState<boolean>(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Première étape</CardTitle>
        <CardDescription>
          Voici la description de la première étape.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <FormFieldInput
          setIsCorrect={setIsInput1Correct}
          label={`Quel est le nom de l'attaquant ?`}
          validResponses={["tom", "tom fraize"]}
          description={`Plus d'informations sur cette question.`}
        />
        <FormFieldInput
          setIsCorrect={setIsInput2Correct}
          label={`Quel est l'âge de l'attaquant' ?`}
          validResponses={["tom", "tom fraize"]}
        />
      </CardContent>
      <CardFooter className="flex">
        <Button
          className="w-full"
          disabled={!isInput1Correct || !isInput2Correct}
        >
          {`Passer à l'étape suivante`}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FormCard;
