<template>
  <div>
    <div
      class="question-wrapper"
      v-if="!state.shouldShowResult.value"
    >
      <QuestionareTitle />
      <question-list
        :questions="state.questions"
        :radioValues="state.radioValuesState.radioValues"
        @change-question="state.handleChange"
      />
      <div
        :style="{
          textAlign: 'center',
        }"
      >
        <confirm-button
          :disabled="!state.isAllDone.value"
          buttonText="確定檢測"
          @click="state.handleGetResult"
        />
      </div>
    </div>
    <questionare-result
      v-if="state.shouldShowResult.value"
      :score="state.scoreState.score"
      @return-homepage="state.handleResetResult"
    />
    <div>
      <h4>參考書目:</h4>
      <a
        href="https://www.books.com.tw/products/0010832606?sloc=main"
        target="_blank"
      >
        一句話，好感度暴增、反感度爆表！【日本暢銷10萬冊】
      </a>
    </div>
  </div>
</template>

<script>
import questions from '@/constants/questions.json';
import QuestionList from '@/components/Questionare/QuestionList.vue';
import QuestionareResult from '@/components/Questionare/QuestionareResult.vue';
import QuestionareTitle from '@/components/Questionare/QuestionareTitle.vue';
import ConfirmButton from '@/components/Questionare/ConfirmButton.vue';
import useQuestionarePart from './functions/useQuestionarePart';

export default {
  components: {
    QuestionList,
    QuestionareResult,
    QuestionareTitle,
    ConfirmButton,
  },
  name: 'QuestionarePartContainer',
  setup() {
    const state = useQuestionarePart({
      questions: questions.slice(0, 10),
      // questions,
    });
    // console.log(state);

    return ({
      state,
    });
  },
};
</script>

<style scoped>
  .question-wrapper {
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0px 0px 10px #ccc;
  }
</style>
