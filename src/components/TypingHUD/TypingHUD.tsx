import IconDropDown from '../../assets/icons/icon-down-arrow.svg';
import { difficultyItems, TimeItems, type DifficultyValue, type TimeDropdownValue } from '../../types/dropdown';
import { TypingStats } from "../TypingStats";
import { DropdownButton } from "./components/Dropdown/DropdownButton";
import { Timer } from "./components/Timer/Timer";

type TypingHUDProps = {
  accuracy: number;
  isStarted: boolean;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  finished: boolean;
  time: TimeDropdownValue;
  setTime: React.Dispatch<React.SetStateAction<TimeDropdownValue>>
  setDifficulty: React.Dispatch<React.SetStateAction<DifficultyValue>>
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>
  setCompleted: React.Dispatch<React.SetStateAction<number>>
  WPM: number;
}

export function TypingHUD(
  {
    accuracy,
    isStarted,
    setFinished,
    finished,
    time,
    setTime,
    setDifficulty,
    timeLeft,
    setTimeLeft,
    setCompleted,
    WPM,
  }: TypingHUDProps
) {
  return (
    <section
      className={`
        flex lg:flex-row flex-col
        justify-between
        items-center
        border-b-2 border-(--neutral-700)
        pb-4 gap-4 lg:gap-0
      `}
    >
      <div className="flex items-center">
        <TypingStats
          stat={WPM}
          statLabel="WPM"
          isStarted={isStarted}
          textColor="text-white"
          borderClass="border-r-2 px-3"
        />
        <TypingStats
          stat={accuracy}
          statLabel="Accuracy"
          isStarted={isStarted}
          textColor="text-(--red-500)"
          borderClass="border-r-2 px-3"
        />
        <Timer
          time={time}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          setFinished={setFinished}
          finished={finished}
          isStarted={isStarted}
          setCompleted={setCompleted}
        />
      </div>
      <div 
        className={`
          flex 
          items-center 
          sm:justify-end  justify-center
          sm:w-fit w-full
        `}>
        <DropdownButton
          items={difficultyItems}
          settingLabel="Difficulty"
          defaultLabel="Easy"
          localStorageKey="diff"
          buttonIcon={IconDropDown}
          selectedSetting={setDifficulty}
        />
        <DropdownButton
          items={TimeItems}
          settingLabel="Mode"
          defaultLabel="60s"
          localStorageKey="time"
          buttonIcon={IconDropDown}
          selectedSetting={setTime}
        />
      </div>
    </section>
  )
}