import IconRestart from '../../assets/icons/icon-restart.svg';

type GoAgainProps = {
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
}

export function GoAgain({
  setFinished,
}: GoAgainProps) {
  return (
    <div
      className={`
        w-full 
        mt-16
        flex justify-center overflow-hidden
        transition-all duration-300 ease-in
      `}
    >
      <button
        className={`
          group
          flex 
          hover:bg-(--neutral-800) bg-(--neutral-0)
          hover:text-white text-(--neutral-900) 
          font-semibold text-xl
          gap-2.5 mt-8 px-4 py-2.5 
          rounded-xl
          cursor-pointer
          transition-colors duration-200
        `}
        onClick={() => {
          setFinished(false);
        }}
      >
        Restart Test
        <img
          src={IconRestart}
          alt="Restart test icon"
          className={`
            transition
            invert
            group-hover:invert-0    
          `}
        />
      </button>
    </div>
  )
}