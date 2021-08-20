<template>
  <div class="pagination-wrapper">
    <button @click="$emit('update-page-now', pageNow - 1)">{{ '<' }}</button>
    <div class="button-wrapper">
      <button
        v-for="(page, i) in pageArr"
        :key="i"
        :className="page === pageNow ? 'active' : ''"
        @click="$emit('update-page-now', page)"
      >
        {{ page }}
      </button>
    </div>
    <button @click="$emit('update-page-now', pageNow + 1)">{{ '>' }}</button>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Pagination',
  props: {
    pageAmont: Number,
    pageNow: {
      type: Number,
      default: () => 0,
    },
  },
  setup(props) {
    const pageArr = computed(() => (
      Array(props.pageAmont).fill(0).map((el, i) => i + 1)
    ));
    return ({
      pageArr,
    });
  },
  emits: [
    'update-page-now',
  ],
};
</script>

<style lang="scss" scoped>
  .pagination-wrapper {
    display: flex;
    .button-wrapper {
      display: flex;
    }
    button.active {
      background-color: #aaa;

    }
  }
</style>
