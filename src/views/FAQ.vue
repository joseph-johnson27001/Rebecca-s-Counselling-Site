<template>
  <section class="hero">
    <video class="hero-video" autoplay muted loop playsinline>
      <source src="/src/assets/videos/ocean_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="fade-in-up" style="animation-delay: 0.2s">
          Frequently Asked Questions
        </h1>
        <p class="fade-in-up" style="animation-delay: 0.4s">
          I understand that finding the right therapist and starting therapy can
          feel overwhelming. Here are answers to questions I'm often asked about
          my approach, how sessions work, and what to expect.
        </p>
        <p class="fade-in-up" style="animation-delay: 0.6s">
          If you have additional questions or concerns not addressed here,
          please don't hesitate to reach out. I'm happy to discuss your specific
          needs and how I might support you.
        </p>
      </div>
    </div>
  </section>

  <section class="section faq-section">
    <div class="faq-content">
      <h2>Coming Soon</h2>
      <p>
        We're currently building out our FAQ section. Please contact us directly
        if you have any questions about our services or therapeutic approach.
      </p>
    </div>
  </section>
</template>

<script setup></script>

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

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1.2s ease-out forwards 0.5s;
}

.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  font-size: 72px;
  color: white;
  margin: 0 0 32px;
  line-height: 1.2;
}

.hero p {
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  font-size: 18px;
  margin: 0 0 24px;
  max-width: 600px;
}

.section {
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 20px;
}

.faq-section {
  background: white;
  text-align: center;
}

.faq-content h2 {
  font-family: "Playfair Display", serif;
  font-size: 32px;
  margin-bottom: 24px;
}

.faq-content p {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .hero {
    min-height: 600px;
  }

  .hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .hero p {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .hero-content {
    padding: 24px 20px;
  }
}

@media (max-width: 600px) {
  .hero {
    min-height: 500px;
  }

  .hero h1 {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .hero p {
    font-size: 14px;
    margin-bottom: 12px;
  }
}
</style>
