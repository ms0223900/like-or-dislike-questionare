<template>
  <button v-bind="$props">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'ConfirmButton',
  props: {
    buttonText: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  button {
    &:disabled {
      background-color: #aaa;
      cursor: unset;
    }
    border-radius: 4px;
    padding: 8px;
    background-color: var(--primary);
    color: #fff;
    cursor: pointer;
  }
</style>
