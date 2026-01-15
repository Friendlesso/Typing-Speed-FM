export type CharStatus = "correct" | 'incorrect';

export type DifficultyProps = {
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

export type TestText = {
  id: string;
  text: string;
}