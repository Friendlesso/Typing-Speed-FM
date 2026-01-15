import { Logo } from "./Logo";
import { PersonalBest } from "./PersonalBest";

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <PersonalBest />
    </header>
  )
}