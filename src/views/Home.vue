<template>
  <div class="home">
    <question-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import QuestionList from '@/components/Questionare/QuestionList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld,
    QuestionList,
  },
});
</script>
