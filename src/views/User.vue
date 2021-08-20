<template>
  <ProtectedPageWrapper>
    <h1>This is a user page. You are logged in and can see this page.</h1>
    <div>
      {{ userData }}
    </div>
  </ProtectedPageWrapper>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ProtectedPageWrapper from './ProtectedPageWrapper.vue';

export default {
  name: 'User',
  components: {
    ProtectedPageWrapper,
  },
  setup() {
    const store = useStore();
    return ({
      userData: computed(() => store.state.user),
    });
  },
};
</script>

<style>

</style>
