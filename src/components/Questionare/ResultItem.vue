<template>
  <h2>
    {{ title }}
    <span>{{ score }}</span>
  </h2>
  <h3>{{ desc }}</h3>
</template>

<script>
export default {
  name: 'ResultItem',
  props: {
    title: {
      type: String,
    },
    score: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};
</script>

<style scoped>
  h2, h3, h4 {
    text-align: center;
    white-space: pre-wrap;
  }
</style>
