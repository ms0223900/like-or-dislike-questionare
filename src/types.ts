export interface SingleRadioQuestion {
  question: string;
  score: number;
}

export interface SingleQuestion {
  seq: number;
  title: string;
  liked: SingleRadioQuestion;
  disliked: SingleRadioQuestion;
}
