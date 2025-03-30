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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <>
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="firstName">{`Quel est le nom de l'attaquant ?`}</Label>
              <div className="flex gap-2">
                <Input
                  id="firstName"
                  placeholder="Format de réponse : **** ****"
                />
                <Button>Envoyer</Button>
              </div>
              <Label htmlFor="lastName">{`Quel est le nom de l'attaquant ?`}</Label>
              <div className="flex gap-2">
                <Input
                  id="lastName"
                  placeholder="Format de réponse : **** ****"
                />
                <Button>Envoyer</Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex">
          <Button className="w-full">{`Passer à l'étape suivante`}</Button>
        </CardFooter>
      </Card>
    </>
  );
}
