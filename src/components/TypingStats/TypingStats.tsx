// DevNote: textColor will be added when the typing starts so for now it can stay white

type TypingStatsProps = {
  stat: number;
  statLabel: string;
  textColor?: string;
}

export function TypingStats(
  {
    stat,
    statLabel,
    textColor,
  }: TypingStatsProps
) {
  return (
    <div className="border-r-2 border-(--neutral-700) px-3">
      <p className="text-(--neutral-400) text-xl/[120%] -tracking-[0.0375rem] ">
        {statLabel}:
        <span className={` text-white text-2xl font-bold pl-3`}>
        {stat}
        </span>
      </p>
    </div>
  )
}