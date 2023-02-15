import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const answerCell = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={value ? `cell ${answerCell[num].status}` : "cell"}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
