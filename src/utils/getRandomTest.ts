import data from '../data/textData.json';
import type { DifficultyValue, LanguageValue } from '../types/dropdown';
import type { TestText } from '../types/TestTypes';

export function getRandomTest(language: LanguageValue,difficulty: DifficultyValue): TestText {
  const texts = data[language][difficulty];
  return texts[Math.floor(Math.random() * texts.length)]
}