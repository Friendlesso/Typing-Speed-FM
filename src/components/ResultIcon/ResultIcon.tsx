type ResultIconProps = {
  icon: string;
  animationColor: string;
  animationSize: string;
  animationCircle: boolean;
}

export function ResultIcon({
  icon,
  animationColor,
  animationSize,
  animationCircle
}: ResultIconProps) {
  return (
    <div className="flex justify-center relative">
      <img className="relative z-10" src={icon} alt="Completed task icon" />
      {animationCircle &&
        <span className={`absolute flex ${animationSize} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
          <span className={` ${animationColor} absolute inline-flex h-full w-full animate-ping [animation-duration:2.5s] rounded-full duration-500 opacity-75`} />
          <span className={`relative inline-flex ${animationSize} rounded-full bg-green-300 opacity-35`} />
        </span>
      }

    </div>
  )
}