<template>
  <section class="section services-section">
    <div class="services-wrapper">
      <!-- My Services -->
      <div class="services-header">
        <h2>My Services</h2>
      </div>
      <div class="service-cards-grid">
        <div class="service-card fade-on-scroll" style="--card-accent: #f5dcc8">
          <div class="service-card-top">
            <h3 class="service-title">Counselling &amp; Therapy</h3>
          </div>
          <p class="service-desc">
            A supportive and collaborative space for children, adolescents, and
            adults to explore emotional difficulties, life transitions,
            relationships, identity, anxiety, stress, self-esteem,
            neurodiversity, trauma, and overwhelm.
          </p>
          <p class="service-list-label">
            Sessions are tailored thoughtfully and may include:
          </p>
          <ul class="service-list">
            <li>Talking therapy</li>
            <li>Creative and play-based approaches</li>
            <li>Emotional regulation support</li>
            <li>Psychoeducation</li>
            <li>Somatic and grounding techniques</li>
            <li>Reflective exploration</li>
          </ul>
        </div>

        <div class="service-card fade-on-scroll" style="--card-accent: #e8ede6">
          <div class="service-card-top">
            <h3 class="service-title">Clinical Supervision</h3>
          </div>
          <p class="service-desc">
            Reflective, relational, and ethically grounded supervision for
            counsellors, therapists, and professionals working within helping
            roles. My supervision approach encourages curiosity, authenticity,
            and deeper reflection, while supporting safe and effective practice.
          </p>
          <p class="service-list-label">
            I aim to create a collaborative space to think openly about:
          </p>
          <ul class="service-list">
            <li>Client work &amp; ethical dilemmas</li>
            <li>Trauma-informed practice &amp; neurodiversity</li>
            <li>Safeguarding &amp; relational dynamics</li>
            <li>Burnout and practitioner wellbeing</li>
            <li>Working within school settings</li>
          </ul>
          <p class="service-note">
            Available for trainee and qualified practitioners.
          </p>
        </div>

        <div class="service-card fade-on-scroll" style="--card-accent: #faeee5">
          <div class="service-card-top">
            <h3 class="service-title">Parent Consultations</h3>
          </div>
          <blockquote class="service-quote">
            "Children's behaviour makes more sense when we look beneath the
            surface."
          </blockquote>
          <p class="service-desc">
            Supporting a child or teenager can sometimes feel confusing,
            emotionally draining, or isolating — especially when emotions,
            behaviour, anxiety, school refusal, friendship difficulties, or
            neurodiversity are involved.
          </p>
          <p class="service-list-label">
            Parent consultations provide a reflective space to:
          </p>
          <ul class="service-list">
            <li>Understand your child's emotional world</li>
            <li>Explore behavioural patterns and communication</li>
            <li>Strengthen connection and attachment</li>
            <li>Develop supportive strategies at home</li>
            <li>Navigate school and wellbeing concerns collaboratively</li>
          </ul>
          <p class="service-note">
            These sessions can be standalone or alongside a young person's
            therapy.
          </p>
        </div>

        <div class="service-card fade-on-scroll" style="--card-accent: #f5e8c8">
          <div class="service-card-top">
            <h3 class="service-title">Play Therapy</h3>
            <span class="service-badge">In Training</span>
          </div>
          <p class="service-desc">
            Play therapy is a developmentally appropriate therapeutic approach
            that helps children express emotions, process experiences, and build
            emotional resilience through play, creativity, and symbolic
            expression.
          </p>
          <p class="service-list-label">
            Through the language of play, children can:
          </p>
          <ul class="service-list">
            <li>Express what words cannot yet reach</li>
            <li>Process difficult experiences safely</li>
            <li>Build emotional resilience and self-understanding</li>
            <li>Develop a sense of agency and confidence</li>
          </ul>
          <p class="service-note">
            Currently completing advanced clinical training and supervised
            practice through PTUK International. Play-based approaches are
            already integrated into my therapeutic work with children.
          </p>
        </div>
      </div>

      <!-- My Approaches -->
      <div class="services-header approaches-header">
        <h2>My Approaches</h2>
      </div>
      <div class="approaches-grid">
        <div
          v-for="(approach, idx) in approaches"
          :key="idx"
          class="approach-card fade-on-scroll"
          :style="{ background: approach.bg }"
        >
          <img
            v-if="approach.icon"
            :src="approach.icon"
            :alt="approach.title"
            class="approach-icon"
          />
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
    icon: "/src/assets/chat_icon.png",
  },
  {
    title: "Creative Methods",
    items: ["Art", "Play", "Sand Tray"],
    bg: "#d4e8d0",
    icon: "/src/assets/kite_icon.png",
  },
  {
    title: "Somatic Approaches",
    items: ["EFT", "Emotional Freedom", "Tapping", "Gestalt"],
    bg: "#f5e8c8",
    icon: "/src/assets/compass_icon.png",
  },
  {
    title: "Trauma Informed Practice",
    items: ["Triphasic Model"],
    bg: "#fce8e0",
    icon: "/src/assets/family_icon.png",
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

.services-section {
  background: var(--soft);
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

.approaches-header {
  margin-top: 20px;
}

/* ── Service Cards ── */
.service-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.service-card {
  background: var(--card-accent, #f7f3ee);
  border-radius: 16px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
}

.service-card-top {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.service-title {
  font-family: "Playfair Display", serif;
  font-size: 22px;
  margin: 0;
  color: var(--text);
  font-weight: 500;
  line-height: 1.3;
}

.service-badge {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  background: rgba(0, 0, 0, 0.07);
  padding: 3px 10px;
  border-radius: 20px;
}

.service-quote {
  font-family: "Playfair Display", serif;
  font-size: 15px;
  font-style: italic;
  color: var(--muted);
  margin: 0;
  padding-left: 14px;
  border-left: 2px solid rgba(0, 0, 0, 0.15);
  line-height: 1.6;
}

.service-desc {
  font-size: 15px;
  color: var(--muted);
  line-height: 1.75;
  margin: 0;
}

.service-list-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  letter-spacing: 0.01em;
}

.service-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.service-list li {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
  padding-left: 16px;
  position: relative;
}

.service-list li::before {
  content: "–";
  position: absolute;
  left: 0;
  color: var(--muted);
  opacity: 0.6;
}

.service-note {
  font-size: 13px;
  color: var(--muted);
  font-style: italic;
  margin: 0;
  opacity: 0.85;
  line-height: 1.6;
}

/* ── Approaches Grid ── */
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

.approach-icon {
  width: 100px;
  height: 100px;
  object-fit: contain;
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
  .service-cards-grid {
    grid-template-columns: 1fr;
  }

  .approaches-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .service-card {
    padding: 28px 24px;
  }

  .approaches-grid {
    grid-template-columns: 1fr;
  }
}
</style>
