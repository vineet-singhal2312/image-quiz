import { generateOptions } from "./QuizContext.utils";
import { QUIZ_ACTION, INITIAL_STATE } from "./QuizReducer.type";

export const InitialState: INITIAL_STATE = {
  score: 0,
  data: generateOptions(),
  questionNum: 0,
  isNxtBtn: false,
  clickedRight: "",
  clickedWrong: "",
  startQuiz: false,
  userName: "",
};

export const QuizReducer = (
  state: typeof InitialState,
  action: QUIZ_ACTION
) => {
  switch (action.type) {
    case "initialize-user-name":
      return { ...state, userName: action.payload };
    case "initialize-quiz":
      return {
        ...state,
        score: 0,
        questionNum: 0,
        isNxtBtn: false,
        clickedRight: "",
        clickedWrong: "",
        startQuiz: false,
      };
    case "increment":
      return { ...state, score: state.score + action.plusPoint };

    case "decrement":
      return { ...state, score: state.score - action.negativePoint };

    case "initialize-data":
      return { ...state, startQuiz: true };

    case "show-answer":
      return { ...state, isNxtBtn: action.payload, clickedRight: "right", clickedWrong: "wrong" };
    
    case "retry-quiz":
      return {
        ...state,
        score: 0,
        questionNum: 0,
        data: generateOptions(),
        isNxtBtn: false,
        clickedRight: "",
        clickedWrong: "",
        startQuiz: false,
      };
    case "next-question":
      return {
        ...state,
        clickedWrong: "",
        clickedRight: "",
        isNxtBtn: false,
        questionNum: state.questionNum + 1,
      };
    default:
      throw new Error();
  }
};
