import IconRestart from '../../../assets/icons/icon-restart.svg';

type RestartTestProps = {
  handleRestart?: () => void
  setFinished?: React.Dispatch<React.SetStateAction<boolean>>
  border?: string
  colors: string
  invert: string
}

export function RestartTest({
  handleRestart,
  setFinished,
  border,
  colors,
  invert
}: RestartTestProps) {
  return (
    <div
      className={`
        w-full 
        ${border} 
        mt-16
        flex justify-center overflow-hidden
        transition-all duration-300 ease-in
      `}
    >
      <button
        className={`
          group
          flex 
          ${colors}
          font-semibold text-xl
          gap-2.5 mt-8 px-4 py-2.5 
          rounded-xl
          cursor-pointer
          transition-colors duration-200
        `}
        onClick={() => {
          handleRestart?.();
          setFinished?.(false);
        }}
      >
        Restart Test
        <img
          src={IconRestart}
          alt="Restart test icon"
          className={`
            transition
            ${invert}   
          `}
        />
      </button>
    </div>
  )
}