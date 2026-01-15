export function getWPM(
  totalChar:number, 
  incorrectChar:number, 
  time:number
) {
  const timeMinutes = time / 60
  const WPM = ((totalChar - incorrectChar) / 5) / timeMinutes;
  return WPM;
}