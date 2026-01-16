import { useEffect } from "react"
import type { TimeDropdownValue } from "../../../../types/dropdown";

type TimerProps = {
  time: TimeDropdownValue
  isStarted: boolean;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  finished: boolean
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  setCompleted: React.Dispatch<React.SetStateAction<number>>
}


export function Timer({
  time,
  isStarted,
  setFinished,
  finished,
  timeLeft,
  setTimeLeft,
  setCompleted
}: TimerProps) {


  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  useEffect(() => {
    if (typeof time === "number") {
      setTimeLeft(time);
    } else {
      setTimeLeft(0);
    }
  }, [time, setTimeLeft])

  useEffect(() => {
    if (!isStarted) return;

    let intervalId: number;

    if (time === "Passage") {
      intervalId = window.setInterval(() => {
        setTimeLeft(prev => prev + 1);
      }, 1000);
    } else if (typeof time === "number") {
      intervalId = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalId)
            setFinished(true)
            setCompleted(prev => prev + 1);
            return 0;
          }
          if (finished) {
            clearInterval(intervalId)
            setFinished(true)
            setCompleted(prev => prev + 1);
            return 0;
          }
          return prev - 1;
        });
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [isStarted, time, setFinished, setTimeLeft, finished, setCompleted])

  return (
    <div className="sm:border-r-2 border-(--neutral-700) px-3 sm:w-fit w-[33%]">
      <p
        className={`
          text-(--neutral-400) 
          sm:text-xl/[120%] -tracking-[0.0375rem] 
          flex sm:flex-row flex-col 
          sm:items-center items-center
        `}
      >
        Time:
        <span className={` ${isStarted ? `text-(--yellow-400)` : 'text-white'} text-2xl font-bold sm:pl-3`}>
          {formattedTime}
        </span>
      </p>
    </div>
  )
}