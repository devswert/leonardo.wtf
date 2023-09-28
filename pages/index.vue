<template>
  <div>
    <!-- Header Section -->
    <div class="relative overflow-hidden">
      <svg
        id="blobSvg"
        class="-top-20 -right-32 z-0 max-w-lg opacity-40 absolute"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="header-shape">
            <path id="blob" :d="pathState" fill="#d1d8e0"></path>
          </clipPath>
        </defs>
        <image
          id="first-blob-image"
          class="transition-opacity duration-700 mx-auto"
          :class="isThisImageVisible('first')"
          width="100%"
          clip-path="url(#header-shape)"
          href="/images/p10.jpg"
        ></image>
        <image
          id="second-blob-image"
          class="transition-opacity duration-700 mx-auto"
          :class="isThisImageVisible('second')"
          width="100%"
          clip-path="url(#header-shape)"
          href="/images/p15.jpg"
          preserveAspectRatio="none"
        ></image>
      </svg>
      <h1 class="font-hornbill text-6xl z-10 my-28 relative ml-5">
        Hey!
        <br />
        I'm Leo
      </h1>
    </div>
    <p class="text-lg font-medium text-center my-8 mx-5">
      I'm working in tech and building products/services on internet, more in
      the backend side, but I enjoy playing with frontend, infrastructure, even
      hybrid apps with Flutter
    </p>
    <button @click="toggleShape">Toggle</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as blobshape from "blobshape";
import * as dynamics from "dynamics.js";

const pathState = ref("");
const currentImage = ref("first");
const blobShapeConfig = {
  size: 450,
  edges: 15,
};

function isThisImageVisible(imageKey) {
  if (imageKey === currentImage.value) {
    return "opacity-100";
  }

  return "opacity-0";
}

function toggleShape() {
  const newShape = blobshape(blobShapeConfig);
  const element = document.getElementById("blob");

  currentImage.value = currentImage.value === "first" ? "second" : "first";

  if (!element) return;
  const config = {
    type: dynamics.spring,
    frequency: 80,
    friction: 200,
    duration: 600,
  };
  dynamics.animate(element, { d: newShape.path }, config);
  // dynamics.animate(imageElement, {href: nextImage}, config)
  setTimeout(() => {
    pathState.value = newShape.path;
    // image.value = nextImage
  }, 700);
}

onMounted(() => {
  const newShape = blobshape(blobShapeConfig);
  pathState.value = newShape.path;
});
</script>
