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
          src="https://cdn.pixabay.com/video/2025/09/22/305657_small.mp4"
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
            services, need support, or simply want to explore whether we're a
            good fit, please reach out.
          </p>
          <p class="fade-in-up" style="animation-delay: 0.6s">
            This is a space for you to:
          </p>
          <ul class="hero-list fade-in-up" style="animation-delay: 0.6s">
            <li>Ask questions about how I work</li>
            <li>Share a little about what you’re looking for</li>
            <li>
              Get a sense of whether you feel comfortable speaking with me
            </li>
          </ul>
          <p class="fade-in-up" style="animation-delay: 0.8s">
            There is no expectation to commit — the purpose is clarity, not
            pressure. Finding the right therapeutic relationship matters. This
            is simply the first step in exploring that.
          </p>
          <p class="fade-in-up" style="animation-delay: 1s">
            Email me at
            <a
              href="mailto:rebecca.raye.counselling@gmail.com"
              class="hero-email"
              >rebecca.raye.counselling@gmail.com</a
            >
            and I'll typically respond within 48 hours.
          </p>
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
  transform: translateY(30px);
  animation: fadeInUp 1.2s ease-out forwards 0.5s;
}

.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--header-height));
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
  /* max-width: 600px; */
}

.hero-email {
  color: white;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.hero-email:hover {
  opacity: 0.8;
}

.hero-list {
  margin: 0 0 24px 1.4rem;
  padding: 0;
  color: rgba(255, 255, 255, 0.95);
  list-style: disc;
}

.hero-list li {
  margin-bottom: 0.75rem;
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
    overflow: hidden;
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
