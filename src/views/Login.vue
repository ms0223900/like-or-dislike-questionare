<template>
  <h1>Login Page</h1>
  <button @click="handleLogin">
    Login
  </button>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'Login',
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    console.log(
      window.history.state,
      router.options.history.state,
    );

    onMounted(() => {
      console.log(
        window.history.state,
        router.options.history.state,
      );
    });

    const handleLogin = () => {
      store.dispatch('LOGIN');
      const backUrl = window.history.state.back;
      if (backUrl) router.push(backUrl);
      else router.push({ name: 'Home' });
    };

    return ({
      handleLogin,
    });
  },
};
</script>

<style>

</style>
