export const StartQuiz = ({
  setIsLoader,
  dispatch,
}: {
  setIsLoader: any;
  dispatch: any;
}) => {
  setIsLoader(true);
    setTimeout(async () => {
      dispatch({ type: "initialize-data" });
      setIsLoader(false);
    }, 500);
};
