import { Questions } from "../../pages/quiz/quizType";

export type QUIZ_ACTION =
  | { type: "initialize-user-name"; payload: string }
  | { type: "initialize-quiz" }
  | { type: "increment"; negativePoint: number; plusPoint: number }
  | { type: "decrement"; negativePoint: number; plusPoint: number }
  | { type: "initialize-data"; data: Questions }
  | { type: "show-answer"; payload: boolean }
  | { type: "retry-quiz" }
  | { type: "next-question" };

export type INITIAL_STATE = {
  score: number;
  data: any;
  questionNum: number;
  isNxtBtn: boolean;
  clickedRight: string;
  clickedWrong: string;
  startQuiz: boolean;
  userName: string;
};
