type TypingStatsProps = {
  borderClass?: string;
  isStarted?: boolean;
  statLabel: string;
  stat: number;
  styleClass?: string;
  paddingAlignment?: string;
  textColor?: string;
  textAlignment?: string;
}

export function TypingStats(
  {
    borderClass,
    isStarted,
    statLabel,
    styleClass,
    stat,
    paddingAlignment = "sm:pl-3",
    textColor = "text-white",
    textAlignment = "",
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