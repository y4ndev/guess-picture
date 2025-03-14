import React, { useState } from "react";

import styles from "./PlayingField.module.scss";
import { ICategory } from "@/types/data";

const PlayingField = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  return <div className={styles.field}></div>;
};

export { PlayingField };
