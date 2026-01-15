import { TypingStats } from "../TypingStats";
import { Timer } from "./components/Timer/Timer";

type TypingHUDProps = {
  accuracy: number;
  isStarted: boolean;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  finished: boolean;
  time: number;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  WPM: number;
}

export function TypingHUD(
  {
    accuracy,
    isStarted,
    setFinished,
    finished,
    time,
    timeLeft,
    setTimeLeft,
    WPM,
  }: TypingHUDProps
) {
  return (
    <section
      className={`
        flex justify-between
        border-b-2 border-(--neutral-700)
        pb-4
      `}
    >
      <div className="flex items-center">
        <TypingStats
          stat={WPM}
          statLabel="WPM"
          isStarted={isStarted}
          textColor="text-white"
          borderClass="border-r-2 px-3"
        />
        <TypingStats
          stat={accuracy}
          statLabel="Accuracy"
          isStarted={isStarted}
          textColor="text-(--red-500)"
          borderClass="border-r-2 px-3"
        />
        <Timer
          time={time}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          setFinished={setFinished}
          finished={finished}
          isStarted={isStarted}
        />
      </div>
      <div></div>
    </section>
  )
}