<template>
  <div>
    <svg
      id="svg-container"
      class="-top-20 -right-32 z-0 max-w-lg opacity-40 absolute"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="image-shape">
          <path id="blob-path" :d="pathState" fill="#306564"></path>
        </clipPath>
      </defs>
      <image
        v-show="canDisplayImages"
        class="transition-opacity duration-700 mx-auto"
        :class="{
          'opacity-100': isFirstContainerVisible,
          'opacity-0': !isFirstContainerVisible,
        }"
        width="100%"
        clip-path="url(#image-shape)"
        :href="imageContainer1"
      ></image>
      <image
        v-show="canDisplayImages"
        class="transition-opacity duration-700 mx-auto"
        :class="{
          'opacity-100': isSecondContainerVisible,
          'opacity-0': !isSecondContainerVisible,
        }"
        width="100%"
        clip-path="url(#image-shape)"
        :href="imageContainer2"
      ></image>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import * as blobshape from "blobshape";
import * as dynamics from "dynamics.js";

// Local variables and state
let initialized = false;
let currentPosition = 1;
const blobShapeConfig = {
  size: 500,
  edges: 15,
};
const currentContainer = ref("C1");
const imageContainer1 = ref("");
const imageContainer2 = ref("");
const pathState = ref("");

// Properties declaration
const props = defineProps({
  images: {
    type: Array<string>,
    required: true,
  },
});

// Computed methods
const canDisplayImages = computed(() => {
  return props.images.length > 0;
});

const isFirstContainerVisible = computed(() => {
  return currentContainer.value === "C1";
});

const isSecondContainerVisible = computed(() => {
  return currentContainer.value === "C2";
});

// onMounted component event
onMounted(() => {
  setup();
});

// Misc methods
function setup() {
  if (initialized) {
    return;
  }

  pathState.value = blobshape(blobShapeConfig).path;
  if (props.images.length == 0) {
    return;
  }

  if (props.images.length === 1) {
    imageContainer1.value = props.images[0];
    imageContainer2.value = props.images[0];
    setInterval(changeShape, 3000);
    return;
  }

  imageContainer1.value = props.images[0];
  imageContainer2.value = props.images[1];

  setInterval(() => {
    changeShape();
    flipContainers();
    setTimeout(updateNextImage, 700);
  }, 3000);
  initialized = true;
}

function changeShape() {
  const blobPath = document.getElementById("blob-path");
  const newShape = blobshape(blobShapeConfig);
  dynamics.animate(
    blobPath,
    { d: newShape.path },
    {
      type: dynamics.spring,
      frequency: 80,
      friction: 200,
      duration: 600,
    },
  );
  setTimeout(() => {
    pathState.value = newShape.path;
  }, 650);
}

function flipContainers() {
  currentContainer.value = currentContainer.value === "C1" ? "C2" : "C1";
}

function updateNextImage() {
  const qty = props.images.length;
  currentPosition = currentPosition + 1 === qty ? 0 : currentPosition + 1;
  if (currentContainer.value === "C1") {
    imageContainer2.value = props.images[currentPosition];
  } else {
    imageContainer1.value = props.images[currentPosition];
  }
}
</script>