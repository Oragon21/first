<script>
// give each todo a unique id

export default {
  data() {
    return {
      errors: [],
      name: null,
      age: null,
      movie: null,
    };
  },
  props: {},
  methods: {
    checkForm(e) {
      if (this.name && this.age) {
        // return true;
        this.$router.push({ name: 'home', query: { plan: 'private' } });
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.age) {
        this.errors.push('Age required.');
      }

      // this.$router.push({ name: 'about', query: { plan: 'private' } });

      return e.preventDefault();
    },
  },
};
</script>

<template>
  <div>
    <form
      class="form"
      id="app"
      @submit="checkForm"
    >
      <div v-if="errors.length" class="center">
        <b>Please correct the following error(s):</b>
        <ul class="ul">
          <li class="li" v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
        </ul>
        <br />
      </div>
      <p>
        <label for="name">Name: </label>
        <input id="name" v-model="name" type="text" name="name" />
      </p>

      <p>
        <label for="age">Age: </label>
        <input id="age" v-model="age" type="number" name="age" min="0" />
      </p>

      <p>
        <label for="movie">Favorite Movie: </label>
        <select id="movie" v-model="movie" name="movie">
          <option>Star Wars</option>
          <option>Vanilla Sky</option>
          <option>Atomic Blonde</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Log in" />
      </p>
    </form>
  </div>
</template>

<style>
.form {
  color: rgb(252, 248, 234);
  background-color: rgba(255, 219, 113, 0.554);
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  padding-top: 10px;
  margin-top: 100px;
}

.ul {
  display: flow-root;
  color: white;
  text-align: center;
}
.li {
  text-decoration: none;
  float: none;
}

.center {
  text-align: center;
  margin: auto;
  width: 60%;
  border: 3px solid #ad2121;
  padding: 10px;
}
</style>
