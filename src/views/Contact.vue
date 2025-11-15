<template>
  <section class="contact-hero">
    <div class="contact-wrapper">
      <h2 class="contact-title">Contact</h2>
      <p class="contact-desc">
        If you'd like to enquire, please email or use the form below.
      </p>

      <form class="contact-form" @submit.prevent>
        <input placeholder="Your name" class="input-field" />
        <input placeholder="Email" class="input-field" />
        <textarea
          placeholder="Message"
          rows="20"
          class="input-field"
        ></textarea>
        <button class="btn" type="submit">Send</button>
      </form>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contact-hero {
  display: flex;
  justify-content: center;
  padding: 36px;
}
.contact-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
}
.contact-title {
  font-family: "Playfair Display", serif;
  font-size: 24px;
  color: var(--accent);
  margin: 0 0 16px;
}
.contact-desc {
  color: var(--muted);
  margin-bottom: 16px;
}
.contact-form {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.input-field {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.contact-form .btn {
  align-self: flex-end;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
