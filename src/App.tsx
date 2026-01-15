import { useState } from "react";
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
  const [completed, setCompleted] = useState(0)
  const [difficulty, setDifficulty] = useState()
  const [personalBest, setPersonalBest] = useState(() => {
    return Number(localStorage.getItem("PB") || 0)
  })
  const [time, setTime] = useState(60)

  const [timeLeft, setTimeLeft] = useState<number>(() =>
    typeof time === "number" ? time : 0
  )

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
