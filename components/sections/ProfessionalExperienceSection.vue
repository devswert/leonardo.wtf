<template>
  <div class="text-brand-green pt-24 px-5">
    <h2 class="font-hornbill text-4xl text-center mb-5">
      • <br />
      {{ $t("experiences.professionalTitle") }}
    </h2>

    <JobBox
      v-for="job in jobs"
      :key="job.company"
      :company="job.company"
      :position="job.position"
      :time-frame="job.timeFrame"
      :description="job.description"
      :is-active="job.isActive"
      :icons="job.tools"
      @click="job.isActive = !job.isActive"
    />

    <h2 class="font-hornbill text-4xl text-center mt-12">
      • <br />
      {{ $t("experiences.sideProjectsTitle") }}
    </h2>

    <JobBox
      v-for="sideprojet in sideprojets"
      :key="sideprojet.company"
      :company="sideprojet.company"
      :description-always-visible="true"
      :position="sideprojet.date"
      :description="sideprojet.description"
      :icons="sideprojet.tools"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { messages, locale } = useI18n();
const experiencesMessages = messages.value[locale.value].experiences;

const jobs = ref(mapJobsTranslationIntoArray(experiencesMessages.jobs));
const sideprojets = ref(
  mapJobsTranslationIntoArray(experiencesMessages.sideProjets),
);

function mapJobsTranslationIntoArray(jobs: Object) {
  return Object.entries(jobs).map((job) => ({
    ...job[1],
    tools: Object.values(job[1].tools),
    isActive: false,
  }));
}
</script>
