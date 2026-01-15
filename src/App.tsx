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
  const [time, setTime] = useState()

  return (
    <>
      <Header />
      {/* Change this later for ? : */}
      {!finished && (
        <HomePage
          accuracy={accuracy}
          setCorrectChar={setCorrectChar}
          setIncorrectChar={setIncorrectChar}
          WPM={WPM}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
      )
      }

    </>
  )
}

export default App
