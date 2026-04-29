<template>
  <section class="hero">
    <video class="hero-video" autoplay muted loop playsinline>
      <source src="/src/assets/videos/sky_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="fade-in-up" style="animation-delay: 0.2s">Resources</h1>
        <p class="fade-in-up" style="animation-delay: 0.4s">
          I believe in empowering my clients with knowledge and tools to support
          their mental health and wellbeing. Below you'll find a collection of
          resources, articles, and recommendations to complement our therapeutic
          work together.
        </p>
        <p class="fade-in-up" style="animation-delay: 0.6s">
          These resources cover a range of topics relevant to personal growth,
          healing, and resilience. Feel free to explore and reach out if you'd
          like personalized recommendations.
        </p>
      </div>
    </div>
  </section>

  <section class="section resources-section">
    <div class="resources-content">
      <!-- Apps Section -->
      <div class="resources-group">
        <h2 class="section-title">Helpful Mental Health Apps</h2>
        <div class="resources-grid">
          <a
            href="https://www.calmharm.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="resource-card"
          >
            <div class="resource-icon calm-harm">CH</div>
            <h3>Calm Harm</h3>
            <p>
              Supports managing self-harm urges with evidence-based techniques
              and tools.
            </p>
          </a>

          <a
            href="https://www.clearfear.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="resource-card"
          >
            <div class="resource-icon clear-fear">CF</div>
            <h3>Clear Fear</h3>
            <p>
              App for managing anxiety through exposure-based exercises and
              coping strategies.
            </p>
          </a>

          <a
            href="https://www.movemood.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="resource-card"
          >
            <div class="resource-icon move-mood">MM</div>
            <h3>Move Mood</h3>
            <p>
              Boosts motivation and coping skills through guided movement and
              mindfulness.
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
            <div class="resource-icon samaritans">SA</div>
            <h3>Samaritans</h3>
            <p>
              Providing emotional support to all those who need it, when they
              need it.
            </p>
          </a>

          <a
            href="https://www.youngminds.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            class="resource-card"
          >
            <div class="resource-icon young-minds">YM</div>
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
            <div class="resource-icon kooth">KO</div>
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
            <div class="resource-icon befrienders">BF</div>
            <h3>Befrienders</h3>
            <p>
              Emotional support services and crisis lines available around the
              world.
            </p>
          </a>

          <a
            href="https://adhduk.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            class="resource-card"
          >
            <div class="resource-icon adhd-uk">AU</div>
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
            <div class="resource-icon nas">NAS</div>
            <h3>National Autistic Society</h3>
            <p>
              Reliable information and support related to autism and autistic
              experiences.
            </p>
          </a>

          <a
            href="https://teensleephub.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            class="resource-card"
          >
            <div class="resource-icon teen-sleep">TS</div>
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
            <div class="resource-icon beat">BE</div>
            <h3>Beat Eating Disorders</h3>
            <p>
              Support and resources for people struggling with eating disorders
              and related issues.
            </p>
          </a>

          <a
            href="https://www.minded.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            class="resource-card"
          >
            <div class="resource-icon minded">MD</div>
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
  font-family: "Playfair Display", serif;
  font-size: 32px;
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
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
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
  margin-bottom: 16px;
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
