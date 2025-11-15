<template>
  <section class="section">
    <div class="services-grid">
      <div
        v-for="(s, idx) in services"
        :key="idx"
        class="service-card"
        :style="{ background: s.bg }"
      >
        <div class="service-icon" v-html="s.icon"></div>
        <h3 class="service-title">{{ s.title }}</h3>
        <div class="service-rule"></div>
        <p class="service-blurb">{{ s.blurb }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const services = reactive([
  {
    title: "Person-Centred Therapy",
    blurb: "You lead. I walk beside you.",
    bg: "#F7D9C8",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="10" r="6" fill="#6F8B6B"/><path d="M12 22h24v16c0 2-2 4-4 4H16c-2 0-4-2-4-4v-16z" stroke="#6F8B6B" stroke-width="2"/></svg>`,
  },
  {
    title: "Attachment Therapy",
    blurb: "Let's trace how connection—or disconnection—shaped your instincts.",
    bg: "#E6DFF6",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20l12-8 12 8v14c0 2-2 4-4 4H16c-2 0-4-2-4-4v-14z" stroke="#6F8B6B" stroke-width="2"/></svg>`,
  },
  {
    title: "Interpersonal Neurobiology",
    blurb: "Your nervous system has a memory. But also… flexibility.",
    bg: "#EDEBE7",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="14" r="5" fill="#6F8B6B"/><path d="M12 26h24v12H12z" stroke="#6F8B6B" stroke-width="2"/></svg>`,
  },
  {
    title: "Art-Based Therapy",
    blurb: "Some things are easier to feel through colour, texture, and shape.",
    bg: "#AFC7F2",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="18" r="5" fill="#6F8B6B"/><circle cx="28" cy="14" r="4" fill="#6F8B6B" opacity="0.6"/><path d="M12 28h24v8H12z" stroke="#6F8B6B" stroke-width="2"/></svg>`,
  },
  {
    title: "Play Therapy",
    blurb: "Big feelings sometimes need small games.",
    bg: "#CFF7D3",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="12" width="10" height="10" fill="#6F8B6B"/><circle cx="30" cy="17" r="5" fill="#6F8B6B"/><path d="M12 28h24v8H12z" stroke="#6F8B6B" stroke-width="2"/></svg>`,
  },
  {
    title: "Narrative Therapy",
    blurb: "What would your story say if you held the pen?",
    bg: "#F5D7D9",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14h24c1 0 2 1 2 2v18c0 1-1 2-2 2H12c-1 0-2-1-2-2V16c0-1 1-2 2-2z" stroke="#6F8B6B" stroke-width="2"/><path d="M16 20h16M16 26h12" stroke="#6F8B6B" stroke-width="1.5"/></svg>`,
  },
  {
    title: "Polyvagal Therapy",
    blurb: "Fight, flight, freeze—your body has a playlist. Let's tune in.",
    bg: "#FFCFB0",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 10c8 0 14 6 14 14s-6 14-14 14-14-6-14-14 6-14 14-14z" stroke="#6F8B6B" stroke-width="2"/><path d="M20 18l-2 2M28 18l2 2" stroke="#6F8B6B" stroke-width="1.5"/></svg>`,
  },
  {
    title: "Internal Family Systems (IFS)",
    blurb: "Maybe the anxious part isn't you—just a protector who showed up early.",
    bg: "#BFB6B0",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="12" stroke="#6F8B6B" stroke-width="2"/><circle cx="18" cy="18" r="3" fill="#6F8B6B"/><circle cx="30" cy="18" r="3" fill="#6F8B6B"/><circle cx="24" cy="32" r="3" fill="#6F8B6B"/></svg>`,
  },
  {
    title: "Trauma-Informed Therapy",
    blurb: "We go at your pace. Safety first. Always.",
    bg: "#D6EEFF",
    icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 10l4 10h11l-9 7 4 10-10-7-10 7 4-10-9-7h11l4-10z" fill="#6F8B6B"/></svg>`,
  },
]);
</script>

<style scoped>
.services-grid {
  display: grid;
  gap: 12px;
}

.service-card {
  padding: 24px;
  color: #1f1f1f;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 4px;
}
.service-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
}
.service-icon svg {
  width: 48px;
  height: 48px;
}
.service-title {
  font-family: "Playfair Display", serif;
  margin: 0 0 6px;
  font-size: 18px;
}
.service-rule {
  width: 66px;
  border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
  margin-bottom: 12px;
}
.service-blurb {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
}

@media (min-width: 900px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 899px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .service-card {
    min-height: 160px;
  }
}
</style>
