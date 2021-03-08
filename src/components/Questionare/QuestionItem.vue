<template>
  <div>
    <form
      class="form"
      :value="inputVal"
      @change="$emit('change-question', $event.target.value)"
    >
      <question-radio-item
        :question="liked.question"
      />
      <question-radio-item
        :question="disliked.question"
      />
    </form>
  </div>
</template>

<script>
import QuestionRadioItem from './QuestionRadioItem.vue';

export default {
  components: { QuestionRadioItem },
  name: 'QuestionItem',
  emits: [
    'change-question',
  ],
  props: {
    index: Number,
    inputVal: String,
    liked: {
      question: String,
    },
    disliked: {
      question: String,
    },
  },

};
</script>

<style scoped>
  .form {
    display: flex;
    margin: auto;
    justify-content: center;
  }
</style>
