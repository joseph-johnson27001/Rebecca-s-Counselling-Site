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
  padding-bottom: 4px;
  transition: border-color 0.2s;
  border-bottom: 2px solid transparent;
}
.nav-links a:hover {
  border-bottom-color: rgba(255, 255, 255, 0.5);
}
.nav-links a.router-link-active {
  border-bottom-color: white;
  font-weight: 700;
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
