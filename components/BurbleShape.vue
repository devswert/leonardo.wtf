<template>
  <div>
    <svg
      id="svg-container"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath :id="imageShapeId">
          <path :id="blobPathId" :d="pathState" fill="#306564"></path>
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
        :clip-path="`url(#${imageShapeId})`"
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
        :clip-path="`url(#${imageShapeId})`"
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
  seed: 1,
};
const blobPathId = ref("blob-path-");
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
  size: {
    type: Number,
    default: 500,
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

const imageShapeId = computed(() => {
  return `image-shape-${blobPathId.value}`;
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

  blobPathId.value = `blob-path-${getRandomNumber()}`;
  blobShapeConfig.size = props.size;
  blobShapeConfig.seed = getRandomNumber();
  pathState.value = blobshape(blobShapeConfig).path;
  if (props.images.length === 0) {
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
  const blobPath = document.getElementById(blobPathId.value);
  blobShapeConfig.size = props.size;
  blobShapeConfig.seed = getRandomNumber();
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

function getRandomNumber() {
  const numbers = "123456789".split("");
  let currentIndex = numbers.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [numbers[currentIndex], numbers[randomIndex]] = [
      numbers[randomIndex],
      numbers[currentIndex],
    ];
  }

  return Number.parseInt(numbers.join(""));
}
</script>
