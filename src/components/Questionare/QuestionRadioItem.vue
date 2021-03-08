<template>
  <div>
    <label>
      <input
        type="radio"
        :value="question"
      />
      <span>{{ question }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'QuestionRadioItem',
  props: {
    question: {
      type: String,
    },
  },
};
</script>

<style>

</style>
