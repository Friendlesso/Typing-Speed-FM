export type DifficultyValue = 'Easy' | 'Medium' | 'Hard'

export type TimeDropdownValue = 15 | 30 | 60 | 120 | "Passage";

export type DropdownItemProp<T> = {
  label: string;
  value: T;
}

export const difficultyItems: DropdownItemProp<DifficultyValue>[] = [
  { label: "Easy", value: "Easy" },
  { label: "Medium", value: "Medium" },
  { label: "Hard", value: "Hard" },
]

export const TimeItems: DropdownItemProp<TimeDropdownValue>[] = [
  {label: "15s", value: 15},
  {label: "30s", value: 30},
  {label: "60s", value: 60},
  {label: "120s", value: 120},
  {label: "Passage", value: "Passage"}
]