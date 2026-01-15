import { useState } from "react";
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage";

function App() {
  const [accuracy, setAccuracy] = useState(0);
  const [correctChar, setCorrectChar] = useState(0);
  const [finished, setFinished] = useState(false);
  const [incorrectChar, setIncorrectChar] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [WPM, setWPM] = useState(0);

  // States that pull the state from LocalStorage

  const [difficulty, setDifficulty] = useState()
  const [personalBest, setPersonalBest] = useState()
  const [time, setTime] = useState(60)

  const [timeLeft, setTimeLeft] = useState<number>(() =>
    typeof time === "number" ? time : 0
  )

  return (
    <>
      <Header />
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
          time={time}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          WPM={WPM}
        />
      )
      }

    </>
  )
}

export default App
