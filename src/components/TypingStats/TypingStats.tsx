// DevNote: textColor will be added when the typing starts so for now it can stay white

type TypingStatsProps = {
  stat: number;
  statLabel: string;
  isStarted: boolean
  textColor?: string;
}

export function TypingStats(
  {
    stat,
    statLabel,
    isStarted,
    textColor,
  }: TypingStatsProps
) {
  console.log(stat);
  return (
    <div className="border-r-2 border-(--neutral-700) px-3">
      <p className="text-(--neutral-400) text-xl/[120%] -tracking-[0.0375rem] ">
        {statLabel}:
        <span className={` ${isStarted ? `${textColor}` : 'text-white'} text-2xl font-bold pl-3`}>
        {stat} {statLabel === "Accuracy" && '%'}
        </span>
      </p>
    </div>
  )
}