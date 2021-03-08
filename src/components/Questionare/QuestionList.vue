<template>
  <div>
    <question-item
      v-for="(question, i) in questions"
      :key="i"
      :index="i"
      :inputVal="radioValuesState.radioValues[i]"
      :title="question.title"
      :liked="question.liked"
      :disliked="question.disliked"
      @change-question="(value) => handleChange(value, i)"
    />
  </div>
</template>

<script>
import useMultiRadio from '@/lib/hooks/useMultiRadio';
import questions from '../../constants/questions.json';
import QuestionItem from './QuestionItem.vue';

export default {
  components: { QuestionItem },
  name: 'QuestionList',
  methods: {
    // handleChange(value, index) {
    //   console.log(value, index);
    // },
  },
  setup() {
    const {
      radioValuesState,
      handleChange,
    } = useMultiRadio({
      radioAmount: questions.length,
    });

    return ({
      radioValuesState,
      questions,
      handleChange,
    });
  },
};
</script>

<style>

</style>
