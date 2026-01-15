export function getAccuracy(correctChar:number, totalChar:number):number {
  if (totalChar === 0) return 0;
  return Number(((correctChar / totalChar) * 100).toFixed(1))
}