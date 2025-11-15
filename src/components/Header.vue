<template>
  <header class="site-header">
    <div>
      <div class="brand">
        <img src="/src/assets/logo.svg" alt="Rebecca Raye" />
        <div>
          <div class="brand-title">Rebecca Raye</div>
          <div class="brand-sub">Counselling & Therapy</div>
        </div>
      </div>
      <nav class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
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

.brand-title {
  font-family: "Playfair Display", serif;
  font-size: 18px;
}
.brand-sub {
  font-size: 12px;
  opacity: 0.9;
}
</style>
