<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/Header.vue";
</script>

<template>
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#app {
  height: 100vh;
  background-color: #ffffff;
}
</style>
