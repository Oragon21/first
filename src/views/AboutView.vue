<template>
  <div class="about">
    <NavComponent msg="Welcome to Your Vue.js App" />
    <GoogleMapLoader></GoogleMapLoader>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import NavComponent from '@/components/NavComponent.vue';
// eslint-disable-next-line import/no-unresolved
import GoogleMapLoader from '@/components/GoogleMapLoader.vue';

// @ is an alias to /src

export default {
  name: 'AboutView',
  components: {
    NavComponent,
    GoogleMapLoader,
  },
};
</script>
