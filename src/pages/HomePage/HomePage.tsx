import { TypingHUD } from "../../components/TypingHUD/TypingHUD";
import { TypingTest } from "../../components/TypingTest/TypingTest";

type HomePageProps = {
  accuracy: number;
  setAccuracy: React.Dispatch<React.SetStateAction<number>>
  isStarted: boolean;
  time: number
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  incorrectChar: number;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  correctChar: number;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  finished: boolean;
  setCorrectChar: React.Dispatch<React.SetStateAction<number>>
  setIncorrectChar: React.Dispatch<React.SetStateAction<number>>
  setPersonalBest: React.Dispatch<React.SetStateAction<number>>
  setIsNewPersonalBest: React.Dispatch<React.SetStateAction<boolean>>
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
    time,
    timeLeft,
    setTimeLeft,
    correctChar,
    setFinished,
    finished,
    setCorrectChar,
    setIncorrectChar,
    setPersonalBest,
    setIsNewPersonalBest,
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
        finished={finished}
        WPM={WPM}
        time={time}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />
      <TypingTest
        setAccuracy={setAccuracy}
        isStarted={isStarted}
        time={time}
        timeLeft={timeLeft}
        incorrectChar={incorrectChar}
        correctChar={correctChar}
        setCorrectChar={setCorrectChar}
        setIsStarted={setIsStarted}
        setIncorrectChar={setIncorrectChar}
        setIsNewPersonalBest={setIsNewPersonalBest}
        setPersonalBest={setPersonalBest}
        setFinished={setFinished}
        setWPM={setWPM}
      />
    </div>
  )
}