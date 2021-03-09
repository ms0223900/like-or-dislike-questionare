<template>
  <div class="home">
    <questionare-part-container />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuestionarePartContainer from '@/containers/Questionare/QuestionarePartContainer.vue';
import '@/styles/main.scss';

export default defineComponent({
  name: 'Home',
  components: {
    QuestionarePartContainer,
  },
});
</script>
