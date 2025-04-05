import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { steps } from "@/data/steps";

const title = steps[steps.length - 1].title;
const description = steps[steps.length - 1].description;

type Props = {
  handleRestart: () => void;
};

const EndCard = ({ handleRestart }: Props) => {
  const startTime = window.localStorage.getItem("startTime");
  const userName = window.localStorage.getItem("userName");
  const finishTime = Date.now();
  const startTimeInMs = startTime ? parseInt(startTime) : 0;
  const timeElapsed = startTime ? finishTime - startTimeInMs : 0;
  const minutes = Math.floor(timeElapsed / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);
  const formattedTime = `${minutes} minutes et ${seconds} secondes`;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {userName}
        {formattedTime}
      </CardContent>
      <CardFooter>
        <Button onClick={handleRestart}>{`Recommencer`}</Button>
      </CardFooter>
    </Card>
  );
};
export default EndCard;
