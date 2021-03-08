<template>
  <div>
    <label>
      <input
        type="radio"
        :name="radioName"
        :value="question"
      />
      <h3>{{ question }}</h3>
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

<style lang="scss" scoped>
  label {
    display: flex;
    align-items: center;
    // justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
</style>
