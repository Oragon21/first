<script>
import ProductComponent from './ProductComponent.vue';

export default {
  components: {
    ProductComponent,
  },

  data() {
    return {
      cart: [],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeItem(id) {
      // eslint-disable-next-line no-plusplus
      for (let i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
          this.cart.splice(i, 1);
          return;
        }
      }
    },
  },
};
</script>

<template>
  <div class="formDiv">
    <div class="product-info">
      <h1 class="h1">HYPE BEAST PRODUCTS</h1>
      <div class="cart">
        <p>Cart {{ cart.length }}</p>
      </div>

      <ProductComponent
        :premium="false"
        @add-to-cart="updateCart"
        @remove-from-cart="removeItem"
        msg="Welcome to Your Vue.js App"
        class="asd"
      />
      <ProductComponent
        :premium="true"
        @add-to-cart="updateCart"
        @remove-from-cart="removeItem"
        msg="Welcome to Your Vue.js App"
        class="asd"
      />
      <ProductComponent
        :premium="false"
        @add-to-cart="updateCart"
        @remove-from-cart="removeItem"
        msg="Welcome to Your Vue.js App"
        class="asd"
      />
      <ProductComponent
        :premium="true"
        @add-to-cart="updateCart"
        @remove-from-cart="removeItem"
        msg="Welcome to Your Vue.js App"
        class="asd"
      />
      <ProductComponent
        :premium="false"
        @add-to-cart="updateCart"
        @remove-from-cart="removeItem"
        msg="Welcome to Your Vue.js App"
        class="asd"
      />
    </div>
  </div>
</template>

<style>
.cart {
  right: 0px;
  top: 0px;
  position: fixed;
}

.asd {
  display: inline-block;
}

.h1 {
  text-align: center;
}

.formDiv {
  display: inline;
}

.product-info {
  color: rgb(252, 248, 234);
  background-color: rgba(255, 219, 113, 0.554);
  font-family: 'Times New Roman', Times, serif;
}
</style>
