<script>
// give each todo a unique id

export default {
  data() {
    return {

    };
  },

  methods: {

  },

};
</script>

<template>
    <div class="footer">
        <ul class="ulNone">
            <li class="myli"><a class="active" href="#info">Info</a></li>
            <li class="myli"><a class="li-a" href="#instagram">Instagram</a></li>
            <li class="myli"><a class="li-a" href="#facebook">Facebook</a></li>
            <li class="myli"><a class="li-a" href="#twitter">Twitter</a></li>
        </ul>
    </div>

</template>

<style >
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: linear-gradient(-90deg, #fe52e1, #35e4ff);
    color: white;
    overflow: hidden;
    list-style-type: none;
    text-align: center;
    font-size: x-large;
}

.ulNone {
    list-style-type: none;
    margin: 0;
    padding: 0;

}
</style>
