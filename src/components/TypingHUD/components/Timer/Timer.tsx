import { useEffect } from "react"

type TimerProps = {
  time: number
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
    if (!isStarted || typeof time !== "number") return;

    setTimeout(() => setTimeLeft(time), 0)

    const intervalId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(intervalId)
          setTimeout(() => setFinished(true), 0)
          setCompleted(prev => prev + 1)
        }
        if (finished) {
          clearInterval(intervalId);
          setTimeout(() => setFinished(false), 0)
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isStarted, time, setFinished, setTimeLeft, finished, setCompleted])

  return (
    <div className="border-r-2 border-(--neutral-700) px-3">
      <p className="text-(--neutral-400) text-xl/[120%] -tracking-[0.0375rem] ">
        Time:
        <span className={` ${isStarted ? `text-(--yellow-400)` : 'text-white'} text-2xl font-bold pl-3`}>
          {formattedTime}
        </span>
      </p>
    </div>
  )
}