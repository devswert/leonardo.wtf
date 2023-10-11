<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 300" class="-mb-1">
    <path :fill="$props.color" fill-opacity="1" :d="upPath"></path>
  </svg>
  <slot></slot>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 300" class="-mt-1">
    <path
      :fill="$props.color"
      fill-opacity="1"
      :d="downPath"
      transform="rotate(-180 700 150)"
    ></path>
  </svg>
</template>

<script setup>
import { onMounted } from "vue";
import { GenerateClosedPath } from "~/src/utils/path-utils";

defineProps({
  color: {
    type: String,
    required: true,
  },
});

const upPath = ref("");
const downPath = ref("");

onMounted(() => {
  const defaultClosedPathOptions = {
    height: 320,
    width: 1440,
    segmentCount: 5,
    layerCount: 2,
    variance: 0.7,
  };

  upPath.value = GenerateClosedPath(defaultClosedPathOptions);
  downPath.value = GenerateClosedPath(defaultClosedPathOptions);
  console.log("Here");
});
</script>
