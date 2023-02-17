import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Components
import Input from "./Input";
import GuessResults from "./GuessResults";
import GameOverBanner from "./GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // State
  const [word, setWord] = React.useState("");
  const [wordList, setWordList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function addWord(word) {
    const list = [...wordList, word];
    setWordList(list);
    if (word.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (list.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <GuessResults wordList={wordList} answer={answer} />
      <Input
        word={word}
        setWord={setWord}
        addWord={addWord}
        gameStatus={gameStatus}
      />
      {gameStatus !== "running" && (
        <GameOverBanner
          gameStatus={gameStatus}
          wordList={wordList}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
