<template>
  <div>
    <h1>Wrapped</h1>
    <slot />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'ProtectedPageWrapper',
  setup() {
    const store = useStore();
    const router = useRouter();
    const isAuth = computed(() => store.state.isAuth);

    const handleRouteProtectCheck = () => {
      if (!isAuth.value) {
        (async () => {
          await router.push({ name: 'Login' });
          window.history.replaceState({
            ...window.history.state,
            'from-route': `from-${router.currentRoute.value.path}`,
          }, '');
          // console.log(window.history.state);
        })();
      }
    };

    onMounted(() => {
      handleRouteProtectCheck();
    });

    return ({
      isAuth,
      handleRouteProtectCheck,
    });
  },
};
</script>

<style>

</style>
