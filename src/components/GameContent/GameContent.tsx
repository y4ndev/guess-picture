import React from "react";
import { useCategory } from "@/hooks/useCategory";
import { Score } from "../Score/Score";
import { UserInput } from "../UserInput/UserInput";
import { useGameStore } from "@/store/gameStore";
import { GamePictures } from "../GamePictures/GamePictures";

import styles from "./GameContent.module.scss";

const GameContent = () => {
  const { currentImage, currentScore } = useGameStore();

  const category = useCategory();
  return (
    <div className={styles.field}>
      {currentImage < category.images.length ? (
        <GamePictures src={category.images[currentImage]} />
      ) : (
        <Score currentScore={currentScore} />
      )}

      {currentImage < category.images.length && <UserInput />}
    </div>
  );
};

export { GameContent };
