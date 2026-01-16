// DevNote: textColor will be added when the typing starts so for now it can stay white

type TypingStatsProps = {
  stat: number;
  statLabel: string;
  isStarted?: boolean
  textColor?: string;
  textAlignment?: string;
  borderClass?: string;
  paddingAlignment?: string;
  styleClass?: string;
}

export function TypingStats(
  {
    stat,
    statLabel,
    isStarted,
    textColor = "text-white",
    textAlignment = "",
    paddingAlignment = "sm:pl-3",
    borderClass,
    styleClass
  }: TypingStatsProps
) {
  return (
    <div className={`${borderClass} border-(--neutral-700)`}>
      <p
        className={`
          text-(--neutral-400) 
          sm:text-xl/[120%] -tracking-[0.0375rem] 
          ${styleClass}
          ${textAlignment}
        `}
      >
        {statLabel}:
        <span className={` ${isStarted ? `${textColor}` : 'text-white'} text-2xl font-bold ${paddingAlignment} `}>
          {stat} {statLabel === "Accuracy" && '%'}
        </span>
      </p>
    </div>
  )
}