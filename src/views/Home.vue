<template>
  <div class="home">
    <!-- <question-list /> -->
    <questionare-result :score="23" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import QuestionList from '@/components/Questionare/QuestionList.vue';
import QuestionareResult from '@/components/Questionare/QuestionareResult.vue';

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld,
    // QuestionList,
    QuestionareResult,
  },
});
</script>
