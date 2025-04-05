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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom doit avoir au moins 2 caractères",
  }),
});

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
    <Card className="w-full max-w-5xl">
      <CardHeader>
        <CardTitle>
          Bienvenue, chers spécialistes de l'OSINT en herbe !
        </CardTitle>
        <CardDescription className="space-y-3 flex flex-col gap-4">
          <span>
            {`Tisse Ta Toile a été piraté par un cybercriminel. L'attaquant pense
            s'en être tirer sans encombre. Mais qui est-il vraiment ?`}
          </span>
          <span>
            Votre mission : <strong>mener l’enquête</strong> à travers internet,
            déjouer les pièges, trouver ses données personnelles.
          </span>
          <span>
            Vous allez plonger dans le monde de la cybersécurité et du hacking…
            Mais n’oubliez pas : vous êtes des hackers <em>éthiques</em> 🧠💻
          </span>
          <span>
            Formez votre équipe, choisissez un nom, et que l’enquête commence !
          </span>
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{`Nom de l'équipe`}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ton nom d'équipe (le nom le plus drôle gagne des points !)"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Ce nom s’affichera dans le score final.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button className="w-full mt-5" type="submit">
              🚀 Prêts ? C’est parti !
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
