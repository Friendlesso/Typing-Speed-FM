import { useState } from "react";
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage";

function App() {
  const [WPM, setWPM] = useState(0);

  return (
    <>
      <Header />
      <HomePage 
        WPM={WPM}
      />
    </>
  )
}

export default App
