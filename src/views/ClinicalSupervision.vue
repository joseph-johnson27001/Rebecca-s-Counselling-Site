<template>
  <div>
    <LoadingSpinner :isLoading="!videoLoaded" />

    <!-- Hero -->
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
          <h1 class="fade-in-up" style="animation-delay: 0.3s">
            Clinical Supervision
          </h1>
          <p class="fade-in-up" style="animation-delay: 0.5s">
            As a clinical supervisor, I work with both trainee and qualified
            psychotherapists and counsellors. My supervision practice is
            grounded in an empowering, compassionate, and relational approach —
            one that fosters learning, development, and professional growth in a
            space where reflection and curiosity are encouraged.
          </p>
          <p class="fade-in-up" style="animation-delay: 0.6s">
            I offer monthly clinical supervision for counsellors and helping
            professionals working across private practice, schools, and other
            organisational settings. I draw on the Seven-Eyed Model alongside an
            integrative, trauma-informed lens to help us make sense of what's
            happening in the room, around the room, and within you.
          </p>
          <p class="hero-quote fade-in-up" style="animation-delay: 0.75s">
            All parts of you are welcome. Even the ones you're not sure what to
            do with.
          </p>
          <a
            href="/contact"
            class="contact-link fade-in-up"
            style="animation-delay: 0.9s"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>

    <!-- Getting Started -->
    <section v-show="videoLoaded" class="section getting-started-section">
      <div class="getting-started-box fade-on-scroll">
        <h2 class="gs-heading">Getting Started</h2>
        <p class="gs-text">
          If you're considering supervision, you're welcome to get in touch for
          an initial conversation. It's important that it feels like the right
          fit for both of us — there's no pressure, and no obligation.
        </p>
        <a href="/contact" class="btn-primary">Start a conversation</a>
      </div>
    </section>

    <!-- What Supervision Is Like + My Approach -->
    <section v-show="videoLoaded" class="section two-col-section">
      <div class="two-col-grid">
        <div class="info-card fade-on-scroll">
          <h2 class="card-heading">What Supervision With Me Is Like</h2>
          <p class="card-text">
            This isn't a place to perform or prove you're getting it "right."
            It's a space where we slow things down, get curious, and think
            together in a way that actually supports you to keep doing the work.
          </p>
          <p class="card-text">
            Some sessions will feel reflective and spacious. Others more focused
            and practical. We'll follow what's needed.
          </p>
          <p class="card-label">You can expect supervision to be:</p>
          <ul class="styled-list">
            <li>Collaborative rather than top-down</li>
            <li>Reflective, not prescriptive</li>
            <li>Ethically grounded</li>
            <li>Respectful of your judgement and autonomy</li>
            <li>Focused on sustainability</li>
          </ul>
        </div>

        <div class="info-card fade-on-scroll">
          <h2 class="card-heading">My Approach</h2>
          <p class="card-text">My work is shaped by:</p>
          <ul class="styled-list">
            <li>
              A relational way of working — how <em>you</em> are in the room
              matters
            </li>
            <li>
              Trauma-informed practice, including complex and developmental
              trauma
            </li>
            <li>
              Experience across educational settings, charity organisations, and
              private practice
            </li>
            <li>
              An understanding of how different systems shape the work — or
              sometimes get in the way of it
            </li>
          </ul>
          <p class="card-text">
            Whether you're working one-to-one in private practice or within a
            wider organisation, we'll hold both the clinical work and the
            context you're practising in.
          </p>
        </div>
      </div>
    </section>

    <!-- Areas We Often Explore -->
    <section v-show="videoLoaded" class="section explore-section">
      <div class="explore-inner fade-on-scroll">
        <h2 class="section-heading">Areas We Often Explore</h2>
        <p class="section-subtext">
          Supervision often includes a wide range of topics — clinical,
          relational, and personal. Here are some of the areas we might cover:
        </p>
        <div class="explore-grid">
          <div
            v-for="area in exploreAreas"
            :key="area.title"
            class="explore-card"
          >
            <div class="explore-icon">{{ area.icon }}</div>
            <h3 class="explore-title">{{ area.title }}</h3>
          </div>
        </div>
        <p class="explore-footer">
          And also the quieter, often unspoken parts — doubt, frustration,
          stuckness, and the things that linger after sessions end.
        </p>
      </div>
    </section>

    <!-- Practitioners accordions -->
    <section v-show="videoLoaded" class="section practitioners-section">
      <div class="practitioners-grid">
        <div
          v-for="(panel, i) in practitionerPanels"
          :key="i"
          class="practitioner-card"
          :class="{ open: openPanel === i }"
        >
          <button class="panel-toggle" @click="togglePanel(i)">
            <span class="panel-label">{{ panel.label }}</span>
            <span class="panel-title">{{ panel.title }}</span>
            <span class="panel-icon">{{ openPanel === i ? "−" : "+" }}</span>
          </button>
          <div v-show="openPanel === i" class="panel-body">
            <p class="panel-intro">{{ panel.intro }}</p>
            <ul class="styled-list">
              <li v-for="item in panel.items" :key="item">{{ item }}</li>
            </ul>
            <p v-if="panel.closing" class="panel-closing">
              {{ panel.closing }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Practical Details -->
    <section v-show="videoLoaded" class="section practical-section">
      <div class="practical-inner fade-on-scroll">
        <h2 class="section-heading">Practical Details</h2>
        <div class="practical-grid">
          <div class="practical-item">
            <div class="practical-header">
              <span class="practical-icon">&#128197;</span>
              <h3 class="practical-title">Frequency</h3>
            </div>
            <p class="practical-text">Monthly supervision sessions</p>
          </div>
          <div class="practical-item">
            <div class="practical-header">
              <span class="practical-icon">&#163;</span>
              <h3 class="practical-title">Standard Rate</h3>
            </div>
            <p class="practical-text">£70 per session</p>
            <!-- <p class="practical-text muted">£3,500 block rate available</p> -->
          </div>
          <div class="practical-item">
            <div class="practical-header">
              <span class="practical-icon">&#127891;</span>
              <h3 class="practical-title">Student &amp; Trainee Rate</h3>
            </div>
            <p class="practical-text">£45 per session</p>
            <!-- <p class="practical-text muted">£2,000 block rate available</p> -->
          </div>
          <div class="practical-item">
            <div class="practical-header">
              <span class="practical-icon">&#10003;</span>
              <h3 class="practical-title">Payment</h3>
            </div>
            <p class="practical-text">
              All fees to be paid prior to the session
            </p>
          </div>
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

  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document
    .querySelectorAll(".fade-on-scroll")
    .forEach((el) => observer.observe(el));
});

