import React from "react";
import { useGameStore } from "@/store/gameStore";
import { useCategory } from "@/hooks/useCategory";

const UserInput = () => {
  const { currentImage, userAnswer, currentScore, setUserAnswer, setNextImage } = useGameStore();

  const category = useCategory();

  const handleNext = () => {
    if (!userAnswer.trim()) return;
    const correctAnswer = category?.title[currentImage]?.toLowerCase();
    const userInput = userAnswer.trim().toLowerCase();

    setNextImage(correctAnswer === userInput);
  };

  return (
    <>
      <input value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} type="text" />
      <button onClick={handleNext} disabled={userAnswer.length === 0}>
        КНОПОЧКА
      </button>
    </>
  );
};

export { UserInput };
