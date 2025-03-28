"use client";
import { Score } from "@/components/Score/Score";
import { useGameStore } from "@/store/gameStore";

const ResultPage = () => {
  const { currentScore } = useGameStore();
  return (
    <div>
      <Score currentScore={currentScore} />
    </div>
  );
};

export default ResultPage;
