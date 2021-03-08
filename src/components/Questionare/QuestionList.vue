<template>
  <div>
    <question-item
      v-for="(question, i) in questions"
      :key="i"
      :liked="question.liked"
      :disliked="question.disliked"
      @change-question="(value) => handleChange(value, i)"
    />
  </div>
</template>

<script>
import questions from '../../constants/questions.json';
import QuestionItem from './QuestionItem.vue';

export default {
  components: { QuestionItem },
  name: 'QuestionList',
  methods: {
    handleChange(value, index) {
      console.log(value, index);
    },
  },
  setup() {
    return ({
      questions,
    });
  },
};
</script>

<style>

</style>
