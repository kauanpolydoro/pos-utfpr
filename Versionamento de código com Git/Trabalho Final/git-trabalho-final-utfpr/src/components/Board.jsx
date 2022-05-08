import { Flex, HStack, PinInput, PinInputField, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { checkWord } from "../../util/checkWord";
import { getRandomWord } from "../../util/getRandomWord";

const defaultBoard = [
  {
    row: 0,
    letters: [
      { column: 0, value: "", color: null },
      { column: 1, value: "", color: null },
      { column: 2, value: "", color: null },
      { column: 3, value: "", color: null },
      { column: 4, value: "", color: null },
    ],
  },
  {
    row: 1,
    letters: [
      { column: 0, value: "", color: null },
      { column: 1, value: "", color: null },
      { column: 2, value: "", color: null },
      { column: 3, value: "", color: null },
      { column: 4, value: "", color: null },
    ],
  },
  {
    row: 2,
    letters: [
      { column: 0, value: "", color: null },
      { column: 1, value: "", color: null },
      { column: 2, value: "", color: null },
      { column: 3, value: "", color: null },
      { column: 4, value: "", color: null },
    ],
  },
  {
    row: 3,
    letters: [
      { column: 0, value: "", color: null },
      { column: 1, value: "", color: null },
      { column: 2, value: "", color: null },
      { column: 3, value: "", color: null },
      { column: 4, value: "", color: null },
    ],
  },
  {
    row: 4,
    letters: [
      { column: 0, value: "", color: null },
      { column: 1, value: "", color: null },
      { column: 2, value: "", color: null },
      { column: 3, value: "", color: null },
      { column: 4, value: "", color: null },
    ],
  },
  {
    row: 5,
    letters: [
      { column: 0, value: "", color: null },
      { column: 1, value: "", color: null },
      { column: 2, value: "", color: null },
      { column: 3, value: "", color: null },
      { column: 4, value: "", color: null },
    ],
  },
];

const colors = ["black", "yellow", "green"];

export function Board() {
  const [board, setBoard] = useState(defaultBoard);
  const [currentRow, setCurrentRow] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [word, setWord] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const [result, setResult] = useState([0]);

  const handleWordChange = (text) => {
    setWord(text);
  };

  const handleSubmit = useCallback(
    (row) => {
      if (word.length !== 5) {
        return;
      }

      const checkWordResult = checkWord(word, correctWord);
      setResult(checkWordResult);

      const newBoard = [...board];

      for (let i = 0; i < word.length; i++) {
        newBoard[row].letters[i].value = word[i];
        newBoard[row].letters[i].color = checkWordResult[i];
      }

      setBoard(newBoard);
      setCurrentRow(currentRow + 1);
    },
    [board, currentRow, word]
  );

  useEffect(() => {
    const randomWord = getRandomWord();
    setCorrectWord(randomWord);
  }, []);

  useEffect(() => {
    if (currentRow === 6) {
      setGameOver(true);
    }

    if (result.every((r) => r === 2)) {
      setGameOver(true);
      setGameWon(true);
    }
  }, [currentRow, result]);

  return (
    <Flex
      width="450px"
      height="550px"
      border="1px solid black"
      flexDirection="column"
      justify="center"
      align="center"
    >
      {board.map((row) => (
        <HStack key={row.row} margin="5px">
          <PinInput
            placeholder=""
            type="alphanumeric"
            size="lg"
            onChange={handleWordChange}
            isDisabled={row.row !== currentRow || gameOver}
          >
            {row.letters.map((column) => {
              return (
                <PinInputField
                  key={column.column}
                  bg={colors[column.color]}
                  fontWeight="bold"
                  fontSize="3xl"
                  w="16"
                  h="16"
                  textTransform="uppercase"
                  color="white"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit(row.row);
                    }
                  }}
                />
              );
            })}
          </PinInput>
        </HStack>
      ))}
      {gameWon && (
        <Text fontSize="2xl" color="white" fontWeight="semibold">
          Parabéns! 🏆
        </Text>
      )}
      {gameOver && (
        <Text fontSize="xl" color="lightgray">
          Fim de jogo! A palavra correta era {correctWord}.
        </Text>
      )}
    </Flex>
  );
}
