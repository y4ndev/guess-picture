import React from "react";
import { films } from "@/utils/imageFilms";
import Image from "next/image";

const PlayingField = () => {
  return (
    <div>
      {films.map((film) => (
        <div key={film.id}>
          <h3>{film.title}</h3>
          <Image src={film.image} alt={film.title} width={300} height={450} />
        </div>
      ))}
    </div>
  );
};

export { PlayingField };
