import React from "react";

const GameOverBanner = ({ gameStatus, wordList, answer }) => {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations</strong> Got it in
          <strong> {wordList.length} Guesses</strong>
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          {" "}
          Sorry the correct answer is
          <strong> {answer}</strong>
        </p>
      </div>
    );
  }
};

export default GameOverBanner;
