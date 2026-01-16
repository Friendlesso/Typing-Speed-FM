import { useEffect, useRef } from "react";
import { Test } from "./components/Test";
import type { CharStatus, TestText } from "../../types/TestTypes";
import { getRandomTest } from "../../utils/getRandomTest";
import { StartTestBtn } from "./components/StartTestBtn";
import { RestartTest } from "./components/RestartTest";
import { getAccuracy } from "../../utils/getAccuracy";
import { getWPM } from "../../utils/getWPM";
import type { DifficultyValue, LanguageValue, TimeDropdownValue } from "../../types/dropdown";

type TypingTestProps = {
  setAccuracy: React.Dispatch<React.SetStateAction<number>>
  isStarted: boolean;
  incorrectChar: number;
  correctChar: number;
  time: TimeDropdownValue;
  difficulty: DifficultyValue;
  language: LanguageValue
  timeLeft: number;
  setCorrectChar: React.Dispatch<React.SetStateAction<number>>
  setCompleted: React.Dispatch<React.SetStateAction<number>>
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  setIncorrectChar: React.Dispatch<React.SetStateAction<number>>
  setIsNewPersonalBest: React.Dispatch<React.SetStateAction<boolean>>
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  finished: boolean;
  setPersonalBest: React.Dispatch<React.SetStateAction<number>>
  setWPM: React.Dispatch<React.SetStateAction<number>>
  charStatus: CharStatus[]
  setCharStatus: React.Dispatch<React.SetStateAction<CharStatus[]>>;
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
  test: TestText
  setTest: React.Dispatch<React.SetStateAction<TestText>>
  totalChar: number;
  setTotalChar: React.Dispatch<React.SetStateAction<number>>
  handleRestart: () => void
}

export function TypingTest(
  {
    setAccuracy,
    isStarted,
    incorrectChar,
    correctChar,
    setCorrectChar,
    setCompleted,
    setIsStarted,
    setIncorrectChar,
    time,
    difficulty,
    language,
    timeLeft,
    setFinished,
    setWPM,
    charStatus,
    setCharStatus,
    index, setIndex,
    test, setTest,
    totalChar, setTotalChar,
    handleRestart
  }: TypingTestProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const characters = test?.text.split("");

  useEffect(() => {
    inputRef.current?.focus();
  })

  useEffect(() => {
    setTest(getRandomTest(language, difficulty))
  }, [difficulty, language, setTest])

  // Function to handleKeyDown for Typing
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isStarted) {
      setIsStarted(true);
    }

    const typedChar = e.key;
    const expectedChar = test.text[index];

    if (typedChar.length !== 1 || e.key === 'Backspace') {
      e.preventDefault();
      return;
    };

    if (totalChar === characters.length - 1) {
      setFinished(true);
      setCompleted((prev => prev + 1))
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


  useEffect(() => {

    const currentWPM = getWPM(totalChar, incorrectChar, time, timeLeft);
    setWPM(currentWPM);

  }, [totalChar, incorrectChar, time, timeLeft, setWPM])


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
          label="Restart Test"
          handleRestart={handleRestart}
          border="border-t-2 border-(--neutral-700)"
          colors=" bg-(--neutral-800) hover:bg-(--neutral-0) text-white hover:text-(--neutral-900) "
          invert="group-hover:invert "
        />
      )}
    </section>
  )
}