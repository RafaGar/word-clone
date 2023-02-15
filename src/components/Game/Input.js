import React from "react";

const Input = ({ word, setWord, addWord, gameStatus }) => {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addWord(word.toUpperCase());
        setWord("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="text"
        value={word}
        maxLength="5"
        minLength="5"
        onChange={(event) => {
          setWord(event.target.value);
        }}
      />
    </form>
  );
};

export default Input;
