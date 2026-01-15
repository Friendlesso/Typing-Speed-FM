type TotalCharStatProps = {
  correctChar: number;
  incorrectChar: number;
}

export function TotalCharStat({
  correctChar,
  incorrectChar,
}: TotalCharStatProps) {
  return (
    <div className={`flex flex-col gap-3 border border-(--neutral-700) px-6 py-4 rounded-lg w-40`}>
      <p className={`text-(--neutral-400) text-xl/[120%] -tracking-[0.0375rem]`}>
        Characters:
      </p>
      <div className="text-2xl">
        <span className="text-(--green-500)">
          {correctChar}
        </span>
        <span className="text-(--neutral-500)">/</span>
        <span className="text-(--red-500)">
          {incorrectChar}
        </span>
      </div>
    </div>
  )
}