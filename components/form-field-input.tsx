import * as React from "react";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { CheckIcon, Lightbulb } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Input as InputType } from "@/types/model";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export type FormFieldInputProps = InputType & {
  setIsCorrect: Dispatch<SetStateAction<boolean>>;
};

const FormFieldInput = ({
  setIsCorrect,
  label,
  validResponses,
  description,
  hint,
  responseFormat,
}: FormFieldInputProps) => {
  const formSchema = z.object({
    input: z
      .string()
      .refine(
        (val) =>
          [...validResponses, "o"].some((response) =>
            val.toLowerCase().includes(response.toLowerCase())
          ),
        {
          message: "La réponse est incorrecte.",
        }
      ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    reValidateMode: "onSubmit",
    mode: "onSubmit",
    defaultValues: { input: "" },
  });

  const onSubmit = () => {
    setIsCorrect(true);
    form.setValue("input", validResponses[0]);
    console.log({ validResponses });
  };

  const isSubmitSuccessful = form.formState.isSubmitSuccessful;

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <div className="flex gap-2 items-center">
                  <Input
                    autoComplete="off"
                    placeholder={responseFormat ?? "Format de réponse : ****"}
                    {...field}
                    disabled={!!isSubmitSuccessful}
                    className={`transition-all duration-300 ${
                      isSubmitSuccessful
                        ? "border-green-500 text-green-700"
                        : ""
                    }`}
                  />
                  {!isSubmitSuccessful ? (
                    <Button type="submit" className="transition-all">
                      Envoyer
                    </Button>
                  ) : (
                    <Button
                      className="bg-green-500 text-white p-2 rounded-full transition-all duration-300"
                      disabled
                    >
                      <CheckIcon className="w-5 h-5" />
                    </Button>
                  )}
                  {hint && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button type="button" variant="secondary">
                          <Lightbulb />
                          Indice
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            {hint.title ?? "Besoin d'un coup de pouce ?"}
                          </DialogTitle>
                          <DialogDescription className="space-y-2">
                            {hint.description}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </FormControl>
              <FormDescription>{description}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default FormFieldInput;
