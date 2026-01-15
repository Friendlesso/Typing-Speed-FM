import { useEffect, useState } from "react";
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage";
import { ResultPage } from "./pages/ResultPage";

function App() {
  const [accuracy, setAccuracy] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);
  const [finished, setFinished] = useState(false);
  const [incorrectChar, setIncorrectChar] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isNewPersonalBest, setIsNewPersonalBest] = useState(false);
  const [WPM, setWPM] = useState(0);

  // States that pull the state from LocalStorage
  const [completed, setCompleted] = useState(() => {
    return Number(localStorage.getItem("Comp") || 0)
  })
  const [difficulty, setDifficulty] = useState()
  const [personalBest, setPersonalBest] = useState(() => {
    return Number(localStorage.getItem("PB") || 0)
  })
  const [time, setTime] = useState(60)
  const [timeLeft, setTimeLeft] = useState<number>(() =>
    typeof time === "number" ? time : 0
  )

  useEffect(() => {
    localStorage.setItem("Comp", String(completed))
  }, [completed])
  
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
      {/* Change this later for ? : */}
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
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
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
          WPM={WPM}
        />
      )}
    </>
  )
}

export default App
