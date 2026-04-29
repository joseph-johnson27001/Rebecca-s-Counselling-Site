<template>
  <section class="hero">
    <video class="hero-video" autoplay muted loop playsinline>
      <source
        src="https://media.istockphoto.com/id/1424205129/video/pink-cosmos-flowers-swaying-in-wind-in-sunset.mp4?s=mp4-640x640-is&k=20&c=bf0l3KhsWsXmiUbLLKmh_OK6nlG6OKvDG3oj3q5FHcg="
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="fade-in-up" style="animation-delay: 0.2s">Get In Touch</h1>
        <p class="fade-in-up" style="animation-delay: 0.4s">
          I'd love to hear from you. Whether you have questions about my
          services, need support, or simply want to explore whether we're a good
          fit, please reach out.
        </p>
        <p class="fade-in-up" style="animation-delay: 0.6s">
          I typically respond to inquiries within 48 hours and look forward to
          connecting with you.
        </p>
      </div>
    </div>
  </section>

  <section class="section contact-section">
    <div class="contact-content">
      <h2>Contact Information</h2>
      <p>
        Thank you for your interest. Please use the form below or contact me
        directly through your preferred method.
      </p>
      <p class="placeholder-text">
        Contact form and details coming soon. Please check back or reach out
        directly for more information.
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

.contact-section {
  background: white;
  text-align: center;
}

.contact-content h2 {
  font-family: "Playfair Display", serif;
  font-size: 32px;
  margin-bottom: 24px;
}

.contact-content p {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 16px;
}

.placeholder-text {
  font-style: italic;
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
