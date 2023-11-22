import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";
import "./QuestionCard.css";
import { AnswerHandler } from "./QuestionCard.utils";

export const QuestionCard = () => {
  const { state, dispatch } = useQuiz();

  return (
    <div className="question-card">
      <div className="options">
        {state.data[state.questionNum]?.options.map((option: any) => {
          return (
            <div
              key={option}
              className={
                option === state.data[state.questionNum]?.rightOption
                  ? `option ${state.clickedRight}`
                  : `option ${state.clickedWrong}`
              }
              onClick={() => {
                AnswerHandler({
                  option: option,
                  plusPoint: state.data[state.questionNum]?.plusPoint,
                  negativePoint: state.data[state.questionNum]?.negativePoint,
                  state,
                  dispatch,
                });
              }}
            >
              <img className="option-img" src={option} alt="Option Img"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
