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
import FormFieldInput, { FormFieldInputProps } from "./form-field-input";

type InputProps = Pick<
  FormFieldInputProps,
  "validResponses" | "label" | "description"
>;

interface FormCardProps {
  title: string;
  description: string;
  inputs: InputProps[];
}

const FormCard: React.FC<FormCardProps> = ({ inputs, title, description }) => {
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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        {inputs.map((input, index) => (
          <FormFieldInput
            key={index}
            setIsCorrect={() => handleValidationChange(index, true)}
            {...input}
          />
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={!isFormValid}>
          {`Passer à l'étape suivante`}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FormCard;
