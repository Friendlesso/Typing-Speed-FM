// Height is missing from the outer div

import type { CharStatus } from "../../../types/TestTypes";

type TestProps = {
  characters: string[] | undefined;
  charStatus: CharStatus[];
  index: number;
  inputRef: React.RefObject<HTMLInputElement | null>
  isStarted: boolean;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function Test(
  {
    characters,
    charStatus,
    index,
    inputRef,
    isStarted,
    setIsStarted,
    handleKeyDown,
  }: TestProps
) {

  

  const getCharClass = (charIndex: number) => {
    if (charIndex < charStatus.length) {
      return charStatus[charIndex] === 'correct'
        ? ' text-(--green-500)'
        : ' text-(--red-500)';
    }
    return '';
  }

  return (
    <div
      className={`
          relative
          flex flex-col items-center
          min-h-[50vh]
          ${isStarted
            ? 'blur-none'
            : 'blur-md'
          }
        `}
    >
      <p className="text-white lg:text-[2.5rem] text-2xl leading-[136%] -tracking-[0.4px]">
        {characters?.map((char, charIndex) => {
          const status = charStatus[charIndex];
          let className = getCharClass(charIndex);

          if (charIndex === index) {
            className += ' bg-(--neutral-400)/20 rounded-sm'
          }

          if (status === 'incorrect') {
            className += ' border-b-2 border-(--red-500)'
          }

          return (
            <span
              key={charIndex}
              className={className}
            >
              {char}
            </span>
          )
        })}
      </p>
      <input
        ref={inputRef}
        type="text"
        name="TextInput"
        onClick={() => {
          setIsStarted(true);
        }}
        className={`
          absolute
          top-0 right-0 left-0 bottom-0
          outline-none
          opacity-0
          cursor-pointer
        `}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}