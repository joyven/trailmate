<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>
