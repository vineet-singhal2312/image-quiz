import "./Quiz.css";
import { QuestionCard } from "../../components/questioncard/QuestionCard";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";
import { ScoreCard } from "../../components/scorecard/ScoreCard";
import { Header } from "../../components/header/Header";
import { Timer } from "../../components/timer/Timer";
import CircularProgress from "@material-ui/core/CircularProgress";
import Instructions from "../../components/instructions/Instructions";

export function Quiz() {
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const { state, dispatch } = useQuiz();
  console.log(state)
  useEffect((): any => {
    dispatch({ type: "initialize-quiz" });
  }, [dispatch]);

  return (
    <div className="quiz">
      {state?.startQuiz ? (
        state?.questionNum < state.data?.length ? (
          <>
          <Header setIsLoader={setIsLoader} heading={`${state?.userName?.toUpperCase()} !! LET'S PLAY`} />
          <div className="question-card-div">
            <QuestionCard />
          </div>
          <Timer />
          <div className="next-btn-div">
            <Button
              id="button"
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch({ type: "next-question" });
              }}
            >
              {state.isNxtBtn ? <> {state.questionNum < state.data?.length - 1 ? "Next" : "Done"}</> : "Pass"}
            </Button>
          </div>
          </>
        ) : (
          <>
            <Header setIsLoader={setIsLoader} heading="GAME OVER" />
            <div className="question-card-div">
              <ScoreCard />
            </div>
            <div className="next-btn-div">
              <Button
                id="button"
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch({ type: "retry-quiz" });
                }}
              >
                Retry
              </Button>
            </div> 
          </>
        )
      ) : (
        <>
          <Header setIsLoader={setIsLoader} heading="READ THE INSTRUCTIONS BELOW!!" />
          <Instructions />
        </>
      )}
      {isLoader && <CircularProgress id="loader" />}
    </div>
  );
}
