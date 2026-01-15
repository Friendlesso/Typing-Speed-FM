import { TypingHUD } from "../../components/TypingHUD/TypingHUD";
import { TypingTest } from "../../components/TypingTest/TypingTest";

type HomePageProps = {
  accuracy: number;
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  setCorrectChar: React.Dispatch<React.SetStateAction<number>>
  setIncorrectChar: React.Dispatch<React.SetStateAction<number>>
  WPM: number;
}

export function HomePage(
  {
    accuracy,
    isStarted,
    setIsStarted,
    setCorrectChar,
    setIncorrectChar,
    WPM,
  }: HomePageProps
) {
  return (
    <div className="flex flex-col flex-1 mt-16 gap-8">
      <TypingHUD
        accuracy={accuracy}
        WPM={WPM}
      />
      <TypingTest
        isStarted={isStarted}
        setCorrectChar={setCorrectChar}
        setIsStarted={setIsStarted}
        setIncorrectChar={setIncorrectChar}
      />
    </div>
  )
}