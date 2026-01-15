type StartTestBtnProps = {
  inputRef: React.RefObject<HTMLInputElement | null>
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
}

export function StartTestBtn(
  {
    inputRef,
    isStarted,
    setIsStarted
  }: StartTestBtnProps) {
  return (
    <div
      className={`
          absolute
          text-white
          flex flex-col items-center
          top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
          gap-5
          ${isStarted
          ? 'hidden'
          : 'block'
        }
      `}
    >
      <button
        className={`
            bg-(--blue-600) hover:bg-(--blue-400)
            font-semibold text-2xl/[120%] -tracking-[0.019rem]
            hover:scale-95
            py-4 px-6
            w-fit
            rounded-xl
            cursor-pointer
            transition-all duration-150 ease-in-out
        `}
        onClick={() => {
          setIsStarted(true);
          inputRef.current?.focus();
        }}
      >
        Start typing test
      </button>
      <p className="font-semibold text-xl/[120%] tracking-[0.019rem]">
        Or click the text and start typing
      </p>
    </div>
  )
}
