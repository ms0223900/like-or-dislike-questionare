<template>
  <div class="wrapper">
    <h1>
      {{ locale.zh['questionare.title'] }}
    </h1>
    <p>
      {{ locale.zh['questionare.description'] }}
    </p>
  </div>
</template>

<script>
import locale from '@/constants/locale.json';

export default {
  name: 'QuestionareTitle',
  setup() {
    return ({
      locale,
    });
  },
};
</script>

<style scoped>
  h1 {
    color: var(--primary);
  }
  .wrapper {
    text-align: center;
    padding-bottom: 16px;
    white-space: pre-wrap;
  }
</style>
