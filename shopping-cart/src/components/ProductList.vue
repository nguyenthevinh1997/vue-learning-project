<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li :key="product.id" v-for="product in products">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>
<script>
import shop from "@/api/shop";
export default {
  data() {
    console.log("Data ne!!!");
    return {
      products: []
    };
  },
  created() {
    console.log("Created ne!!!");
    shop.getProducts(products => {
      this.products = products;
      console.log("Products ne!!!");
    });
  }
};
</script>
<style scoped></style>