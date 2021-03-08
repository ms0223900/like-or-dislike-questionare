<template>
  <div>
    <form
      class="form"
      :value="inputVal"
      @change="$emit('change-question', $event.target.value)"
    >
      <question-radio-item
        :radioName="`question-${index}`"
        :question="liked.question"
      />
      <question-radio-item
        :radioName="`question-${index}`"
        :question="disliked.question"
      />
    </form>
    <hr />
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
  // watch: {
  //   inputVal(v) {
  //     console.log(v);
  //   },
  // },
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
    /* display: flex; */
    margin: auto;
    justify-content: center;
  }
</style>
