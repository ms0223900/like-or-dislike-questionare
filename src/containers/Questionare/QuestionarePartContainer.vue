<template>
  <div>
    <h2>{{ `Page Listen From Component: ${pageNow}` }}</h2>
    <pagination-container ref="paginationRef" :pageAmount="12" @page-changed="updatePage" />
    <button @click="updatePageFromOutside(10)">To Page: 10</button>
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
import { ref } from 'vue';
import _ from 'lodash';
import questions from '@/constants/questions.json';
import QuestionList from '@/components/Questionare/QuestionList.vue';
import QuestionareResult from '@/components/Questionare/QuestionareResult.vue';
import QuestionareTitle from '@/components/Questionare/QuestionareTitle.vue';
import ConfirmButton from '@/components/Questionare/ConfirmButton.vue';
import PaginationContainer from '@/components/Common/Pagination/PaginationContainer.vue';
import useQuestionarePart from './functions/useQuestionarePart';

export default {
  components: {
    QuestionList,
    QuestionareResult,
    QuestionareTitle,
    ConfirmButton,
    PaginationContainer,
  },
  name: 'QuestionarePartContainer',
  setup() {
    const pageNow = ref(0);
    const updatePage = (newPage) => {
      pageNow.value = newPage;
    };
    const state = useQuestionarePart({
      // questions: questions.slice(0, 10),
      questions: _.shuffle(questions),
    });

    return ({
      pageNow,
      updatePage,
      state,
    });
  },
  methods: {
    updatePageFromOutside(newPage = 10) {
      this.$refs.paginationRef.handleUpdatePage(newPage);
    },
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
