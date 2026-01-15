export function getWPM(
  totalChar:number, 
  incorrectChar:number, 
  time:number,
  timeLeft: number
) {
  const timeMinutes = (time - timeLeft) / 60
  const WPM = ((totalChar - incorrectChar) / 5) / timeMinutes;
  if (!WPM) return 0 
  return Math.floor(WPM);
}