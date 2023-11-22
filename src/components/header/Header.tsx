import { Button } from "@material-ui/core";
import "./Header.css";
import { StartQuiz } from "../../pages/quiz/Quiz.utils";
import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";

export const Header = ({ heading, setIsLoader }: { heading: string, setIsLoader: any }) => {
  const { state, dispatch } = useQuiz();
  return (
    <div className="header">
      <h1 className="header-heading">{heading}</h1>
      {!state?.startQuiz &&
      <Button
        id="button"
        onClick={() =>
          StartQuiz({
            setIsLoader,
            dispatch,
          })
        }
      >
        Start
      </Button>}
    </div>
  );
};
