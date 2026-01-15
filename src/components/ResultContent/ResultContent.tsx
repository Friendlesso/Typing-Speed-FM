type ResultContentProps = {
  label: string;
  quote: string;
}

export function ResultContent({
  label,
  quote
}: ResultContentProps) {
  return (
    <div className="flex flex-col items-center pt-6 gap-2.5">
      <h1 className="text-[2.5rem]/[136%] tracking-[0.0250rem] font-bold text-white">
        {label}
      </h1>
      <p className="text-xl/[120%] -tracking-[0.0375rem] text-(--neutral-400)">
        {quote}
      </p>
    </div>
  )
}