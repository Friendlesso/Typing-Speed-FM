import IconDropDown from '../../assets/icons/icon-down-arrow.svg';
import IconLang from '../../assets/icons/icon-language.svg'
import { difficultyItems, languagesItems, TimeItems, type DifficultyValue, type LanguageValue, type TimeDropdownValue } from '../../types/dropdown';
import { TypingStats } from "../TypingStats";
import { DropdownButton } from "./components/Dropdown/DropdownButton";
import { Timer } from "./components/Timer/Timer";

type TypingHUDProps = {
  accuracy: number;
  isStarted: boolean;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  finished: boolean;
  time: TimeDropdownValue;
  difficulty: DifficultyValue
  language: LanguageValue;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageValue>>;
  setTime: React.Dispatch<React.SetStateAction<TimeDropdownValue>>
  setDifficulty: React.Dispatch<React.SetStateAction<DifficultyValue>>
  timeLeft: number;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
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
    difficulty,
    setDifficulty,
    language,
    setLanguage,
    timeLeft,
    setIsStarted,
    setTimeLeft,
    setCompleted,
    WPM,
  }: TypingHUDProps
) {
  return (
    <section
      className={`
        flex xl:flex-row flex-col
        justify-between
        items-center
        border-b-2 border-(--neutral-700)
        pb-4 gap-4 xl:gap-0
      `}
    >
      <div className="flex items-center sm:w-fit w-full">
        <TypingStats
          stat={WPM}
          statLabel="WPM"
          isStarted={isStarted}
          textColor="text-white"
          borderClass="border-r-2 sm:px-3 px-5 sm:w-fit w-[33%]"
          styleClass=" flex sm:flex-row flex-col sm:items-center items-start "
        />
        <TypingStats
          stat={accuracy}
          statLabel="Accuracy"
          isStarted={isStarted}
          textColor="text-(--red-500)"
          borderClass="border-r-2 sm:px-3 px-5"
          styleClass=" flex sm:flex-row flex-col sm:items-center items-start "
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
          gap-2
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
          selected={difficulty}
          selectedSetting={setDifficulty}
          setIsStarted={setIsStarted}
        />
        <DropdownButton
          items={TimeItems}
          settingLabel="Mode"
          defaultLabel="60s"
          localStorageKey="time"
          buttonIcon={IconDropDown}
          selected={time}
          selectedSetting={setTime}
          setIsStarted={setIsStarted}
        />
        <DropdownButton<LanguageValue>
          items={languagesItems}
          localStorageKey="lang"
          defaultLabel=''
          buttonIcon={IconLang}
          selected={language}
          selectedSetting={setLanguage}
          setIsStarted={setIsStarted}
          langStyle='w-fit'
        />
      </div>
    </section>
  )
}