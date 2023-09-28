<template>
  <div>
    <!-- Header Section -->
    <div class="relative overflow-hidden">
      <BurbleShape :images="images"></BurbleShape>
      <h1 class="font-hornbill text-6xl z-10 my-32 relative ml-5">
        Hey!
        <br />
        I'm Leo
      </h1>
    </div>
    <p class="text-xl font-medium text-center mb-10 mx-5">
      I'm working in tech and building products/services on internet, more in
      the backend side, but I enjoy playing with frontend, infrastructure, even
      hybrid apps with Flutter
    </p>
    <div class="flex flex-col">
      <a
        href="#"
        class="flex flex-row items-center gap-8 border-2 border-brand-green rounded mx-auto px-4 py-2 bg-brand-green-light transition-all hover:scale-110"
      >
        <span class="text-lg">Check my CV</span>
        <ArrowIcon :size="20" class="animate-bounce-horizontal"></ArrowIcon>
      </a>
      <div class="flex flex-row gap-4 mx-auto my-4">
        <a
          href=""
          class="p-3 rounded-full border-2 border-brand-green transition-all hover:bg-brand-green-light"
        >
          <EmailIcon :size="20"></EmailIcon>
        </a>
        <a
          href=""
          class="p-3 rounded-full border-2 border-brand-green transition-all hover:bg-brand-green-light"
        >
          <LinkedInIcon :size="20"></LinkedInIcon>
        </a>
        <a
          href=""
          class="p-3 rounded-full border-2 border-brand-green transition-all hover:bg-brand-green-light"
        >
          <GitHubIcon :size="20"></GitHubIcon>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeMount } from "vue";

const images: Array<string> = [];

onBeforeMount(() => {
  for (let index = 1; index <= 20; index++) {
    images.push(`/images/p${index}.jpg`);
  }
});

onMounted(() => {});
</script>
