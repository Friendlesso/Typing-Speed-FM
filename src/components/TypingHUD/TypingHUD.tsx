import { TypingStats } from "../TypingStats";

type TypingHUDProps = {
  accuracy: number;
  WPM: number;
}

export function TypingHUD(
  {
    accuracy,
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
        />
        <TypingStats
          stat={accuracy}
          statLabel="Accuracy"
        />
      </div>
      <div></div>
    </section>
  )
}