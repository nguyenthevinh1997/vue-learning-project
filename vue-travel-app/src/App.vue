<template>
  <div id="app">
    <TheNavigation></TheNavigation>
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: {
    TheNavigation
  }
};
</script>

<style lang="css">
@import "./static/css/all.css";
@import "./static/css/font-awesome.min.css";
@import "./static/css/main.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
