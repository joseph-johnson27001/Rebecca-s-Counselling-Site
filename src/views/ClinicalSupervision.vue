<template>
  <div>
    <LoadingSpinner :isLoading="!videoLoaded" />
    <section v-show="videoLoaded" class="hero">
      <video
        ref="videoEl"
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
        @loadeddata="onVideoLoaded"
      >
        <source
          src="https://cdn.pixabay.com/video/2023/10/22/186070-876973719_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-text">
          <p class="coming-soon-label fade-in-up" style="animation-delay: 0.1s">
            Coming Soon
          </p>
          <h1 class="fade-in-up" style="animation-delay: 0.3s">
            Clinical Supervision
          </h1>
          <p class="fade-in-up" style="animation-delay: 0.5s">
            I'm currently developing this area of my practice. Clinical
            supervision services for counsellors and helping professionals will
            be available here soon.
          </p>
          <p class="fade-in-up" style="animation-delay: 0.7s">
            In the meantime, feel free to get in touch to discuss your
            supervision needs.
          </p>
          <a
            href="mailto:rebecca.raye.counselling@gmail.com"
            class="contact-link fade-in-up"
            style="animation-delay: 0.9s"
            >Get in touch</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onActivated } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

const videoLoaded = ref(false);
const videoEl = ref(null);

onMounted(() => {
  if (videoEl.value?.readyState >= 2) {
    videoLoaded.value = true;
  }
});

onActivated(() => {
  videoEl.value?.play();
});

const onVideoLoaded = () => {
  videoLoaded.value = true;
};
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

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 1.2s ease-out forwards;
}

.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  padding: 60px 20px;
}

.hero-text {
  flex: 1;
}

.coming-soon-label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 16px;
}

.hero h1 {
  font-family: "Playfair Display", serif;
  font-size: 72px;
  color: white;
  margin: 0 0 32px;
  line-height: 1.2;
}

.hero p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  font-size: 18px;
  margin: 0 0 20px;
  max-width: 580px;
}

.contact-link {
  display: inline-block;
  margin-top: 12px;
  padding: 14px 36px;
  border: 2px solid white;
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 4px;
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.contact-link:hover {
  background: white;
  color: #333;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .hero p {
    font-size: 16px;
  }

  .hero-content {
    padding: 40px 20px;
  }
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 15px;
  }
}
</style>
