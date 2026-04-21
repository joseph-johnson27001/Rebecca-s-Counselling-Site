<template>
  <header class="site-header">
    <div class="header-container">
      <div class="brand">
        <img
          class="logo"
          src="/src/assets/Rebecca_Logo.png"
          alt="Rebecca Raye"
        />
        <div class="brand-text">
          <div class="brand-title">Rebecca Raye</div>
          <div class="brand-sub">Counselling & Therapy</div>
        </div>
      </div>
      <nav class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/resources">Resources</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header-container {
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-family: "Playfair Display", serif;
  font-size: 18px;
  line-height: 1.2;
}

.brand-sub {
  font-size: 12px;
  opacity: 0.9;
  line-height: 1.2;
}

.nav-links {
  display: flex;
  gap: 18px;
}

.nav-links a {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
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

@media (max-width: 600px) {
  .brand-sub {
    display: none;
  }

  .nav-links {
    gap: 12px;
  }

  .nav-links a {
    font-size: 14px;
  }
}
</style>
