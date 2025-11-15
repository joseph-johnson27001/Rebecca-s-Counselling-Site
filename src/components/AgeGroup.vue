<template>
  <div class="age-group">
    <img :src="image" alt="age" />
    <div class="age-content">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=600&q=80",
  },
});
</script>

<style scoped>
.age-group img {
  background: #f4f4f4;
}
</style>
