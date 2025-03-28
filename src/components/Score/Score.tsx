import React from "react";
import styles from "./Score.module.scss";

interface IScore {
  currentScore: number;
}

const Score: React.FC<IScore> = ({ currentScore }) => {
  return (
    <div className={styles.score}>
      <span className={styles.text}>Score: {currentScore}</span>
    </div>
  );
};

export { Score };
