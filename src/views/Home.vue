<template>
  <section class="hero">
    <div class="hero-content">
      <div class="left">
        <h1>Warm, nurturing counselling for individuals and families</h1>
        <p>
          I'm Rebecca — offering evidence-informed, trauma-aware therapy. I work
          with children, adolescents, young adults and parents. Sessions are
          available online and in-person.
        </p>
        <p>
          I aim to create a safe, supportive space where you can explore
          challenges, build resilience, and develop practical tools for coping
          and growth. Together, we work at your pace, focusing on your unique
          needs and strengths.
        </p>
        <div class="cta-wrap">
          <a href="#age-groups" class="btn">My Services</a>
        </div>
      </div>
      <svg
        class="photo"
        viewBox="0 0 360 360"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="360" height="360" fill="#f0e8e2" />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #c86b4a; stop-opacity: 0.15" />
            <stop
              offset="100%"
              style="stop-color: #6f8b6b; stop-opacity: 0.15"
            />
          </linearGradient>
        </defs>
        <circle cx="180" cy="80" r="60" fill="#c86b4a" opacity="0.3" />
        <ellipse
          cx="100"
          cy="180"
          rx="70"
          ry="100"
          fill="#c86b4a"
          opacity="0.2"
        />
        <path
          d="M240 240 Q280 200 300 260 Q260 300 240 240"
          fill="#6f8b6b"
          opacity="0.15"
        />
        <circle cx="140" cy="260" r="50" fill="#dbc5ce" opacity="0.4" />
        <text
          x="180"
          y="200"
          font-family="Playfair Display, serif"
          font-size="48"
          fill="#6f8b6b"
          text-anchor="middle"
          opacity="0.6"
        >
          A safe space
        </text>
        <text
          x="180"
          y="250"
          font-family="Playfair Display, serif"
          font-size="36"
          fill="#c86b4a"
          text-anchor="middle"
          opacity="0.5"
        >
          to heal
        </text>
      </svg>
    </div>
  </section>

  <ServiceGrid id="services" />

  <section class="section">
    <div class="access-box">
      <h2 class="access-title">Accessing the right help can feel daunting</h2>
      <p class="access-text">
        You may never have sought help before or may have struggled to find
        support helpful in the past. I offer a calm, flexible approach to help
        you and your family find a way forward.
      </p>
      <p class="access-text">
        Whether you're seeking support for anxiety, trauma, relationship
        challenges, or simply a space to explore your feelings, I'm here to
        listen and guide you with compassion and expertise.
      </p>
      <a href="/contact" class="btn-primary">Contact</a>
    </div>
  </section>

  <AgeGroupTabs id="age-groups" />
</template>

<script setup>
import ServiceGrid from "../components/ServiceGrid.vue";
import AgeGroupTabs from "../components/AgeGroupTabs.vue";
</script>

<style scoped>
.cta-wrap {
  margin-top: 18px;
}
.access-box {
  background: #c7a1d5;
  padding: 36px;
  border-radius: 8px;
  color: white;
}
.access-title {
  font-family: "Playfair Display", serif;
  color: white;
  margin: 0 0 8px;
}
.access-text {
  color: white;
  margin: 0 0 16px;
}
.btn-primary {
  display: inline-block;
  padding: 12px 24px;
  background: white;
  color: #c7a1d5;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
}
</style>
