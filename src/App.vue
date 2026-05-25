<template>
  <div id="app">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { onMounted } from "vue";

onMounted(() => {
  // Clear hash on app load so page always starts at top on refresh
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }
});
</script>

<style>
main {
  min-height: 70vh;
}
</style>
