<template>
  <Pagination
    :pageAmont="pageAmount"
    :pageNow="pageNow"
    @update-page-now="handleUpdatePage"
  />
</template>

<script>
/* eslint-disable no-unused-expressions */

import { ref, watch } from 'vue';
import Pagination from './Pagination.vue';

const validateNewPageIdx = (newPageIdx = 0, maxPageIdx = 10, minPageIdx = 0) => {
  if (newPageIdx < minPageIdx) return minPageIdx;
  if (newPageIdx > maxPageIdx) return maxPageIdx;
  return newPageIdx;
};

const usePagination = (pageAmount = 10, initPageIndex = 0, onPageChangedCb = () => {}) => {
  const pageNow = ref(initPageIndex);

  const handleUpdatePage = (newPage = -1) => {
    // console.log(newPage);
    pageNow.value = validateNewPageIdx(newPage, pageAmount, 1);
  };

  watch([pageNow], () => {
    // console.log(pageNow);
    onPageChangedCb && onPageChangedCb(pageNow.value);
  }, {
    immediate: true,
  });

  return ({
    pageNow,
    handleUpdatePage,
  });
};

export default {
  name: 'PaginationContainer',
  props: {
    pageAmount: Number,
  },
  setup(props, { emit }) {
    return usePagination(props.pageAmount, 1, (payload) => {
      // console.log(payload);
      emit('page-changed', payload);
    });
  },
  emits: [
    'page-changed',
  ],
  components: { Pagination },
};
</script>

<style>

</style>
