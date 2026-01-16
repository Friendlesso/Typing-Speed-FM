import { TypingHUD } from "../../components/TypingHUD/TypingHUD";
import { TypingTest } from "../../components/TypingTest/TypingTest";
import type { DifficultyValue, TimeDropdownValue } from "../../types/dropdown";

type HomePageProps = {
  accuracy: number;
  setAccuracy: React.Dispatch<React.SetStateAction<number>>
  isStarted: boolean;
  time: TimeDropdownValue;
  setTime: React.Dispatch<React.SetStateAction<TimeDropdownValue>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  incorrectChar: number;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  correctChar: number;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  finished: boolean;
  setCorrectChar: React.Dispatch<React.SetStateAction<number>>
  setCompleted: React.Dispatch<React.SetStateAction<number>>
  setIncorrectChar: React.Dispatch<React.SetStateAction<number>>
  setPersonalBest: React.Dispatch<React.SetStateAction<number>>
  setIsNewPersonalBest: React.Dispatch<React.SetStateAction<boolean>>
  difficulty: DifficultyValue
  setDifficulty: React.Dispatch<React.SetStateAction<DifficultyValue>>;
  WPM: number;
  setWPM: React.Dispatch<React.SetStateAction<number>>
}

export function HomePage(
  {
    accuracy,
    setAccuracy,
    isStarted,
    incorrectChar,
    setIsStarted,
    setTime,
    time,
    timeLeft,
    setTimeLeft,
    correctChar,
    setFinished,
    finished,
    setCorrectChar,
    setCompleted,
    setIncorrectChar,
    setPersonalBest,
    setIsNewPersonalBest,
    difficulty,
    setDifficulty,
    WPM,
    setWPM,
  }: HomePageProps
) {
  return (
    <div className="flex flex-col flex-1 mt-16 gap-8">
      <TypingHUD
        accuracy={accuracy}
        isStarted={isStarted}
        setFinished={setFinished}
        setCompleted={setCompleted}
        finished={finished}
        WPM={WPM}
        time={time}
        setTime={setTime}
        setDifficulty={setDifficulty}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />
      <TypingTest
        setAccuracy={setAccuracy}
        isStarted={isStarted}
        time={time}
        difficulty={difficulty}
        timeLeft={timeLeft}
        incorrectChar={incorrectChar}
        correctChar={correctChar}
        setCorrectChar={setCorrectChar}
        setCompleted={setCompleted}
        setIsStarted={setIsStarted}
        setIncorrectChar={setIncorrectChar}
        setIsNewPersonalBest={setIsNewPersonalBest}
        setPersonalBest={setPersonalBest}
        setFinished={setFinished}
        finished={finished}
        setWPM={setWPM}
      />
    </div>
  )
}