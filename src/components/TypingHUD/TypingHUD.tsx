import { TypingStats } from "../TypingStats";

type TypingHUDProps = {
  WPM: number;
}

export function TypingHUD(
  {
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
          stat={98}
          statLabel="Accuracy"
        />
      </div>
      <div></div>
    </section>
  )
}