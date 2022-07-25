<script>
// give each todo a unique id

export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<template>
  <div class="nav-bar">
    <ul class="myul">

      <li class="myli"><a class="active" href="#home">
        <router-link to="/">Home</router-link>
      </a></li>
      <li class="myli"><a class="li-a" href="#news">Register</a></li>
      <li class="myli"><a class="li-a" href="#contact">Login</a></li>
      <li class="myli"><a class="li-a" href="#about">
        <router-link to="/about">About</router-link>
      </a></li>
      <router-view/>
    </ul>
  </div>
</template>
<style>
.myul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(-90deg, #fe52e1, #35e4ff);
  font-size: x-large;
}

.myli {
  float: left;
}

.li-a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: rgb(18, 148, 228);
}

.active {
  background-color: rgb(18, 148, 228);
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
