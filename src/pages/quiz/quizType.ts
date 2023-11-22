type question = {
  question: string;
  plusPoint: number;
  negativePoint: number;
  rightOption?: string;
  wrongOption?: string;
  options?: string[];
};

export type Questions = question[];
