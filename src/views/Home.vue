<template>
  <div class="home">
    <questionare-part-container />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuestionarePartContainer from '@/containers/Questionare/QuestionarePartContainer.vue';

export default defineComponent({
  name: 'Home',
  components: {
    QuestionarePartContainer,
  },
});
</script>
