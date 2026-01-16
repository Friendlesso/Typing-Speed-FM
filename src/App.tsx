import { useEffect, useState } from "react";
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage";
import { ResultPage } from "./pages/ResultPage";
import type { DifficultyValue, TimeDropdownValue } from "./types/dropdown";

function App() {
  const [accuracy, setAccuracy] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);
  const [finished, setFinished] = useState(true);
  const [incorrectChar, setIncorrectChar] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isNewPersonalBest, setIsNewPersonalBest] = useState(false);
  const [WPM, setWPM] = useState(0);

  // States that pull the state from LocalStorage
  const [completed, setCompleted] = useState(() => {
    return Number(localStorage.getItem("Comp") || 0)
  })
  const [difficulty, setDifficulty] = useState<DifficultyValue>(
    (localStorage.getItem("diff") as DifficultyValue) || "Easy"
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
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          WPM={WPM}
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
          WPM={WPM}
        />
      )}
    </>
  )
}

export default App
