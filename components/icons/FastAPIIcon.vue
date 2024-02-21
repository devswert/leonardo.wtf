<template>
  <svg
    fill="none"
    :width="`${$props.size}px`"
    :height="`${$props.size}px`"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 160 160"
  >
    <circle cx="77" cy="77" fill="#05998b" r="77" />
    <path
      d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z"
      fill="#fff"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 100,
  },
});
</script>
