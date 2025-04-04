import { useGame } from "@/context/game-context";

const EndContent = () => {
  const { userName, startTime } = useGame();

  const finishTime = Date.now();
  const timeElapsed = startTime ? finishTime - startTime : 0;
  const minutes = Math.floor(timeElapsed / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);
  const formattedTime = `${minutes} minutes et ${seconds} secondes`;
  return (
    <>
      {userName}
      {formattedTime}
    </>
  );
};
export default EndContent;
// Compare this snippet from components/form-field-inputs.tsx:
