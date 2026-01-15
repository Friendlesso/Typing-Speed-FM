import { useState } from "react";
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage";

function App() {
  const [accuracy, setAccuracy] = useState(0);
  const [correctChar, setCorrectChar] = useState();
  const [finished, setFinished] = useState(false);
  const [incorrectChar, setIncorrectChar] = useState();
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
            WPM={WPM}
            accuracy={accuracy}
          />
        )
      }

    </>
  )
}

export default App
