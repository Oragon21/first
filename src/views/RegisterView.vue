<template>
  <div class="register">
    <NavComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import NavComponent from '@/components/NavComponent.vue';

// @ is an alias to /src

export default {
  name: 'RegisterView',
  components: {
    NavComponent,
  },
};
</script>
