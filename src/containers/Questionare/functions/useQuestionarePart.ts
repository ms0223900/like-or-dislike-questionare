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
    handleResetValues,
  } = useMultiRadio({
    radioAmount: questions.length,
  });

  const handleGetResult = () => {
    const avgScore = calcAvgQuestionScore(questions, radioValuesState.radioValues);
    console.log(avgScore);
    scoreState.score = avgScore;
  };

  const handleResetResult = () => {
    scoreState.score = undefined;
    handleResetValues();
  };

  const isAllDone = computed(() => (
    radioValuesState.radioValues.every((val) => val !== '')
  ));
  const shouldShowResult = computed(() => (
    typeof scoreState.score === 'number'
  ));

  return ({
    isAllDone,
    shouldShowResult,
    questions,
    scoreState,
    radioValuesState,
    handleGetResult,
    handleResetResult,
    handleChange,
  });
};

export default useQuestionarePart;
