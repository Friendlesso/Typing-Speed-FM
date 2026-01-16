import IconDropDown from '../../assets/icons/icon-down-arrow.svg';
import IconLang from '../../assets/icons/icon-language.svg'
import { difficultyItems, languagesItems, TimeItems, type DifficultyValue, type LanguageValue, type TimeDropdownValue } from '../../types/dropdown';
import { TypingStats } from "../TypingStats";
import { DropdownButton } from "./components/DropdownButton/DropdownButton";
import { Timer } from "./components/Timer/Timer";

type TypingHUDProps = {

  accuracy: number;
  difficulty: DifficultyValue;
  finished: boolean;
  isStarted: boolean;
  language: LanguageValue;
  time: TimeDropdownValue;
  timeLeft: number;

  setCompleted: React.Dispatch<React.SetStateAction<number>>
  setDifficulty: React.Dispatch<React.SetStateAction<DifficultyValue>>
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  setLanguage: React.Dispatch<React.SetStateAction<LanguageValue>>;
  setTime: React.Dispatch<React.SetStateAction<TimeDropdownValue>>
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>

  WPM: number;

}

export function TypingHUD(
  {
    accuracy,
    difficulty, setDifficulty,
    finished, setFinished,
    isStarted, setIsStarted,
    language, setLanguage,
    time, setTime,
    timeLeft, setTimeLeft,

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
          borderClass="border-r-2 sm:px-3 px-5 sm:w-fit w-[33%]"
          isStarted={isStarted}
          stat={WPM}
          statLabel="WPM"
          styleClass=" flex sm:flex-row flex-col sm:items-center items-start "
          textColor="text-white"
        />
        <TypingStats
          borderClass="border-r-2 sm:px-3 px-5 sm:w-fit w-[33%]"
          stat={accuracy}
          isStarted={isStarted}
          statLabel="Accuracy"
          styleClass=" flex sm:flex-row flex-col sm:items-center items-start "
          textColor="text-(--red-500)"
        />
        <Timer
          setCompleted={setCompleted}
          finished={finished} setFinished={setFinished}
          isStarted={isStarted}
          time={time}
          timeLeft={timeLeft} setTimeLeft={setTimeLeft}
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
          buttonIcon={IconDropDown}
          defaultLabel="Easy"
          items={difficultyItems}
          selected={difficulty}
          settingLabel="Difficulty"
          selectedSetting={setDifficulty}
          setIsStarted={setIsStarted}
          localStorageKey="diff"
        />
        <DropdownButton
          buttonIcon={IconDropDown}
          defaultLabel="60s"
          items={TimeItems}
          selected={time}
          settingLabel="Mode"
          selectedSetting={setTime}
          setIsStarted={setIsStarted}
          localStorageKey="time"
        />
        <DropdownButton<LanguageValue>
          buttonIcon={IconLang}
          defaultLabel=''
          items={languagesItems}
          selected={language}
          selectedSetting={setLanguage}
          setIsStarted={setIsStarted}
          localStorageKey="lang"
          langStyle='sm:w-fit'
        />
      </div>
    </section>
  )
}