<template>
  <header class="site-header">
    <div class="brand">
      <img src="/src/assets/logo.svg" alt="Rebecca Raye" />
      <div>
        <div style="font-family: 'Playfair Display', serif; font-size: 18px">
          Rebecca Raye
        </div>
        <div style="font-size: 12px; opacity: 0.9">Counselling & Therapy</div>
      </div>
    </div>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
img {
  width: 56px;
  height: 56px;
}
.nav-links a {
  color: inherit;
}
</style>
