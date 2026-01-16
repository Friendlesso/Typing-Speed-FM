import { useEffect, useState } from "react";
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage";
import { ResultPage } from "./pages/ResultPage";
import type { DifficultyValue, LanguageValue, TimeDropdownValue } from "./types/dropdown";
import type { CharStatus, TestText } from "./types/TestTypes";
import { getRandomTest } from "./utils/getRandomTest";

function App() {

  // Typing stats
  const [accuracy, setAccuracy] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);
  const [charStatus, setCharStatus] = useState<Array<CharStatus>>([]);
  const [incorrectChar, setIncorrectChar] = useState(0);
  const [index, setIndex] = useState(0);
  const [totalChar, setTotalChar] = useState(0);
  const [WPM, setWPM] = useState(0);

  // Test flow
  const [finished, setFinished] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [isNewPersonalBest, setIsNewPersonalBest] = useState(false);
  const [completed, setCompleted] = useState(() => {
    return Number(localStorage.getItem("Comp") || 0)
  })

  // User preferences
  const [difficulty, setDifficulty] = useState<DifficultyValue>(
    (localStorage.getItem("diff") as DifficultyValue) || "Easy"
  )

  const [language, setLanguage] = useState<LanguageValue>(
    (localStorage.getItem("lang") as LanguageValue) || "en"
  )

  const [personalBest, setPersonalBest] = useState(() => {
    return Number(localStorage.getItem("PB") || 0)
  })

  const [time, setTime] = useState<TimeDropdownValue>(() => {
    const saved = localStorage.getItem("time");
    if (saved === "Passage") return "Passage";
    if (saved === "15" || saved === "30" || saved === "60" || saved === "120") {
      return Number(saved) as TimeDropdownValue;
    }
    return 60; // default
  });

  const [timeLeft, setTimeLeft] = useState<number>(() =>
    typeof time === "number" ? time : 0
  )

  // Setting the test
  const [test, setTest] = useState<TestText>(getRandomTest(language, difficulty));

  useEffect(() => {
    localStorage.setItem("Comp", String(completed))
  }, [completed])

  useEffect(() => {
    localStorage.setItem("time", String(time))
  }, [time])

  useEffect(() => {
    if (finished) {
      const prevPB = Number(localStorage.getItem("PB") || 0);

      // finalWPM is the current WPM state
      if (WPM > prevPB) {
        localStorage.setItem("PB", String(WPM));
        setTimeout(() => setPersonalBest(WPM), 0);
        setTimeout(() => setIsNewPersonalBest(true), 0);
      } else {
        setTimeout(() => setIsNewPersonalBest(false), 0);
      }
    }
  }, [finished, WPM, setPersonalBest, setIsNewPersonalBest]);

  const handleTestRestart = () => {
    setCorrectChar(0);
    setCharStatus([]);
    setIndex(0);
    setIncorrectChar(0);
    setIsStarted(false);
    setTotalChar(0);
    setTest(getRandomTest(language, difficulty));
    setFinished(false);
  }


  return (
    <>
      <Header
        personalBest={personalBest}
      />
      {!finished && (
        <HomePage
          accuracy={accuracy}
          setAccuracy={setAccuracy}
          correctChar={correctChar}
          setCompleted={setCompleted}
          setCorrectChar={setCorrectChar}
          setFinished={setFinished}
          finished={finished}
          setIncorrectChar={setIncorrectChar}
          incorrectChar={incorrectChar}
          setWPM={setWPM}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
          setPersonalBest={setPersonalBest}
          setIsNewPersonalBest={setIsNewPersonalBest}
          time={time}
          setTime={setTime}
          language={language}
          setLanguage={setLanguage}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          WPM={WPM}
          charStatus={charStatus} setCharStatus={setCharStatus}
          index={index} setIndex={setIndex}
          test={test} setTest={setTest}
          totalChar={totalChar} setTotalChar={setTotalChar}
          handleRestart={handleTestRestart}
        />
      )
      }
      {finished && (
        <ResultPage
          accuracy={accuracy}
          correctChar={correctChar}
          completed={completed}
          incorrectChar={incorrectChar}
          isNewPersonalBest={isNewPersonalBest}
          setFinished={setFinished}
          setIsStarted={setIsStarted}
          handleRestart={handleTestRestart}
          WPM={WPM}
        />
      )}
    </>
  )
}

export default App
