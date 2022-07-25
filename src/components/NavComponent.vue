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
      <li class="myli"><router-link class="router" to="/">Home</router-link>
      </li>
      <li class="myli"><router-link class="router" to="/register">Register</router-link></li>
      <li class="myli"><router-link class="router" to="/login">Login</router-link></li>
      <li class="myli"><router-link class="router" to="/about">About</router-link></li>
      <router-view />
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

  transition: 0.4s;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(-90deg, #fe52e1, #35e4ff);
  font-size: x-large;
}
.router{
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
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
