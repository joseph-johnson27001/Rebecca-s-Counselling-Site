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
        <h1 class="fade-in-up" style="animation-delay: 0.2s">
          All parts of you are welcome.
        </h1>
        <p class="fade-in-up" style="animation-delay: 0.4s">
          I'm Rebecca — offering evidence-informed, trauma-aware therapy. I work
          with children, adolescents, young adults and parents. Sessions are
          available online and in-person.
        </p>
        <p class="fade-in-up" style="animation-delay: 0.6s">
          I aim to create a safe, supportive space where you can explore
          challenges, build resilience, and develop practical tools for coping
          and growth. Together, we work at your pace, focusing on your unique
          needs and strengths.
        </p>
        <div class="cta-wrap fade-in-up" style="animation-delay: 0.8s">
          <a href="#services" class="btn">My Services</a>
          <a href="#age-groups" class="btn btn-age">Who I Work With</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section about-section">
    <div class="about-content">
      <div class="about-left">
        <h2 class="about-heading">Hi! I'm Rebecca</h2>
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
      <div class="about-right">
        <img
          src="/src/assets/Rebecca_Image.png"
          alt="Rebecca Raye"
          class="about-photo"
        />
      </div>
    </div>
  </section>

  <ServiceGrid id="services" />

  <section class="section">
    <div class="access-box fade-on-scroll">
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
import { onMounted } from "vue";
import ServiceGrid from "../components/ServiceGrid.vue";
import AgeGroupTabs from "../components/AgeGroupTabs.vue";

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-on-scroll").forEach((el) => {
    observer.observe(el);
  });
});
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

.fade-on-scroll {
  opacity: 0;
  transform: translateY(30px);
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

.cta-wrap {
  margin-top: 40px;
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

.access-box.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
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

.about-section {
  background: white;
}

.about-content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 48px;
  align-items: center;
}

.about-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-heading {
  font-family: system-ui, sans-serif;
  font-size: 28px;
  margin: 0 0 24px;
  font-weight: 300;
  font-style: italic;
}

.about-desc {
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 16px;
  font-size: 16px;
}

.about-right {
  display: flex;
  justify-content: center;
  align-items: start;
}

.about-photo {
  border-radius: 24px;
  object-fit: cover;
  width: 400px;
  height: 400px;
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

  .cta-wrap {
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;
  }

  .cta-wrap .btn {
    width: 100%;
    text-align: center;
  }

  .hero-content {
    padding: 24px 0px;
  }
}

@media (max-width: 900px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .about-heading {
    font-size: 32px;
  }

  .about-photo {
    width: 340px;
    height: 340px;
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

  .about-heading {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .about-desc {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .about-photo {
    width: 240px;
    height: 240px;
  }
}
</style>
