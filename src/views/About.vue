<template>
  <section class="page-hero">
    <div class="about-content">
      <div class="about-left">
        <h2 class="page-heading-md">About Rebecca</h2>
        <p class="about-desc">
          I'm a trained counsellor offering a warm, compassionate space for
          exploration and healing. I use evidence-informed, trauma-aware
          approaches, tailoring work to each individual and family.
        </p>
        <p class="about-desc">
          With over 8 years of experience in mental health support, I've worked
          with individuals across all ages, from children navigating school
          anxieties to adults processing life transitions and trauma. My
          approach integrates person-centred therapy, attachment theory, and
          somatic practices to help you reconnect with yourself and build
          lasting resilience.
        </p>
        <p class="about-desc">
          I believe healing happens in relationship—in a space where you're
          truly heard and accepted. Whether you're dealing with anxiety, grief,
          relational challenges, or simply feeling stuck, I'm here to support
          you on your journey toward greater wellbeing and authentic living.
        </p>
        <p class="about-desc">
          Outside of my work as a counsellor, you'll find me exploring nature,
          reading, or spending time with loved ones. I'm passionate about
          continuing education and staying current with the latest research in
          psychology and therapeutic approaches.
        </p>
      </div>
      <img
        src="/src/assets/rebecca-image.jpeg"
        alt="Rebecca Raye"
        class="about-photo"
      />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about-content {
  display: flex;
  gap: 40px;
  align-items: center;
  max-width: 1300px;
  width: 100%;
}
.about-left {
  flex: 1;
}
.about-desc {
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 16px;
}
.about-photo {
  border-radius: 8px;
  object-fit: cover;
  width: 360px;
  height: 360px;
  flex: 0 0 360px;
}
</style>
