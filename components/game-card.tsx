"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FormFieldInputs from "./form-field-inputs";
import { GamePage } from "@/types/model";

type Props = { stepItem: GamePage; goToNextStep: () => void };

const GameCard: React.FC<Props> = ({ stepItem, goToNextStep }: Props) => {
  const { description, inputs, title } = stepItem;

  const [validInputs, setValidInputs] = useState<boolean[]>(
    Array(inputs.length).fill(false)
  );

  const handleValidationChange = (index: number, isValid: boolean) => {
    setValidInputs((prev) => {
      const updated = [...prev];
      updated[index] = isValid;
      return updated;
    });
  };

  const isFormValid = validInputs.every(Boolean);

  return (
    <Card className="w-full max-w-7xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <FormFieldInputs
          inputs={inputs}
          handleValidationChange={handleValidationChange}
        />
      </CardContent>
      <CardFooter>
        <Button
          disabled={!isFormValid}
          onClick={goToNextStep}
          className="ml-auto"
        >{`Passer à l'étape suivante`}</Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
