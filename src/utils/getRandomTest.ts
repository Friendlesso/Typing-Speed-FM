import data from '../data/textData.json';
import type { TestText } from '../types/TestTypes';

export function getRandomTest(difficulty: keyof typeof data): TestText {
  const items = data[difficulty];
  const index = Math.floor(Math.random() * items.length);
  return items[index]
}