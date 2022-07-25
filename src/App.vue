<template>
  <div id="app">
    <nav>
      <router-link class="router" to="/"></router-link>
      <router-link to="/about"></router-link>
      <router-link to="/login"></router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

.router {
  text-decoration: none;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
