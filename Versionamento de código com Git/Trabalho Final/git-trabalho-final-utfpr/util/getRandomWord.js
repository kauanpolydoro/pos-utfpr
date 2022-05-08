import { possibleWords } from "./words";

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * possibleWords.length);
  console.log(possibleWords[randomIndex]);
  return possibleWords[randomIndex];
}

export { getRandomWord };
