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
            I'm Rebecca — offering evidence-informed, trauma-aware therapy. I
            work with children, adolescents, young adults and parents. Sessions
            are available online and in-person.
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
  </div>

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

  <!-- Testimonials -->
  <section class="testimonials-section">
    <div class="testimonials-inner">
      <h2 class="testimonials-heading">What My Clients Say</h2>

      <div class="testimonials-slider">
        <button
          class="arrow-btn arrow-left"
          @click="prevTestimonial"
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>

        <div class="testimonial-card">
          <span class="quote-mark">&ldquo;</span>
          <Transition name="slide-fade" mode="out-in">
            <div :key="currentIndex" class="testimonial-body">
              <p class="testimonial-text">
                {{ testimonials[currentIndex].text }}
              </p>
              <p class="testimonial-attribution">
                — {{ testimonials[currentIndex].attribution }}
              </p>
            </div>
          </Transition>
        </div>

        <button
          class="arrow-btn arrow-right"
          @click="nextTestimonial"
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>

      <div class="testimonial-dots">
        <button
          v-for="(_, i) in testimonials"
          :key="i"
          class="dot"
          :class="{ active: i === currentIndex }"
          @click="currentIndex = i"
          :aria-label="`Go to testimonial ${i + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onActivated } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import ServiceGrid from "../components/ServiceGrid.vue";
import AgeGroupTabs from "../components/AgeGroupTabs.vue";

const testimonials = [
  {
    text: "Thank you for creating a safe space for me to talk about literally anything, from my childhood, to the present, and the future. Our sessions together have helped me so much in identifying patterns in my thinking and my behavior, and because of that, I've been able to work on myself and heal some of those wounds. I've become a lot more comfortable opening up, not only to you, but also to my friends and family, which is something I've always struggled with. I've felt so heard and understood in our sessions, which has truly made such a huge difference in how I see myself, and how I approach challenges and even milestones. I have grown so much as a person in such a short period of time, and it is all thanks to your effort and your patience with me. You've had a really great impact on me and I will carry everything I've learned from you with me forever.",
    attribution: "Adult client",
  },
  {
    text: "Rebecca listened with compassion, respected and approached my concerns, no matter how silly they seemed to me, with a serious and genuine approach.",
    attribution: "Adolescent client",
  },
  {
    text: "When we first met, I knew immediately what type of person you are — your kindness and empathy radiates naturally. Thank you for being an adult I can lean on as I navigate my way through year 13. You have been an integral part in allowing myself to get better and relying on others. You never failed to provide me with thoughtful insights and encouragements; your words have stuck with me and the impact you've had is immense.",
    attribution: "Student client",
  },
  {
    text: "Words cannot describe how much you have helped me these past few months. I've grown so much as a person and I think I am really happy now, which at points isn't something I thought I would ever really feel or experience again — so thank you. I had so much fun in our sessions so thank you for making me enjoy and look forward to them. I am beyond grateful for our time together and thankful that all the people you know and will meet in the future are happier people because of you. I hope that one day I can help people and make people happy like you.",
    attribution: "Adolescent client",
  },
  {
    text: "You are a very supportive, compassionate, kind person. I really appreciate the way you listen to my stories every week without judging and exploring my analogies with yours, like they're linking together. Our sessions have had measurable positive impacts on my life both physically and cognitively as I am sure they have had for many other people.",
    attribution: "Adolescent client",
  },
  {
    text: "I have been working with Rebecca for the better part of 2 years and I can't imagine my life without her. She is endlessly patient and compassionate and has such a wealth of knowledge and experience that she draws from — no matter what I throw at her, she holds it with care and helps me to make sense of it. Rebecca has helped me to understand my triggers and how to manage them; she has helped me to relate to myself with more kindness; she has helped me to identify unhelpful patterns and to explore possibilities for change and self-acceptance. I am so grateful for Rebecca and would recommend her to anyone. No matter what you're going through or where you are in your therapy journey, Rebecca will make things as safe and as easy for you as possible. You will learn so much and — crucially — you will start to feel better.",
    attribution: "Adult client",
  },
  {
    text: "Rebecca has been providing me long term therapy over the years. She has been instrumental in my identification of the source of my trauma and how to process and move forward with it. I struggle to articulate my feelings, but Rebecca has an amazing ability to understand what I'm saying and feeling and then rephrase it back to me so I can reflect and respond. Her techniques in guiding me to my answers has helped me develop my own skills of introspection. She helps you set manageable targets that reflect your personal goals but that also respect your emotional needs. She is highly intelligent, empathetic and personable. I highly recommend her services to anyone looking to heal, grow, and become a better version of themselves.",
    attribution: "Adult client",
  },
];

const currentIndex = ref(0);

function nextTestimonial() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
}

function prevTestimonial() {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length;
}

const videoLoaded = ref(false);
const videoEl = ref(null);

const onVideoLoaded = () => {
  videoLoaded.value = true;
};

onActivated(() => {
  videoEl.value?.play();
});

onMounted(() => {
  if (videoEl.value?.readyState >= 2) {
    videoLoaded.value = true;
  }

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
    overflow: hidden;
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

/* ── Testimonials ── */
.testimonials-section {
  background: #eac8bbab;
  display: flex;
  justify-content: center;
  padding: 64px 24px;
}

.testimonials-inner {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.testimonials-heading {
  font-family: system-ui, sans-serif;
  font-size: 28px;
  margin: 0;
  font-weight: 200;
  font-style: italic;
  color: var(--text);
  text-align: center;
}

.testimonials-slider {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.testimonial-card {
  flex: 1;
  background: #fff9f6;
  border-radius: 16px;
  padding: 48px 48px 36px;
  position: relative;
  box-shadow: 0 2px 16px rgba(200, 107, 74, 0.08);
  min-height: 220px;
  display: flex;
  flex-direction: column;
}

.quote-mark {
  font-family: "Playfair Display", serif;
  font-size: 80px;
  line-height: 1;
  color: var(--sun-2);
  position: absolute;
  top: 12px;
  left: 28px;
  pointer-events: none;
  user-select: none;
}

.testimonial-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.testimonial-text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted);
  margin: 0;
  font-style: italic;
}

.testimonial-attribution {
  font-size: 14px;
  font-weight: 600;
  color: var(--sun-3);
  margin: 0;
  letter-spacing: 0.03em;
}

.arrow-btn {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--sun-2);
  background: transparent;
  color: var(--sun-3);
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.2s,
    color 0.2s;
}

.arrow-btn:hover {
  background: var(--sun-2);
  color: white;
}

.testimonial-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--sun-2);
  opacity: 0.35;
  cursor: pointer;
  padding: 0;
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.dot.active {
  opacity: 1;
  transform: scale(1.25);
  background: var(--sun-3);
}

/* Slide transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(24px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}

@media (max-width: 600px) {
  .testimonial-card {
    padding: 44px 24px 28px;
  }

  .testimonials-slider {
    gap: 10px;
  }

  .arrow-btn {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  .testimonials-heading {
    font-size: 26px;
  }
}
</style>
