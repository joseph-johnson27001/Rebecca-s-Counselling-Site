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
          <a href="#services" class="btn">My Services</a>
          <a href="#age-groups" class="btn btn-age">Who I Work With</a>
        </div>
      </div>
      <img class="photo" :src="leaves" alt="Leaves illustration" />
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
import leaves from "/src/assets/leaves.png";
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
.btn {
  margin-right: 10px;
}
.btn-age {
  border: var(--sun-3) 1px solid;
  color: var(--sun-3);
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
