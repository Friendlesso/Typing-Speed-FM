// DevNote: textColor will be added when the typing starts so for now it can stay white

type TypingStatsProps = {
  stat: number;
  statLabel: string;
  isStarted?: boolean
  textColor?: string;
  textAligment?: string;
  borderClass?: string;
  paddingAligment?: string;
}

export function TypingStats(
  {
    stat,
    statLabel,
    isStarted,
    textColor,
    textAligment,
    paddingAligment,
    borderClass,
  }: TypingStatsProps
) {
  console.log(stat);
  return (
    <div className={`${borderClass} border-(--neutral-700)`}>
      <p className={`text-(--neutral-400) text-xl/[120%] -tracking-[0.0375rem] ${textAligment ? `${textAligment}` : ""}`}>
        {statLabel}:
        <span className={` ${isStarted ? `${textColor}` : 'text-white'} text-2xl font-bold ${paddingAligment ? `${paddingAligment}` : 'pl-3'} `}>
        {stat} {statLabel === "Accuracy" && '%'}
        </span>
      </p>
    </div>
  )
}