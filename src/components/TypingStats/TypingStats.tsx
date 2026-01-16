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
  return (
    <div className={`${borderClass} border-(--neutral-700) sm:w-fit w-[33%]`}>
      <p
        className={`
          text-(--neutral-400) 
          sm:text-xl/[120%] -tracking-[0.0375rem] 
          flex sm:flex-row flex-col 
          sm:items-center items-center 
          ${textAligment ? `${textAligment}` : ""}
        `}
      >
        {statLabel}:
        <span className={` ${isStarted ? `${textColor}` : 'text-white'} text-2xl font-bold ${paddingAligment ? `${paddingAligment}` : 'sm:pl-3'} `}>
          {stat} {statLabel === "Accuracy" && '%'}
        </span>
      </p>
    </div>
  )
}