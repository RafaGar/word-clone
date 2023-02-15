import React from "react";
import Guess from "./Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

const GuessResults = ({ wordList, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={crypto.randomUUID()}
          value={wordList[num]}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default GuessResults;
