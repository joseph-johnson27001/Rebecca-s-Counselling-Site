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
        <h1 class="fade-in-up" style="animation-delay: 0s">
          All parts of you are welcome.
        </h1>
        <p class="fade-in-up" style="animation-delay: 0.2s">
          I'm Rebecca — offering evidence-informed, trauma-aware therapy. I work
          with children, adolescents, young adults and parents. Sessions are
          available online and in-person.
        </p>
        <p class="fade-in-up" style="animation-delay: 0.4s">
          I aim to create a safe, supportive space where you can explore
          challenges, build resilience, and develop practical tools for coping
          and growth. Together, we work at your pace, focusing on your unique
          needs and strengths.
        </p>
        <div class="cta-wrap fade-in-up" style="animation-delay: 0.6s">
          <a href="#services" class="btn">My Services</a>
          <a href="#age-groups" class="btn btn-age">Who I Work With</a>
        </div>
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
  animation: fadeInUp 1.2s ease-out forwards 0.2s;
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
  min-height: 800px;
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
  padding: 60px 36px;
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
    padding: 40px 24px;
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
}
</style>
