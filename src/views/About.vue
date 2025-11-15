<template>
  <section class="section">
    <div class="about-inner">
      <div class="about-left">
        <h2 class="about-title">About Rebecca</h2>
        <p class="about-desc">
          I'm a trained counsellor offering a warm, compassionate space for
          exploration and healing. I use evidence-informed, trauma-aware
          approaches, tailoring work to each individual and family.
        </p>
        <div class="mt18">
          <a class="btn" href="#">Read More</a>
        </div>
      </div>
      <img
        src="https://via.placeholder.com/360x260.png?text=Profile"
        alt="profile"
        class="about-photo"
      />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about-inner {
  display: flex;
  gap: 40px;
  align-items: center;
}
.about-left {
  flex: 1;
}
.about-title {
  font-family: "Playfair Display", serif;
}
.about-desc {
  color: var(--muted);
  max-width: 64ch;
}
.mt18 {
  margin-top: 18px;
}
.about-photo {
  border-radius: 8px;
  object-fit: cover;
}
</style>
