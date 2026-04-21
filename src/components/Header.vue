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
        <router-link to="/resources">Resources</router-link>
        <router-link to="/clinical-supervision"
          >Clinical Supervision</router-link
        >
        <router-link to="/faq">FAQ</router-link>
      </nav>
      <button class="hamburger" @click="isMenuOpen = !isMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav v-if="isMenuOpen" class="mobile-menu">
      <router-link to="/" @click="isMenuOpen = false">Home</router-link>
      <router-link to="/faq" @click="isMenuOpen = false">FAQ</router-link>
      <router-link to="/resources" @click="isMenuOpen = false"
        >Resources</router-link
      >
      <router-link to="/clinical-supervision" @click="isMenuOpen = false"
        >Clinical Supervision</router-link
      >
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<style scoped>
header {
  position: relative;
  z-index: 1000;
}

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

.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: white;
  transition: all 0.3s;
  display: block;
}

.mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--accent);
    padding: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 999;
  }

  .mobile-menu a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s;
    padding: 8px 0;
  }

  .mobile-menu a:hover {
    opacity: 0.8;
  }

  .mobile-menu a.router-link-active {
    border-bottom: 2px solid white;
  }
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

  .mobile-menu {
    padding: 16px;
  }

  .mobile-menu a {
    font-size: 16px;
  }
}
</style>
