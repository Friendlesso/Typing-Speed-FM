import IconNewPB from '../../assets/icons/icon-new-pb.svg';
import IconCompleted from '../../assets/icons/icon-completed.svg';

import { ResultContent } from "../../components/ResultContent/ResultContent";
import { ResultIcon } from '../../components/ResultIcon/ResultIcon';
import { TotalCharStat } from "../../components/TotalCharStat/TotalCharStat";
import { TypingStats } from "../../components/TypingStats";

type ResultPageProps = {
  accuracy: number;
  correctChar: number;
  completed: number;
  incorrectChar: number;
  isNewPersonalBest: boolean;
  WPM: number;
}

export function ResultPage({
  accuracy,
  correctChar,
  completed,
  isNewPersonalBest,
  incorrectChar,
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

  return (
    <section className="flex flex-col gap-8">
      <ResultIcon 
        icon={icon}
        animationCircle={animationCircle}
        animationColor={animationColor}
        animationSize={animationSize}
      />
      <ResultContent
        label={label}
        quote={quote}
      />
      <div className="flex items-center justify-center pt-5 pb-8 gap-5">
        <TypingStats
          stat={WPM}
          statLabel="WPM"
          borderClass="border px-6 py-4 rounded-lg w-40"
          paddingAligment="p-0"
          textAligment="flex flex-col items-start gap-3"
        />
        <TypingStats
          stat={accuracy}
          statLabel="Accuracy"
          borderClass="border px-6 py-4 rounded-lg w-40"
          paddingAligment=" p-0 "
          textAligment=" flex flex-col items-start gap-3"
        />
        <TotalCharStat
          correctChar={correctChar}
          incorrectChar={incorrectChar}
        />
      </div>
      <div>
      </div>
    </section>
  )
}