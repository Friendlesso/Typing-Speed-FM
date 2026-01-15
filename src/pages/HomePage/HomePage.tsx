import { TypingHUD } from "../../components/TypingHUD/TypingHUD";

type HomePageProps = {
  accuracy: number;
  WPM: number;
}

export function HomePage(
  {
    accuracy,
    WPM,
  }: HomePageProps
) {
  return (
    <div>
      <TypingHUD
        accuracy={accuracy}
        WPM={WPM}
      />
    </div>
  )
}