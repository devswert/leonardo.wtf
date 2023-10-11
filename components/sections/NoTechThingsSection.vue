<template>
  <div class="text-brand-green px-5 relative">
    <h2 class="font-hornbill text-4xl text-center mb-5">
      • <br />
      {{ $t("noTechThings.title") }}
    </h2>
    <div class="md:flex md:flex-row md:items-center">
      <BurbleShape
        :images="images"
        :size="500"
        :random-order="true"
        class="top-48 -left-20 max-w-xl opacity-40 absolute w-full -z-10 md:opacity-100 md:w-2/3 md:relative md:top-0 md:left-0"
      ></BurbleShape>
      <p class="font-sora z-10 md:w-1/3 md:text-right">
        {{ $t("noTechThings.firstParagraph") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";

const images: Array<string> = [];

onBeforeMount(() => {
  for (let index = 6; index <= 20; index++) {
    images.push(`/images/p${index}.jpg`);
  }
});
</script>
