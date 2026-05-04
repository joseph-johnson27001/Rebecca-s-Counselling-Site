<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="spinner"></div>
  </div>
</template>

<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e0e0e0;
  border-top-color: #7a936f;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
</style>
