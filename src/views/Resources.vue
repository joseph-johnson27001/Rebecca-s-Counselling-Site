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
          src="https://cdn.pixabay.com/video/2023/10/15/185092-874643408_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="fade-in-up" style="animation-delay: 0.2s">Resources</h1>
          <p class="fade-in-up" style="animation-delay: 0.4s">
            I believe in empowering my clients with knowledge and tools to
            support their mental health and wellbeing. Below you'll find a
            collection of resources, articles, and recommendations to complement
            our therapeutic work together.
          </p>
          <p class="fade-in-up" style="animation-delay: 0.6s">
            These resources cover a range of topics relevant to personal growth,
            healing, and resilience. Feel free to explore and reach out if you'd
            like personalized recommendations.
          </p>
        </div>
      </div>
    </section>
    <div v-show="videoLoaded">
      <section class="section resources-section">
        <div class="resources-content">
          <!-- Apps Section -->
          <div class="resources-group">
            <h2 class="section-title">Helpful Mental Health Apps</h2>
            <div class="resources-grid">
              <a
                href="https://calmharm.stem4.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3oeZojkK9nJEmOhcR9VDjB76KrJzqUmnnWQ&s"
                    alt="Calm Harm logo"
                  />
                </div>
                <h3>Calm Harm</h3>
                <p>
                  Supports managing self-harm urges with evidence-based
                  techniques and tools.
                </p>
              </a>

              <a
                href="https://clearfear.stem4.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=clearfear.stem4.org.uk&sz=128"
                    alt="Clear Fear logo"
                  />
                </div>
                <h3>Clear Fear</h3>
                <p>
                  App for managing anxiety through exposure-based exercises and
                  coping strategies.
                </p>
              </a>

              <a
                href="https://movemood.stem4.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=movemood.stem4.org.uk&sz=128"
                    alt="Move Mood logo"
                  />
                </div>
                <h3>Move Mood</h3>
                <p>
                  Boosts motivation and coping skills through guided movement
                  and mindfulness.
                </p>
              </a>
            </div>
          </div>

          <!-- Websites Section -->
          <div class="resources-group">
            <h2 class="section-title">Helpful Mental Health Websites</h2>
            <div class="resources-grid">
              <a
                href="https://www.samaritans.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=samaritans.org&sz=128"
                    alt="Samaritans logo"
                  />
                </div>
                <h3>Samaritans</h3>
                <p>
                  Providing emotional support to all those who need it, when
                  they need it.
                </p>
              </a>

              <a
                href="https://www.youngminds.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=youngminds.org.uk&sz=128"
                    alt="Young Minds logo"
                  />
                </div>
                <h3>Young Minds</h3>
                <p>
                  Information and resources for parents and carers about young
                  people's mental health.
                </p>
              </a>

              <a
                href="https://www.kooth.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=kooth.com&sz=128"
                    alt="Kooth logo"
                  />
                </div>
                <h3>Kooth</h3>
                <p>
                  Support and resources for young people from professionals and
                  peers.
                </p>
              </a>

              <a
                href="https://www.befrienders.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=befrienders.org&sz=128"
                    alt="Befrienders logo"
                  />
                </div>
                <h3>Befrienders</h3>
                <p>
                  Emotional support services and crisis lines available around
                  the world.
                </p>
              </a>

              <a
                href="https://adhduk.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=adhduk.co.uk&sz=128"
                    alt="ADHD UK logo"
                  />
                </div>
                <h3>ADHD UK</h3>
                <p>
                  Reliable information and support related to ADHD and
                  neurodiversity.
                </p>
              </a>

              <a
                href="https://www.autism.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=autism.org.uk&sz=128"
                    alt="National Autistic Society logo"
                  />
                </div>
                <h3>National Autistic Society</h3>
                <p>
                  Reliable information and support related to autism and
                  autistic experiences.
                </p>
              </a>

              <a
                href="https://teensleephub.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=teensleephub.org.uk&sz=128"
                    alt="Teen Sleep Hub logo"
                  />
                </div>
                <h3>Teen Sleep Hub</h3>
                <p>
                  Supporting young people with sleep difficulties through
                  evidence-based resources.
                </p>
              </a>

              <a
                href="https://www.beateatingdisorders.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.beateatingdisorders.org.uk/static/src/img/logo.png"
                    alt="Beat Eating Disorders logo"
                  />
                </div>
                <h3>Beat Eating Disorders</h3>
                <p>
                  Support and resources for people struggling with eating
                  disorders and related issues.
                </p>
              </a>

              <a
                href="https://www.minded.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                class="resource-card"
              >
                <div class="resource-logo-container">
                  <img
                    class="resource-logo-img"
                    src="https://www.google.com/s2/favicons?domain=minded.org.uk&sz=128"
                    alt="MindEd logo"
                  />
                </div>
                <h3>MindEd</h3>
                <p>
                  Free education resource on children and young people's mental
                  health.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
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
  max-width: 600px;
}

.section {
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 20px;
}

.resources-section {
  background: transparent;
}

.resources-content {
  width: 100%;
}

.resources-group {
  margin-bottom: 60px;
}

.resources-group:last-child {
  margin-bottom: 0;
}

.section-title {
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 100;
  margin: 0 0 40px 0;
  color: var(--text-color, #333);
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.resource-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.resource-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.resource-logo-container {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  flex-shrink: 0;
}

.resource-logo-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 8px;
  image-rendering: -webkit-optimize-contrast;
}

.resource-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  color: white;
}

/* App Icons */
.calm-harm {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.clear-fear {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.move-mood {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

/* Website Icons */
.samaritans {
  background: linear-gradient(135deg, #c7a1d5 0%, #a67ab8 100%);
}

.young-minds {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.kooth {
  background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
}

.befrienders {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.adhd-uk {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%);
}

.nas {
  background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
}

.teen-sleep {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.beat {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.minded {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.resource-card h3 {
  font-family: "Playfair Display", serif;
  font-size: 20px;
  margin: 0 0 12px 0;
  color: var(--text-color, #333);
}

.resource-card p {
  font-size: 14px;
  color: var(--muted, #666);
  line-height: 1.6;
  margin: 0;
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

  .section-title {
    font-size: 26px;
    margin-bottom: 32px;
  }

  .resources-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
  }

  .resource-card {
    padding: 24px 18px;
  }
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .hero p {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .resources-group {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 22px;
    margin-bottom: 24px;
  }

  .resources-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .resource-card {
    padding: 24px 16px;
  }

  .resource-icon-container {
    width: 56px;
    height: 56px;
    margin-bottom: 12px;
  }

  .resource-icon-fallback {
    font-size: 20px;
  }

  .resource-icon {
    width: 56px;
    height: 56px;
    font-size: 20px;
    margin-bottom: 12px;
  }

  .resource-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .resource-card p {
    font-size: 13px;
  }
}
</style>
