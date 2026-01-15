import { useState } from "react";
import { Test } from "./components/Test";
import type { CharStatus, TestText } from "../../types/TestTypes";
import { getRandomTest } from "../../utils/getRandomTest";

export function TypingTest() {
  const [charStatus, setCharStatus] = useState<Array<CharStatus>>([]);
  const [index, setIndex] = useState(0);
  const [test, setTest] = useState<TestText>(getRandomTest('Easy'));

  const characters = test?.text.split("");


  return (
    <section className="relative">
      <Test
        characters={characters}
        charStatus={charStatus}
        index={index}
      />
    </section>
  )
}