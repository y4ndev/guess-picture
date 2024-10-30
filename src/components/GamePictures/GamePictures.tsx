import Image from "next/image";
import React from "react";
import styles from "./GamePictures.module.scss";

interface IGamePicture {
  src: any;
}

const GamePictures: React.FC<IGamePicture> = ({ src }) => {
  return (
    <div className={styles.picture}>
      <Image alt="gameCard" src={src} width={500} height={550} />
    </div>
  );
};

export { GamePictures };
