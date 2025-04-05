"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { steps } from "@/data/steps";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom doit avoir au moins 2 caractères",
  }),
});

const title = steps[0].title;
const description = steps[0].description;
type Props = {
  goToNextStep: () => void;
};
export function StartCard({ goToNextStep }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    window.localStorage.setItem("userName", data.username);
    window.localStorage.setItem("startTime", Date.now().toString());
    goToNextStep();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du joueur</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ton nom ou celui de ton équipe"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Ce nom sera utilisé pour le classement.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Prêt à jouer ? GO !
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
