import { Logo } from "./Logo";
import { PersonalBest } from "./PersonalBest";

type HeaderProps = {
  personalBest: number;
}

export function Header({
  personalBest
}: HeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <PersonalBest
        personalBest={personalBest}
      />
    </header>
  )
}