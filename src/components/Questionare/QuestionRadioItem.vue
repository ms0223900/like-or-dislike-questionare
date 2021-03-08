<template>
  <div>
    <label>
      <input
        type="radio"
        :name="radioName"
        :value="question"
      />
      <h2>{{ question }}</h2>
    </label>
  </div>
</template>

<script>
export default {
  name: 'QuestionRadioItem',
  props: {
    radioName: {
      type: String,
    },
    question: {
      type: String,
    },
  },
};
</script>

<style scoped>
  label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
