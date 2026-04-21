<template>
  <section class="hero">
    <video class="hero-video" autoplay muted loop playsinline>
      <source
        src="https://video.wixstatic.com/video/11062b_6ec38afbe78f4fbdbdb799c40dd5993f/1080p/mp4/file.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-text">
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
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  padding: 60px 0px;
}

.hero-text {
  flex: 1;
}

.hero h1 {
  font-family: "Playfair Display", serif;
  font-size: 48px;
  color: white;
  margin: 0 0 24px;
  line-height: 1.2;
}

.hero p {
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  font-size: 16px;
  margin: 0 0 16px;
  max-width: 600px;
}

.cta-wrap {
  margin-top: 32px;
  display: flex;
  gap: 16px;
}

.cta-wrap .btn {
  background: white;
  color: var(--accent);
  border: 2px solid white;
  font-weight: 600;
}

.cta-wrap .btn-age {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-wrap .btn:hover {
  background: rgba(255, 255, 255, 0.95);
}

.cta-wrap .btn-age:hover {
  background: rgba(255, 255, 255, 0.1);
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

@media (max-width: 768px) {
  .hero {
    min-height: 500px;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 14px;
  }

  .cta-wrap {
    flex-direction: column;
    gap: 12px;
  }

  .cta-wrap .btn {
    width: 100%;
    text-align: center;
  }

  .hero-content {
    padding: 40px 24px;
  }
}

@media (max-width: 600px) {
  .hero {
    min-height: 450px;
  }

  .hero h1 {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .hero-text {
    flex: 1;
  }

  .cta-wrap {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .cta-wrap .btn {
    margin-right: 0;
    width: 100%;
    text-align: center;
    padding: 12px 18px;
  }
}
</style>
