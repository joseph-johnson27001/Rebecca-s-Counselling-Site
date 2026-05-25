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
              <span class="toggle-icon">›</span>
            </button>
            <div v-if="expandedItems.has(index)" class="faq-answer fade-in">
              <div v-html="item.answer"></div>
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
    question: "How can I help prepare my child for therapy?",
    answer: `<p>Taking the step to seek support for your child can feel significant. It often comes with a mix of hope, uncertainty, and sometimes worry about how your child will respond. All of that is completely understandable.</p>

<h4>Helping Your Child Prepare</h4>
<p>How therapy is introduced matters. Children and young people tend to take their cues from you.</p>
<ul>
  <li>Keep the language simple and honest: "You’re going to meet someone whose job is to listen and help you make sense of things."</li>
  <li>Avoid presenting therapy as something that is "fixing" them.</li>
  <li>Emphasise choice and safety: they don’t have to share everything straight away.</li>
  <li>Let them know it’s okay to feel unsure, nervous, or even resistant.</li>
</ul>
<p>Resistance is not a problem to eliminate — it’s communication. It often reflects uncertainty, fear of the unknown, or a need for control.</p>

<h4>Preparing Yourself as a Parent</h4>
<ul>
  <li>Your role is vital, but it shifts slightly when your child enters therapy.</li>
  <li>Be ready to tolerate not knowing everything that is shared.</li>
  <li>Trust the process, even when progress feels slow or unclear.</li>
  <li>Hold steady boundaries around confidentiality.</li>
  <li>Notice your own emotional responses — therapy can bring things up for parents too.</li>
</ul>

<h4>Confidentiality &amp; Boundaries</h4>
<ul>
  <li>For therapy to feel safe, your child needs a sense of privacy.</li>
  <li>Sessions are confidential, with clear limits around safety.</li>
  <li>You will be informed of any concerns relating to risk or wellbeing.</li>
  <li>Regular check-ins can be arranged to support you as a parent, without breaching your child’s trust.</li>
</ul>

<h4>After the Session: Supporting Decompression</h4>
<p>What happens after therapy matters just as much as the session itself. Consider creating a small, predictable ritual after each session:</p>
<ul>
  <li>A quiet car journey with no pressure to talk</li>
  <li>A shared snack or drink</li>
  <li>A familiar activity (walk, music, drawing)</li>
</ul>
<p>This helps your child regulate and transition back into their day.</p>

<h4>Staying Connected (Without Interrogating)</h4>
<p>Curiosity builds connection. Interrogation shuts it down. Instead of: "What did you talk about?" try:</p>
<ul>
  <li>"How was it for you today?"</li>
  <li>"Anything that stayed with you from the session?"</li>
  <li>"Do you feel lighter, heavier, or about the same?"</li>
  <li>"Is there anything you’d like from me right now?"</li>
</ul>
<p>Let your child lead. Sometimes the most supportive response is simply being present.</p>`,
  },
  {
    question: "How can I prepare myself for starting therapy as an adult?",
    answer: `<p>Starting therapy as an adult can feel both relieving and exposing. It’s a space that invites honesty not perfection.</p>

<h4>Before You Begin</h4>
<ul>
  <li>You don’t need to have everything figured out.</li>
  <li>You can come with a clear goal, or just a sense that something isn’t sitting right.</li>
  <li>It’s okay if things feel messy or hard to put into words.</li>
  <li>There is no "right way" to do therapy.</li>
</ul>

<h4>What to Expect</h4>
<ul>
  <li>Sessions are typically 50 minutes.</li>
  <li>You set the pace — we go as fast or as gently as feels manageable.</li>
  <li>Healing is not linear; there will be movement, pauses, and revisiting.</li>
</ul>

<h4>First Session</h4>
<p>The first session is about getting a sense of each other.</p>
<ul>
  <li>You may be asked what brings you to therapy.</li>
  <li>We’ll explore what you’re hoping for, even if it’s not fully clear yet.</li>
  <li>You can ask questions about how I work.</li>
  <li>There is no pressure to go deep immediately.</li>
</ul>

<h4>Short-Term vs Long-Term Therapy</h4>
<ul>
  <li>Short-term counselling can focus on a specific issue or period of life.</li>
  <li>Long-term therapy allows for deeper exploration of patterns, relationships, and identity.</li>
  <li>We can think about this together — it doesn’t have to be decided upfront.</li>
</ul>

<h4>Confidentiality</h4>
<p>Your sessions are confidential, with clear and transparent limits relating to safety. This confidentiality is what allows for openness, honesty, and trust to develop.</p>`,
  },
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
  max-width: 1000px;
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
  gap: 16px;
}

.faq-item {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

/* Alternating warm pastel backgrounds */
.faq-item:nth-child(3n + 1) .faq-question {
  background: #faeee5;
}
.faq-item:nth-child(3n + 2) .faq-question {
  background: #e8ede6;
}
.faq-item:nth-child(3n + 3) .faq-question {
  background: #fae8df;
}

.faq-question {
  width: 100%;
  padding: 26px 28px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  transition: background 0.3s ease;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: var(--text, #2b2b2b);
  letter-spacing: 0.01em;
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
  color: var(--muted, #7b736b);
  transition: transform 0.3s ease;
  margin-left: 16px;
  transform: rotate(90deg);
}

.faq-question.active .toggle-icon {
  transform: rotate(270deg);
}

.faq-answer {
  padding: 24px 28px;
  color: var(--muted, #7b736b);
  line-height: 1.75;
  font-size: 15px;
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.faq-answer h4 {
  margin: 1.2rem 0 0.6rem;
  font-size: 1rem;
  color: var(--text-color, #333);
}

.faq-answer p {
  margin: 0.8rem 0;
}

.faq-answer ul {
  margin: 0.8rem 0 1rem 1.3rem;
  padding: 0;
  list-style: disc;
}

.faq-answer li {
  margin-bottom: 0.55rem;
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

  .section {
    padding: 20px 10px;
  }

  .faq-question {
    padding: 20px 18px;
    font-size: 15px;
  }

  .faq-answer {
    padding: 18px 18px 20px 18px;
    font-size: 14px;
  }

  .toggle-icon {
    margin-left: 12px;
  }
}
</style>
