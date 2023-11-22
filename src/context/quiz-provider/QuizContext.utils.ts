import customData from '../../data/quiz.json';

export const generateOptions = () => customData.map((qus) => ({
    ...qus,
    options: [qus.rightOption, qus.wrongOption].sort(() => Math.random() - 0.5),
  }));
  