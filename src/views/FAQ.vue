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
          src="https://cdn.pixabay.com/video/2023/10/22/186115-877653483_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="fade-in-up" style="animation-delay: 0.2s">
            Frequently Asked Questions
          </h1>
          <p class="fade-in-up" style="animation-delay: 0.4s">
            I understand that finding the right therapist and starting therapy
            can feel overwhelming. Here are answers to questions I'm often asked
            about my approach, how sessions work, and what to expect.
          </p>
          <p class="fade-in-up" style="animation-delay: 0.6s">
            If you have additional questions or concerns not addressed here,
            please don't hesitate to reach out. I'm happy to discuss your
            specific needs and how I might support you.
          </p>
        </div>
      </div>
    </section>

    <section v-show="videoLoaded" class="section faq-section">
      <div class="faq-content">
        <div class="faq-list">
          <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
            <button
              class="faq-question"
              @click="toggleItem(index)"
              :class="{ active: expandedItems.has(index) }"
            >
              <span class="question-text">{{ item.question }}</span>
              <span class="toggle-icon">+</span>
            </button>
            <div v-if="expandedItems.has(index)" class="faq-answer fade-in">
              {{ item.answer }}
            </div>
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
});

onActivated(() => {
  videoEl.value?.play();
});

const onVideoLoaded = () => {
  videoLoaded.value = true;
};

const expandedItems = ref(new Set());

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "I offer individual counselling for children, adolescents, and adults, play therapy for younger clients, clinical supervision for professionals, and parent consultations. Parent consultations focus on supporting you in understanding and navigating your child's emotional and behavioral needs.",
  },
  {
    question: "What is the difference between counselling and play therapy?",
    answer:
      "Counselling uses conversation to explore thoughts and feelings, while play therapy lets children express themselves through play, which can help them process emotions when words are tough.",
  },
  {
    question: "Who can access your services?",
    answer:
      "I work with children, adolescents, adults, and parents. Whether you're seeking support for yourself or guidance on behalf of your child, I'm here to help.",
  },
  {
    question: "What is clinical supervision?",
    answer:
      "Clinical supervision is a reflective, professional space where therapists and helping professionals can develop their practice, reflect on their work, and ensure ethical, high-quality care.",
  },
  {
    question: "Do you offer in-person or online sessions?",
    answer:
      "I offer both. Sessions can be in person (at my practice) or online, depending on location as I work internationally.",
  },
  {
    question: "What can I expect in my first session?",
    answer:
      "The first session is a gentle beginning. We'll talk about what's bringing you here, your goals, and we'll see if we're a good fit—no pressure.",
  },
  {
    question: "How long are sessions and how much do they cost?",
    answer:
      "Sessions are 50 minutes. My standard rate is £80 per session. However, I offer a sliding scale for students or those with a low income. Please reach out so we can discuss a rate that works for you. All fees to be paid before the session.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes, I offer a brief initial consultation so you can get a sense of the process and ask any initial questions.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can contact me via the form on this website or by email. I'll respond with next steps and available times.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "Please let me know at least 48 hours in advance. If you cancel less than 24 hours before, you'll be charged at half the session rate.",
  },
  {
    question: "Is what I share confidential?",
    answer:
      "Absolutely. Confidentiality is a cornerstone of my practice. The only exceptions are if there's a risk of harm to you or someone else—I'll always explain any limits to confidentiality.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "That depends on you. Some people come for a few focused sessions; others choose longer-term support. We'll review together as we go.",
  },
];

const toggleItem = (index) => {
  if (expandedItems.value.has(index)) {
    expandedItems.value.delete(index);
  } else {
    expandedItems.value.add(index);
  }
  expandedItems.value = new Set(expandedItems.value);
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
  background: transparent;
}

.faq-content {
  width: 100%;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.faq-item {
  margin-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  width: 100%;
  padding: 24px 20px;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  transition: background-color;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color, #333);
}

.question-text {
  flex: 1;
  text-align: left;
}

.toggle-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--accent, #c7a1d5);
  transition: transform 0.3s ease;
  margin-left: 16px;
}

.faq-question.active .toggle-icon {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 20px 20px 24px 20px;
  color: var(--muted, #666);
  line-height: 1.7;
  font-size: 15px;
  background-color: #fafafa;
  border-top: 1px solid #ddd;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

  .section {
    padding: 20px 10px;
  }

  .faq-question {
    padding: 18px 16px;
    font-size: 15px;
  }

  .faq-answer {
    padding: 16px 16px 18px 16px;
    font-size: 14px;
  }

  .toggle-icon {
    margin-left: 12px;
  }
}
</style>
