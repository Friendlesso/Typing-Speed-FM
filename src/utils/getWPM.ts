import type { TimeDropdownValue } from "../types/dropdown";

export function getWPM(
  totalChar:number, 
  incorrectChar:number, 
  time:TimeDropdownValue,
  timeLeft: number
) {

  let elapsedMinutes = 0;

  if(time === "Passage") {
    elapsedMinutes =  timeLeft / 60
  } else {
    elapsedMinutes =  (time - timeLeft) / 60
  }



  if(elapsedMinutes <= 0) return 0;

  const WPM = ((totalChar - incorrectChar) / 5) / elapsedMinutes;
  return Math.floor(Math.max(WPM, 0));
}