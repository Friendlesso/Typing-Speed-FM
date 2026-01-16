import IconRestart from '../../../assets/icons/icon-restart.svg';

type RestartTestProps = {
  handleRestart: () => void
  border?: string
  colors: string
  invert: string
  label: string
}

export function RestartTest({
  handleRestart,
  border,
  colors,
  label,
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
        onClick={handleRestart}
      >
        {label}
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