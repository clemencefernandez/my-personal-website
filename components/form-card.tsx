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
import { Step } from "@/type/step";

type Props = Step & {
  submitButtonProps: Pick<
    React.ComponentProps<"button">,
    "onClick" | "children"
  >;
};

const FormCard: React.FC<Props> = ({
  content,
  subtitle,
  inputs,
  title,
  submitButtonProps,
}) => {
  const [validInputs, setValidInputs] = useState<boolean[]>(
    inputs ? Array(inputs.length).fill(false) : [true]
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
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        {content && content}
        {inputs && (
          <FormFieldInputs
            inputs={inputs}
            handleValidationChange={handleValidationChange}
          />
        )}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={!isFormValid}
          {...submitButtonProps}
        />
      </CardFooter>
    </Card>
  );
};

export default FormCard;
