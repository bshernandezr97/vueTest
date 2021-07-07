<template>
  <section>
    <ul>
      <button @click="handleClick">PruebaRouter</button>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import useCart from '../mixins/cart'

export default {
  setup() {
    const { products, handleClick } = useCart();
    return { products, handleClick }
  },
  components: {
    ProductItem,
  }
};
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>