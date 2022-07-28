<script>
export default {
  name: 'NumberApi',
  props: {
    msg: String,
  },

  data() {
    return {
      numberObj: {
        number: 0,
        type: String,
        text: '',
      },
    };
  },

  methods: {
    async showNumber() {
      const number = await this.axios.get(
        'http://numbersapi.com/random/year?json',
      );
      this.numberObj = number.data;
    },
  },
};
</script>

<template>
  <div class="number">
    <h1>Number API</h1>
    <button @click="showNumber">Press me</button>
    <div class="numberFactCenter" >
      {{ numberObj.text }}
    </div>
  </div>
</template>

<style>
.numberBack {
  list-style-type: none;
  text-align: center;
}
.number {
  background-color: rgb(255, 174, 93);
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  padding-top: 10px;
  margin-top: 100px;
}
.numberFactCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
