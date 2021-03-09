<template>
  <div>
    <question-item
      v-for="(question, i) in questions"
      :key="i"
      :index="i"
      :inputVal="radioValues[i]"
      :title="question.title"
      :liked="question.liked"
      :disliked="question.disliked"
      @change-question="(value) => $emit('change-question', value, i)"
    />
  </div>
</template>

<script>
import QuestionItem from './QuestionItem.vue';

export default {
  components: { QuestionItem },
  name: 'QuestionList',
  props: {
    questions: {
      type: Array,
    },
    radioValues: {
      type: Array,
    },
  },
  emits: [
    'change-question',
  ],
};
</script>

<style>

</style>
