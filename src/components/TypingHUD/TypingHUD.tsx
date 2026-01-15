import { TypingStats } from "../TypingStats";

type TypingHUDProps = {
  accuracy: number;
  isStarted: boolean;
  WPM: number;
}

export function TypingHUD(
  {
    accuracy,
    isStarted,
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
        />
        <TypingStats
          stat={accuracy}
          statLabel="Accuracy"
          isStarted={isStarted}
          textColor="text-(--red-500)"
        />
      </div>
      <div></div>
    </section>
  )
}