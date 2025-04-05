const EndContent = () => {
  const startTime = window.localStorage.getItem("startTime");
  const userName = window.localStorage.getItem("userName");
  const finishTime = Date.now();
  const startTimeInMs = startTime ? parseInt(startTime) : 0;
  const timeElapsed = startTime ? finishTime - startTimeInMs : 0;
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
