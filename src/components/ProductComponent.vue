<script>
// give each todo a unique id

export default {
  data() {
    return {
      selectedVariant: 0,
      details: [
        {
          id: 12,
          name: 'Ultraboost 3.0',
          description: 'Nagyon funky',
          price: 120,
        },
      ],
      variants: [
        {
          variantId: 145,
          variantColor: 'gray',
          variantImage:
            'https://www.softmoc.com/items/images/H00276_AnimatedGIF.gif',
        },
        {
          variantId: 175,
          variantColor: 'black',
          variantImage:
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Adidas_Yeezy_Boost_350_Pirate_Black.gif',
        },
      ],
      backgroundColor: 'none',
    };
  },
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    productObject: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    removeFromCart() {
      this.$emit(
        'remove-from-cart',
        this.variants[this.selectedVariant].variantId,
      );
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    premiumUserDiscount() {
      if (this.premium) {
        return 0;
      }
      return this.details[0].price;
    },
  },
  computed: {
    desc() {
      return this.details[0].description;
    },
    price() {
      return this.details[0].price;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
  },
};
</script>

<template>
  <div>
    <div class="items">
      <div class="prodName">
        {{ productObject.name }}
      </div>
      <div class="product-image">
        <img :src="image" />
      </div>

      <h3>Description: {{ productObject.description }}</h3>
      <h3>Price: {{ productObject.price }}</h3>

      <div
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)"
      ></div>

      <div class="buttons">
        <button v-on:click="addToCart">Add to Cart</button>
        <button v-on:click="removeFromCart">Remove product</button>
      </div>
    </div>
  </div>
</template>

<style>
.items {
  display: inline-block;
  padding: 5%;
  margin: 1%;
  margin-bottom: 5%;
  background-color: #82cafdb8;
}

.h1 {
  text-align: center;
}

.formDiv {
  display: inline;
}

img {
  width: 150px;
  height: 150px;
  margin-left: 10px;
}

.product-image {
  flex-basis: 1px;
}

.buttons {
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;
}

.color-box {
  height: 40px;
  width: 40px;
  margin-top: 5px;
  margin-left: 10px;
}

.cart {
  border: none;
  text-decoration: double;
  text-align: center;
  background-color: #1e95ea88;
  color: rgb(255, 255, 255);
  width: 100px;
  font-size: 17px;
}

.no-bullets {
  list-style-type: none;
  margin-left: 35px;
}

button {
  margin-top: 10px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.prodName {
  text-align: center;
  font-size: x-large;
  font-weight: bold;
}
</style>
