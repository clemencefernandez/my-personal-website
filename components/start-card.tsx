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
const subtitle = steps[0].subtitle;
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
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
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
            <Button type="submit">GO !</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
