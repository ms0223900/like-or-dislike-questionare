import useMultiRadio from '@/lib/hooks/useMultiRadio';
import { SingleQuestion } from '@/types';
import { computed, reactive } from 'vue';

export interface UseQuestionarePartOptions {
  questions: SingleQuestion[];
}

export const calcAvgQuestionScore = (questions: SingleQuestion[], selectedAnswers: string[]) => {
  const allScores = questions.map((q, i) => {
    const key = q.liked.question === selectedAnswers[i] ? 'liked' : 'disliked';
    const { score } = q[key];
    return score;
  });
  const scoreSum = allScores.reduce((prev, next) => prev + next, 0);
  const res = Math.floor(scoreSum / questions.length);
  return res;
};

const useQuestionarePart = ({
  questions,
}: UseQuestionarePartOptions) => {
  const scoreState = reactive<{
    score: undefined | number;
  }>({
    score: undefined,
  });

  const {
    radioValuesState,
    handleChange,
  } = useMultiRadio({
    radioAmount: questions.length,
  });

  const handleGetResult = () => {
    const avgScore = calcAvgQuestionScore(questions, radioValuesState.radioValues);
    console.log(avgScore);
    scoreState.score = avgScore;
  };

  const isAllDone = computed(() => (
    radioValuesState.radioValues.every((val) => val !== '')
    // true
  ));
  const shouldShowResult = computed(() => (
    typeof scoreState.score === 'number'
  ));
  console.log(shouldShowResult.value);

  return ({
    isAllDone,
    shouldShowResult,
    questions,
    scoreState,
    radioValuesState,
    handleGetResult,
    handleChange,
  });
};

export default useQuestionarePart;
