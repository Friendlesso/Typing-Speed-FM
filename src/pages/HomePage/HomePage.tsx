import { TypingHUD } from "../../components/TypingHUD/TypingHUD";
import { TypingTest } from "../../components/TypingTest/TypingTest";

type HomePageProps = {
  accuracy: number;
  setAccuracy: React.Dispatch<React.SetStateAction<number>>
  isStarted: boolean;
  incorrectChar: number;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  correctChar: number
  setCorrectChar: React.Dispatch<React.SetStateAction<number>>
  setIncorrectChar: React.Dispatch<React.SetStateAction<number>>
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
    correctChar,
    setCorrectChar,
    setIncorrectChar,
    WPM,
    setWPM,
  }: HomePageProps
) {
  return (
    <div className="flex flex-col flex-1 mt-16 gap-8">
      <TypingHUD
        accuracy={accuracy}
        isStarted={isStarted}
        WPM={WPM}
      />
      <TypingTest
        setAccuracy={setAccuracy}
        isStarted={isStarted}
        incorrectChar={incorrectChar}
        correctChar={correctChar}
        setCorrectChar={setCorrectChar}
        setIsStarted={setIsStarted}
        setIncorrectChar={setIncorrectChar}
        setWPM={setWPM}
      />
    </div>
  )
}