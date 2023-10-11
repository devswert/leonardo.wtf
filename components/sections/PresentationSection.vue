<template>
  <div>
    <div
      class="relative overflow-hidden md:flex md:items-center md:justify-evenly"
    >
      <h1
        class="font-hornbill text-6xl z-10 my-28 sm:my-40 relative ml-5 sm:text-7xl md:text-8xl"
      >
        <span class="sm:hidden">{{ $t("presentation.shortHey") }}</span>
        <span class="hidden sm:inline">{{ $t("presentation.longHey") }}</span>
        <br />
        {{ $t("presentation.myName") }}
      </h1>
      <BurbleShape
        class="-top-14 -right-20 z-0 max-w-lg opacity-40 absolute w-full md:w-1/2 md:relative md:max-w-full md:opacity-100 md:right-0 md:top-0"
        :images="images"
        :random-order="true"
      ></BurbleShape>
    </div>
    <i18n-t
      keypath="presentation.summary"
      tag="p"
      scope="global"
      class="text-xl font-medium text-center mb-10 mx-5 max-w-3xl md:mx-auto"
    >
      <template v-slot:years> {{ years }} </template>
    </i18n-t>
    <div class="flex flex-col">
      <a
        :href="`/cv_${locale}.pdf`"
        class="flex flex-row items-center gap-8 border-2 border-brand-green rounded mx-auto px-4 py-2 bg-brand-green-light transition-all hover:scale-110"
      >
        <span class="text-lg">{{ $t("presentation.checkMyCVButton") }}</span>
        <ArrowIcon :size="20" class="animate-bounce-horizontal"></ArrowIcon>
      </a>
      <div class="flex flex-row gap-4 mx-auto my-8">
        <a
          :aria-label="$t('presentation.linksLabels.email')"
          href="email:leo.david.mm@gmail.com"
          class="p-3 rounded-full border-2 border-brand-green transition-all hover:bg-brand-green-light"
        >
          <EmailIcon :size="20"></EmailIcon>
        </a>
        <a
          :aria-label="$t('presentation.linksLabels.linkedin')"
          href="https://linkedin.com/in/leonardodavid"
          class="p-3 rounded-full border-2 border-brand-green transition-all hover:bg-brand-green-light"
        >
          <LinkedInIcon :size="20"></LinkedInIcon>
        </a>
        <a
          :aria-label="$t('presentation.linksLabels.github')"
          href="https://github.com/devswert"
          class="p-3 rounded-full border-2 border-brand-green transition-all hover:bg-brand-green-light"
        >
          <GitHubIcon :size="20"></GitHubIcon>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, computed } from "vue";

const { locale } = useI18n();
const images: Array<string> = [];
const years = computed(() => new Date().getFullYear() - 2013);

onBeforeMount(() => {
  for (let index = 1; index <= 5; index++) {
    images.push(`/images/p${index}.jpg`);
  }
});
</script>
