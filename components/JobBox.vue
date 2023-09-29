<template>
  <div
    class="cursor-pointer my-12 transition-all duration-300 text-brand-green"
    :class="{
      'bg-brand-green text-brand-light rounded px-3 py-6': $props.isActive,
    }"
  >
    <div class="flex flex-row items-center justify-between">
      <h3 class="font-sora font-extrabold text-2xl">{{ props.company }}</h3>
      <ArrowIcon
        :size="24"
        :color="arrowColor"
        :class="{
          'rotate-90': !$props.isActive,
          '-rotate-90': $props.isActive,
        }"
      />
    </div>
    <p class="font-sora">{{ props.position }}</p>
    <p v-if="props.timeFrame != ''" class="font-sora font-extralight text-xs">
      {{ props.timeFrame }}
    </p>
    <p
      v-if="props.isActive || props.descriptionAlwaysVisible"
      class="font-sora pt-6"
    >
      {{ props.description }}
    </p>
    <div v-if="props.icons.length > 0" class="flex flex-wrap gap-4 mt-3">
      <BrandIcon
        v-for="icon in props.icons"
        :key="icon"
        :icon="icon"
        :size="30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const arrowColor = computed(() => {
  return props.isActive ? "#FDF6EC" : "#306564";
});

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timeFrame: {
    type: String,
    required: false,
    default: "",
  },
  icons: {
    type: Array<string>,
    required: false,
    default: [],
  },
  descriptionAlwaysVisible: {
    type: Boolean,
    default: false,
  },
});
</script>
