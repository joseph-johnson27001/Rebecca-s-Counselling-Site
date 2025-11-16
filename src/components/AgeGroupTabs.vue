<template>
  <section class="section">
    <div class="tabs-container">
      <div class="tabs-header">
        <button
          v-for="(tab, idx) in tabs"
          :key="idx"
          :class="{ active: activeTab === idx }"
          @click="activeTab = idx"
          class="tab-btn"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="tabs-content">
        <div v-if="activeTab === 0" class="age-section">
          <h2>{{ tabs[0].label }}</h2>
          <ul>
            <li>Separation anxiety and school refusal</li>
            <li>Behavioural challenges (anger, oppositional)</li>
            <li>Low self-esteem or confidence issues</li>
            <li>
              Family transitions (e.g., divorce, new siblings, relocation)
            </li>
            <li>Sensory overwhelm or emotional dysregulation</li>
            <li>Difficulty making or keeping friends</li>
            <li>Bullying (victim or aggressor)</li>
            <li>Selective mutism or extreme shyness</li>
            <li>Early signs of anxiety or trauma</li>
            <li>Parental conflict or attachment ruptures</li>
          </ul>
        </div>

        <div v-if="activeTab === 1" class="age-section">
          <h2>{{ tabs[1].label }}</h2>
          <ul>
            <li>Anxiety and depression</li>
            <li>Social isolation or peer pressure</li>
            <li>Academic stress and school refusal</li>
            <li>Self-harm or suicidal ideation</li>
            <li>Identity questions and self-esteem</li>
            <li>Trauma-related difficulties</li>
            <li>Body image and eating concerns</li>
            <li>Substance use exploration</li>
            <li>Relationship and dating challenges</li>
            <li>Family conflict and communication</li>
          </ul>
        </div>

        <div v-if="activeTab === 2" class="age-section">
          <h2>{{ tabs[2].label }}</h2>
          <ul>
            <li>Anxiety, depression and relational difficulties</li>
            <li>Trauma-informed therapy and nervous system regulation</li>
            <li>Family, parenting and couple work</li>
            <li>Support for chronic or medical conditions</li>
            <li>Life transitions and career challenges</li>
            <li>Grief and loss</li>
            <li>Work-related stress and burnout</li>
            <li>Relationship breakdown</li>
            <li>Parenting support and family dynamics</li>
            <li>Personal development and self-discovery</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "Children (Ages 5–12)" },
  { label: "Teens & Adolescents (Ages 13–19)" },
  { label: "Adults & Young Adults (Ages 20+)" },
];
</script>

<style scoped>
.tabs-header {
  display: flex;
  gap: 0;
  border-bottom: 2px solid var(--accent);
  margin-bottom: 30px;
}

.tab-btn {
  flex: 1;
  padding: 16px 20px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--muted);
  font-family: "Playfair Display", serif;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: -2px;
}

.tab-btn:hover {
  color: var(--accent);
}

.tab-btn.active {
  color: white;
  background: var(--accent);
  border-bottom-color: var(--accent);
}

.tabs-content {
  min-height: 300px;
}

.age-section h2 {
  font-family: "Playfair Display", serif;
  font-size: 28px;
  margin: 0 0 20px;
  color: var(--accent);
}

.age-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.age-section li {
  padding: 8px 0;
  color: var(--muted);
  line-height: 1.5;
}

.age-section li:before {
  content: "•";
  margin-right: 10px;
  font-weight: bold;
  color: var(--accent);
}

@media (max-width: 800px) {
  .tabs-header {
    flex-wrap: wrap;
  }

  .tab-btn {
    flex: 0 1 calc(50% - 0px);
    font-size: 14px;
    padding: 12px 16px;
  }

  .age-section ul {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .tab-btn {
    flex: 0 1 100%;
  }
}
</style>
