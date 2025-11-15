<template>
  <section class="section" style="flex-direction: column">
    <h2 style="font-family: 'Playfair Display', serif">Contact</h2>
    <p style="color: var(--muted)">
      If you'd like to enquire, please email or use the form below.
    </p>

    <form
      style="
        max-width: 640px;
        margin-top: 18px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      "
      @submit.prevent
    >
      <input
        placeholder="Your name"
        style="padding: 10px; border: 1px solid #ddd; border-radius: 6px"
      />
      <input
        placeholder="Email"
        style="padding: 10px; border: 1px solid #ddd; border-radius: 6px"
      />
      <textarea
        placeholder="Message"
        rows="6"
        style="padding: 10px; border: 1px solid #ddd; border-radius: 6px"
      ></textarea>
      <button class="btn" type="submit">Send</button>
    </form>
  </section>
</template>

<script setup></script>
