import { TypingHUD } from "../../components/TypingHUD/TypingHUD";
import { TypingTest } from "../../components/TypingTest/TypingTest";
import type { DifficultyValue, LanguageValue, TimeDropdownValue } from "../../types/dropdown";
import type { CharStatus, TestText } from "../../types/TestTypes";

type HomePageProps = {
  
  accuracy: number;
  correctChar: number;
  charStatus: CharStatus[]
  difficulty: DifficultyValue;
  finished: boolean;
  incorrectChar: number;
  isStarted: boolean;
  index: number;
  language: LanguageValue;
  time: TimeDropdownValue;
  timeLeft: number;
  test: TestText;
  totalChar: number;
  WPM: number;

  setAccuracy: React.Dispatch<React.SetStateAction<number>>
  setCompleted: React.Dispatch<React.SetStateAction<number>>
  setCorrectChar: React.Dispatch<React.SetStateAction<number>>
  setCharStatus: React.Dispatch<React.SetStateAction<CharStatus[]>>;
  setDifficulty: React.Dispatch<React.SetStateAction<DifficultyValue>>;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  setIndex: React.Dispatch<React.SetStateAction<number>>
  setIncorrectChar: React.Dispatch<React.SetStateAction<number>>
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  setTime: React.Dispatch<React.SetStateAction<TimeDropdownValue>>;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  setTest: React.Dispatch<React.SetStateAction<TestText>>
  setTotalChar: React.Dispatch<React.SetStateAction<number>>
  setLanguage: React.Dispatch<React.SetStateAction<LanguageValue>>;
  setPersonalBest: React.Dispatch<React.SetStateAction<number>>
  setIsNewPersonalBest: React.Dispatch<React.SetStateAction<boolean>>

  setWPM: React.Dispatch<React.SetStateAction<number>>

  handleRestart: () => void
}

export function HomePage(
  {
    accuracy, setAccuracy,
    correctChar, setCorrectChar,
    charStatus, setCharStatus,
    setCompleted,
    difficulty, setDifficulty,
    finished, setFinished,
    incorrectChar, setIncorrectChar,
    isStarted, setIsStarted,
    index, setIndex,
    language, setLanguage,
    time, setTime,
    timeLeft, setTimeLeft,
    test, setTest,
    totalChar, setTotalChar,

    setPersonalBest,
    setIsNewPersonalBest,

    WPM, setWPM,

    handleRestart,
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
        difficulty={difficulty}
        language={language}
        setTime={setTime}
        setIsStarted={setIsStarted}
        setDifficulty={setDifficulty}
        setLanguage={setLanguage}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />
      <TypingTest
        setAccuracy={setAccuracy}
        isStarted={isStarted}
        time={time}
        language={language}
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
        charStatus={charStatus} setCharStatus={setCharStatus}
        index={index} setIndex={setIndex}
        test={test} setTest={setTest}
        totalChar={totalChar} setTotalChar={setTotalChar}
        handleRestart={handleRestart}
      />
    </div>
  )
}