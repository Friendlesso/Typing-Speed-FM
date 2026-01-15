import { useEffect, useRef, useState } from "react";
import { Test } from "./components/Test";
import type { CharStatus, TestText } from "../../types/TestTypes";
import { getRandomTest } from "../../utils/getRandomTest";
import { StartTestBtn } from "./components/StartTestBtn";
import { RestartTest } from "./components/RestartTest";
import { getAccuracy } from "../../utils/getAccuracy";
import { getWPM } from "../../utils/getWPM";

type TypingTestProps = {
  setAccuracy: React.Dispatch<React.SetStateAction<number>>
  isStarted: boolean;
  incorrectChar: number;
  correctChar: number;
  time: number;
  timeLeft: number;
  setCorrectChar: React.Dispatch<React.SetStateAction<number>>
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  setIncorrectChar: React.Dispatch<React.SetStateAction<number>>
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  setWPM: React.Dispatch<React.SetStateAction<number>>
}

export function TypingTest(
  {
    setAccuracy,
    isStarted,
    incorrectChar,
    correctChar,
    setCorrectChar,
    setIsStarted,
    setIncorrectChar,
    time,
    timeLeft,
    setFinished,
    setWPM
  }: TypingTestProps) {
  const [charStatus, setCharStatus] = useState<Array<CharStatus>>([]);
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null)
  const [test, setTest] = useState<TestText>(getRandomTest('Easy'));
  const [totalChar, setTotalChar] = useState(0);

  const characters = test?.text.split("");

  // Function to Handle restarting the test
  const handleTestRestart = () => {
    setCorrectChar(0);
    setCharStatus([]);
    setIncorrectChar(0);
    setIndex(0);
    setIsStarted(false);
    setTotalChar(0);
    setTest(getRandomTest('Easy'))
  }

  // Function to handleKeyDown for Typing
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    const typedChar = e.key;
    const expectedChar = test.text[index];

    if (typedChar.length !== 1 || e.key === 'Backspace') {
      e.preventDefault();
      return;
    };

    if (totalChar === characters.length - 1) {
      setFinished(true);
    }

    setCharStatus((prev) => [
      ...prev,
      typedChar === expectedChar ? 'correct' : 'incorrect'
    ])

    setCorrectChar((char) => (typedChar === expectedChar ? char + 1 : char));
    setIncorrectChar((wrongChar) => typedChar !== expectedChar ? wrongChar + 1 : wrongChar);
    setIndex((index) => index + 1);
    setTotalChar((totalChar) => totalChar + 1)
  }

  // Hook to get the current accuracy.
  useEffect(() => {
    setAccuracy(getAccuracy(correctChar, totalChar));
  }, [setAccuracy, totalChar, correctChar])

  // Hook to get the current WPM.
  useEffect(() => {
    setWPM(getWPM(totalChar, incorrectChar, time, timeLeft))
  })

  return (
    <section className="relative">
      <Test
        characters={characters}
        charStatus={charStatus}
        index={index}
        inputRef={inputRef}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
        handleKeyDown={handleKeyDown}
      />
      <StartTestBtn
        inputRef={inputRef}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
      />
      {isStarted && (
        <RestartTest
          handleRestart={handleTestRestart}
        />
      )}
    </section>
  )
}