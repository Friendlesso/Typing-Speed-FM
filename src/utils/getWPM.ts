export function getWPM(
  totalChar:number, 
  incorrectChar:number, 
  time:number,
  timeLeft: number
) {
  const timeMinutes = (time - timeLeft) / 60

  if(timeMinutes <= 0) return 0;

  const WPM = ((totalChar - incorrectChar) / 5) / timeMinutes;
  return Math.floor(Math.max(WPM, 0));
}