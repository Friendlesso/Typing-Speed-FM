import IconNewPB from '../../assets/icons/icon-new-pb.svg';
import IconCompleted from '../../assets/icons/icon-completed.svg';
import IconStarOne from '../../assets/images/pattern-star-1.svg';
import IconStarTwo from '../../assets/images/pattern-star-2.svg';

import confetti from "canvas-confetti";

import { ResultContent } from "../../components/ResultContent/ResultContent";
import { ResultIcon } from '../../components/ResultIcon/ResultIcon';
import { TotalCharStat } from "../../components/TotalCharStat/TotalCharStat";
import { TypingStats } from "../../components/TypingStats";
import { RestartTest } from '../../components/TypingTest/components/RestartTest';
import { useEffect } from 'react';

type ResultPageProps = {
  accuracy: number;
  correctChar: number;
  completed: number;
  incorrectChar: number;
  isNewPersonalBest: boolean;
  handleRestart: () => void;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>
  WPM: number;
}

export function ResultPage({
  accuracy,
  correctChar,
  completed,
  isNewPersonalBest,
  incorrectChar,
  handleRestart,
  WPM,
}: ResultPageProps) {

  let label: string;
  let quote: string;
  let icon: string;
  let animationColor: string;
  let animationSize: string;
  let animationCircle: boolean;

  if (completed === 1) {
    label = "Baseline Established!";
    quote = "You've set the bar. Now the real challenge begins—time to beat it."
    icon = IconCompleted;
    animationColor = "bg-(--green-500)"
    animationCircle = true;
    animationSize = "size-18"
  } else if (isNewPersonalBest) {
    label = "High Score Smashed!";
    quote = "You're getting faster. That was incredible typing.";
    icon = IconNewPB;
    animationColor = "bg-(--yellow-400)"
    animationCircle = false;
    animationSize = "size-12"
  } else {
    label = "Test Complete!"
    quote = "Solid run. Keep pushing to beat your high score."
    icon = IconCompleted;
    animationColor = "bg-(--green-500)"
    animationCircle = true;
    animationSize = "size-18"
  }

  useEffect(() => {
    if (!isNewPersonalBest || completed <= 1) return;

    confetti({
      particleCount: 160,
      angle: 60,
      spread: 70,
      startVelocity: 45,
      origin: {
        x: 0,
        y: 1
      }
    })

    confetti({
      particleCount: 120,
      angle: 120,
      spread: 70,
      startVelocity: 45,
      origin: {
        x: 1,
        y: 1
      }
    })

  }, [isNewPersonalBest, completed])

  return (
    <section className=" relative flex flex-col gap-8 mt-12">
      <ResultIcon
        animationCircle={animationCircle}
        animationColor={animationColor}
        animationSize={animationSize}
        icon={icon}
      />
      <ResultContent
        label={label}
        quote={quote}
      />
      <div className="flex sm:flex-row flex-col items-center justify-center pt-5 pb-8 gap-5">
        <TypingStats
          borderClass="border px-6 py-4 rounded-lg sm:w-40 w-full "
          stat={WPM}
          statLabel="WPM"
          paddingAlignment="p-0"
          textAlignment="flex flex-col items-start gap-3"
        />
        <TypingStats
          borderClass="border px-6 py-4 rounded-lg sm:w-40 w-full "
          stat={accuracy}
          statLabel="Accuracy"
          paddingAlignment=" p-0 "
          textAlignment=" flex flex-col items-start gap-3"
        />
        <TotalCharStat
          correctChar={correctChar}
          incorrectChar={incorrectChar}
        />
      </div>
      <RestartTest
        label="Go Again"
        handleRestart={handleRestart}
        colors='hover:bg-(--neutral-800) bg-(--neutral-0) hover:text-white text-(--neutral-900)'
        invert=' invert group-hover:invert-0 '
      />
      {(!isNewPersonalBest || completed >= 1) && (
        <>
          <span className='absolute sm:top-2/3 sm:bottom-auto bottom-10 sm:right-7 right-5 animate-ping [animation-duration:2.5s]'>
            <img src={IconStarOne} />
          </span>
          <span className='absolute sm:top-20 top-5 sm:left-7 left-5 animate-ping [animation-duration:2.5s]'>
            <img src={IconStarTwo} />
          </span>
        </>

      )}
    </section>
  )
}