<template>
  <div class="home">
    <NavComponent msg="Welcome to Your Vue.js App" />
<FormComponent></FormComponent>
<FooterComponent></FooterComponent>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import NavComponent from '@/components/NavComponent.vue';
// eslint-disable-next-line import/no-unresolved
import FormComponent from '@/components/FormComponent.vue';
// eslint-disable-next-line import/no-unresolved
import FooterComponent from '@/components/FooterComponent.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    NavComponent,
    FormComponent,
    FooterComponent,
  },
};
</script>
