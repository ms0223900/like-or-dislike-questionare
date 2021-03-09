<template>
  <div>
    <div
      v-if="!state.shouldShowResult.value"
    >
      <question-list
        :questions="state.questions"
        :radioValues="state.radioValuesState.radioValues"
        @change-question="state.handleChange"
      />
      <button :disabled="!state.isAllDone.value" @click="state.handleGetResult">Confirm!</button>
    </div>
    <questionare-result
      v-if="state.shouldShowResult.value"
      :score="state.scoreState.score"
    />
  </div>
</template>

<script>
import questions from '@/constants/questions.json';
import QuestionList from '@/components/Questionare/QuestionList.vue';
import QuestionareResult from '@/components/Questionare/QuestionareResult.vue';
import useQuestionarePart from './functions/useQuestionarePart';

export default {
  components: { QuestionList, QuestionareResult },
  name: 'QuestionarePartContainer',
  setup() {
    const state = useQuestionarePart({
      questions: questions.slice(0, 1),
    });
    console.log(state);

    return ({
      state,
    });
  },
};
</script>

<style>

</style>
