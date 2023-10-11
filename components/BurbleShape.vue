<template>
  <div>
    <svg id="svg-container" viewBox="0 0 512 512">
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
import { svgPath as blobsSvgPath } from "blobs/v2";
import anime from "animejs";

// Local variables
let initialized = false;
let currentPosition = 1;
const defaultOptionsSVGPath = {
  extraPoints: 8,
  randomness: 4,
  size: 500,
};
let images: Array<string> = [];

// State
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
  randomOrder: {
    type: Boolean,
    default: false,
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
  pathState.value = generateSVGPath();
  if (props.images.length === 0) {
    return;
  }

  if (props.images.length === 1) {
    imageContainer1.value = props.images[0];
    imageContainer2.value = props.images[0];
    setInterval(changeShape, 3000);
    return;
  }

  images = props.images;
  if (props.randomOrder) {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
  }

  imageContainer1.value = images[0];
  imageContainer2.value = images[1];

  setInterval(() => {
    changeShape();
    flipContainers();
    setTimeout(updateNextImage, 700);
  }, 3000);

  initialized = true;
}

function generateSVGPath() {
  return blobsSvgPath({ ...defaultOptionsSVGPath, seed: getRandomNumber() });
}

function changeShape() {
  const svgPath = generateSVGPath();

  anime({
    targets: `#${blobPathId.value}`,
    easing: "easeInOutCubic",
    duration: 600,
    d: svgPath,
  });

  setTimeout(() => {
    pathState.value = svgPath;
  }, 650);
}

function flipContainers() {
  currentContainer.value = currentContainer.value === "C1" ? "C2" : "C1";
}

function updateNextImage() {
  const qty = images.length;
  currentPosition = currentPosition + 1 === qty ? 0 : currentPosition + 1;
  if (currentContainer.value === "C1") {
    imageContainer2.value = images[currentPosition];
  } else {
    imageContainer1.value = images[currentPosition];
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
