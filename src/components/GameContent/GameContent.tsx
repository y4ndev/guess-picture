import React from "react";
import { useRouter } from "next/navigation";
import { useCategory } from "@/hooks/useCategory";
import { Score } from "../Score/Score";
import { UserInput } from "../UserInput/UserInput";
import { useGameStore } from "@/store/gameStore";
import { GamePictures } from "../GamePictures/GamePictures";

import styles from "./GameContent.module.scss";

const GameContent = () => {
  const { currentImage, currentScore } = useGameStore();

  const category = useCategory();
  const router = useRouter();

  React.useEffect(() => {
    if (currentImage >= category.images.length) {
      router.push("/result");
    }
  }, [currentImage, category.images.length, router]);
  return (
    <div className={styles.field}>
      {currentImage < category.images.length ? (
        <GamePictures src={category.images[currentImage]} />
      ) : // <Score currentScore={currentScore} />
      null}

      {currentImage < category.images.length && <UserInput />}
    </div>
  );
};

export { GameContent };
