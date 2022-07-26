<script>
import ProductComponent from './ProductComponent.vue';

export default {
  created() {
    this.randomGenerator();
  },
  components: {
    ProductComponent,
  },

  data() {
    return {
      cart: [],
      products: [
        {
          id: 12,
          name: 'Ultraboost 3.0',
          description: 'Nagyon funky',
          price: 120,
        },
      ],
    };
  },
  methods: {
    makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        );
      }
      return result;
    },
    randomGenerator() {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < Math.random() * 1000; i++) {
        const prod = {
          id: Math.floor(Math.random() * 10),
          name: this.makeid(5),
          description: this.makeid(10),
          price: Math.floor(Math.random() * 500),
        };
        this.products.push(prod);
      }
    },
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
        v-show="randomGenerator"
        v-for="(product, index) in products"
        :key="index"
        :premium="false"
        :productObject="product"
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
  margin-bottom: 100px;
  padding-top: 10px;
  margin-top: 100px;
}

.hide {
  visibility: hidden !important;
}
</style>
