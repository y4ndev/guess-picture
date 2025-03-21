import { create } from "zustand";

interface IGameState {
  currentImage: number;
  userAnswer: string;
  currentScore: number;
  setUserAnswer: (answer: string) => void;
  setNextImage: (isCorrect: boolean) => void;
  resetGame: () => void;
}

export const useGameStore = create<IGameState>((set, get) => ({
  currentImage: 0,
  userAnswer: "",
  currentScore: 0,

  setUserAnswer: (answer) => set({ userAnswer: answer }),
  setNextImage: (isCorrect) => {
    const { currentImage, currentScore } = get();
    set({
      currentImage: currentImage + 1,
      currentScore: isCorrect ? currentScore + 1 : currentScore,
      userAnswer: "",
    });
  },

  resetGame: () => set({ currentImage: 0, currentScore: 0, userAnswer: "" }),
}));
