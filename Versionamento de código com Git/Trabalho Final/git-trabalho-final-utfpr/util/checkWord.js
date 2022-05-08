function checkWord(word, correctWord) {
  const result = [];

  for (let i = 0; i < correctWord.length; i++) {
    if (word[i].toUpperCase() === correctWord[i].toUpperCase()) {
      result.push(2);
    } else if (correctWord.toUpperCase().includes(word[i].toUpperCase())) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result;
}

export { checkWord };
