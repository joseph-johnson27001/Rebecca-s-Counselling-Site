<template>
  <section class="section">
    <div class="services-wrapper">
      <div class="services-header">
        <h2>My approaches</h2>
      </div>
      <div class="approaches-grid">
        <div
          v-for="(approach, idx) in approaches"
          :key="idx"
          class="approach-card fade-on-scroll"
          :style="{
            background: approach.bg,
          }"
        >
          <h3 class="approach-title">{{ approach.title }}</h3>
          <ul class="approach-list">
            <li v-for="item in approach.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const approaches = reactive([
  {
    title: "Integrative Modalities",
    items: [
      "Person Centred",
      "Existential",
      "Psychodynamic",
      "CBT",
      "DBT",
      "Attachment-Based",
    ],
    bg: "#F7D9C8",
  },
  {
    title: "Creative Methods",
    items: ["Art", "Play", "Sand Tray"],
    bg: "#d4e8d0",
  },
  {
    title: "Somatic Approaches",
    items: ["EFT", "Emotional Freedom", "Tapping", "Gestalt"],
    bg: "#f5e8c8",
  },
  {
    title: "Trauma Informed Practice",
    items: ["Triphasic Model"],
    bg: "#fce8e0",
  },
]);
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-on-scroll {
  opacity: 0;
  transform: translateY(30px);
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.services-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.services-header {
  width: 100%;
}

.services-header h2 {
  font-family: system-ui, sans-serif;
  font-size: 28px;
  margin: 0;
  font-weight: 200;
  font-style: italic;
}

.approaches-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
}

.approach-card {
  padding: 48px 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  min-height: 280px;
}

.approach-title {
  font-family: "Playfair Display", serif;
  font-size: 22px;
  margin: 0;
  color: #2b2b2b;
  font-weight: 500;
  line-height: 1.35;
}

.approach-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.approach-list li {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .approaches-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .approaches-grid {
    grid-template-columns: 1fr;
  }
}
</style>
