<script>
export default {
  name: 'JokeComp',
  props: {
    msg: String,
  },

  data() {
    return {
      joke: '',
    };
  },

  methods: {
    async showJoke() {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      };

      const joke = await this.axios.get('https://icanhazdadjoke.com', config);
      this.joke = joke.data.joke;
    },
  },
};
</script>

<template>
  <div class="api">
    <h1>Joke API</h1>
    <button @click="showJoke">Press me</button>
    <div v-if="joke" class="joke">
      <p>{{ joke }}</p>
    </div>
  </div>
</template>

<style>
.api {
  background-color: rgb(255, 174, 93);
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  padding-top: 10px;
  margin-top: 100px;
}
</style>
