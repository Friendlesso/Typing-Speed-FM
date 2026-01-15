import { TypingHUD } from "../../components/TypingHUD/TypingHUD";

type HomePageProps = {
  WPM: number;
}

export function HomePage(
  {
    WPM,
  }: HomePageProps
) {
  return (
    <div>
      <TypingHUD
        WPM={WPM}
      />
    </div>
  )
}