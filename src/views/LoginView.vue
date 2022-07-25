<template>
  <div class="login">
    <NavComponent msg="Welcome to Your Vue.js App" />
    <InputComponent msg="Welcome to Your Vue.js App" />

  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import NavComponent from '@/components/NavComponent.vue';
// eslint-disable-next-line import/no-unresolved
import InputComponent from '@/components/InputComponent.vue';

// @ is an alias to /src

export default {
  name: 'AboutView',
  components: {
    NavComponent,
    InputComponent,
  },
};
</script>
