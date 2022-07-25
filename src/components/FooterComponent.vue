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
  <div class="footer">
    <ul class="ulNone">
      <li class="myli"><a href="https://hypebeast.com/">Info</a></li>
      <li class="myli">
        <a href="https://www.instagram.com/">Instagram</a>
      </li>
      <li class="myli">
        <a href="https://www.facebook.com/">Facebook</a>
      </li>
      <li class="myli">
        <a href="https://twitter.com/?lang=hu">Twitter</a>
      </li>
    </ul>
  </div>
</template>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(-90deg, #fe52e1, #35e4ff);
  color: white;
  overflow: hidden;
  list-style-type: none;
  text-decoration: none;
}

.ulNone {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: rgb(18, 148, 228);
}
</style>
