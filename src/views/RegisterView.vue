<template>
  <div class="register">
    <NavComponent></NavComponent>
    <RandomApi></RandomApi>
    <NumberApi></NumberApi>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import NavComponent from '@/components/NavComponent.vue';
// eslint-disable-next-line import/no-unresolved
import RandomApi from '@/components/RandomApi.vue';
// eslint-disable-next-line import/no-unresolved
import NumberApi from '@/components/NumberApi.vue';

// @ is an alias to /src

export default {
  name: 'RegisterView',
  components: {
    NavComponent,
    RandomApi,
    NumberApi,
  },
};
</script>
