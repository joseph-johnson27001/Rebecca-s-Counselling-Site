<template>
  <section class="section">
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
          rows="10"
          class="input-field"
        ></textarea>
        <button class="btn" type="submit">Send</button>
      </form>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contact-wrapper {
  display: flex;
  flex-direction: column;
}
.contact-title {
  font-family: "Playfair Display", serif;
}
.contact-desc {
  color: var(--muted);
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
}
</style>
