import React from "react";

interface IScore {
  currentScore: number;
}

const Score: React.FC<IScore> = ({ currentScore }) => {
  return <div>Score: {currentScore}</div>;
};

export { Score };