onActivated(() => {
  videoEl.value?.play();
});

const onVideoLoaded = () => {
  videoLoaded.value = true;
};

const openPanel = ref(null);
const togglePanel = (i) => {
  openPanel.value = openPanel.value === i ? null : i;
};

const exploreAreas = [
  {
    title: "Safeguarding & Ethical Decision-Making",
    icon: `⚖️`,
  },
  {
    title: "Emotional Impact & Managing Capacity",
    icon: `💭`,
  },
  {
    title: "Working Within Systems & Structures",
    icon: `🏗️`,
  },
  {
    title: "Multi-Agency & Multi-Disciplinary Dynamics",
    icon: `👥`,
  },
  {
    title: "Cultural Context & Identity",
    icon: `🌍`,
  },
  {
    title: "Balancing Therapeutic Integrity & External Pressures",
    icon: `⚖️`,
  },
];

const practitionerPanels = [
  {
    label: "Early in your journey?",
    title: "For Early-Career Practitioners & Trainees",
    intro:
      "Starting out can feel like holding everything at once. This space is about helping you build confidence in your own thinking — not just relying on someone else's. We can take time to:",
    items: [
      "Make sense of your client work",
      "Explore your developing identity as a practitioner",
      "Talk through placement or early practice challenges",
      "Ask the questions you're not sure you're \"allowed\" to ask",
    ],
    closing: "You don't need to have it all figured out.",
  },
  {
    label: "Been doing this a while?",
    title: "For Experienced Practitioners",
    intro:
      'If you\'ve been doing this work for a while, supervision becomes something different. Less about "what should I do?" and more about:',
    items: [
      "Staying connected to your practice",
      "Working with complexity and nuance",
      "Navigating private practice or organisational demands",
      "Avoiding burnout and maintaining sustainability",
    ],
    closing:
      "Sometimes it's simply about having a space where you don't have to carry it all on your own.",
  },
];
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

.fade-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

/* Hero */
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height));
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
  padding: 60px 0px;
}
.hero-text {
  flex: 1;
}

.eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 16px;
}
.hero h1 {
  font-family: "Playfair Display", serif;
  font-size: 72px;
  color: white;
  margin: 0 0 28px;
  line-height: 1.2;
}
.hero p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  font-size: 17px;
  margin: 0 0 18px;
}
.hero-quote {
  border-left: 3px solid rgba(242, 184, 160, 0.8);
  padding-left: 16px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.95) !important;
  font-size: 18px !important;
  margin: 24px 0 32px !important;
}
.contact-link {
  display: inline-block;
  margin-top: 4px;
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

/* Getting Started */
.getting-started-section {
  padding-top: 48px;
  padding-bottom: 48px;
}
.getting-started-box {
  background: var(--accent);
  padding: 48px;
  border-radius: 12px;
  color: white;
}
.gs-heading {
  font-family: system-ui, sans-serif;
  font-size: 28px;
  font-weight: 200;
  font-style: italic;
  margin: 0 0 16px;
  color: white;
}
.gs-text {
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.8;
  font-size: 17px;
  margin: 0 0 28px;
}
.btn-primary {
  display: inline-block;
  padding: 13px 32px;
  background: white;
  color: var(--accent);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover {
  background: rgba(255, 255, 255, 0.88);
}

/* Two-col info cards */
.two-col-section {
  background: white;
  padding-top: 56px;
  padding-bottom: 56px;
}
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.info-card {
  background: var(--soft);
  border-radius: 12px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.card-heading {
  font-family: system-ui, sans-serif;
  font-size: 22px;
  font-weight: 200;
  font-style: italic;
  margin: 0 0 20px;
  color: var(--text);
}
.card-text {
  color: var(--muted);
  line-height: 1.8;
  font-size: 15px;
  margin: 0 0 14px;
}
.card-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin: 4px 0 10px;
}
.styled-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.styled-list li {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.6;
  padding-left: 20px;
  position: relative;
}
.styled-list li::before {
  content: "–";
  position: absolute;
  left: 0;
  color: var(--sun-3);
}

/* Explore section */
.explore-section {
  background: #f0e8e2;
  padding-top: 64px;
  padding-bottom: 64px;
}
.explore-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}
.section-heading {
  font-family: system-ui, sans-serif;
  font-size: 28px;
  font-weight: 200;
  font-style: italic;
  margin: 0;
  color: var(--text);
  text-align: center;
}
.section-subtext {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.8;
  text-align: center;
  max-width: 600px;
  margin: -16px 0 0;
}
.explore-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}
.explore-card {
  background: white;
  border-radius: 12px;
  padding: 20px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  box-shadow: 0 2px 12px rgba(200, 107, 74, 0.07);
}
.explore-icon {
  flex-shrink: 0;
  font-size: 28px;
  line-height: 1;
}
.explore-title {
  font-family: "Playfair Display", serif;
  font-size: 15px;
  margin: 0;
  color: var(--text);
  line-height: 1.4;
}
.explore-footer {
  font-style: italic;
  color: var(--muted);
  font-size: 16px;
  text-align: center;
  max-width: 560px;
  margin: 0;
}

/* Practitioners accordion */
.practitioners-section {
  padding-top: 56px;
  padding-bottom: 56px;
}
.practitioners-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.practitioner-card {
  border: 1.5px solid #e8ddd6;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s;
}
.practitioner-card.open {
  border-color: var(--sun-2);
}
.panel-toggle {
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  text-align: left;
  position: relative;
}
.panel-toggle:hover {
  background: var(--soft);
}
.panel-label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--sun-3);
}
.panel-title {
  font-family: "Playfair Display", serif;
  font-size: 20px;
  color: var(--text);
  line-height: 1.3;
}
.panel-icon {
  position: absolute;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: var(--sun-3);
  font-weight: 300;
}
.panel-body {
  padding: 0 32px 28px;
}
.panel-intro {
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
  margin: 0 0 16px;
}
.panel-closing {
  color: var(--muted);
  font-style: italic;
  font-size: 15px;
  margin: 20px 0 0;
}

/* Practical Details */
.practical-section {
  background: white;
  padding-top: 64px;
  padding-bottom: 64px;
}
.practical-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}
.practical-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
}
.practical-item {
  background: var(--soft);
  border-radius: 12px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.practical-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.practical-icon {
  font-size: 22px;
  line-height: 1;
  flex-shrink: 0;
}
.practical-title {
  font-family: "Playfair Display", serif;
  font-size: 17px;
  margin: 0;
  color: var(--text);
}
.practical-text {
  color: var(--muted);
  font-size: 15px;
  margin: 0;
  line-height: 1.6;
}
.practical-text.muted {
  font-size: 13px;
}

/* Responsive */
@media (max-width: 900px) {
  .two-col-grid {
    grid-template-columns: 1fr;
  }
  .explore-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .practical-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 40px;
  }
  .hero-content {
    padding: 40px 20px;
  }
  .explore-grid,
  .practical-grid {
    grid-template-columns: 1fr;
  }
  .getting-started-box {
    padding: 32px 24px;
  }
  .info-card,
  .panel-toggle {
    padding: 24px;
  }
}
</style>
