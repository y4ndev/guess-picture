import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./GamePictures.module.scss";

interface IGamePicture {
  src: string | StaticImageData;
}

const GamePictures: React.FC<IGamePicture> = ({ src }) => {
  return (
    <div className={styles.picture}>
      <Image alt="gameCard" src={src} layout="fill" objectFit="contain" />
    </div>
  );
};

export { GamePictures };
