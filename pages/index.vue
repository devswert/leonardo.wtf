<template>
  <div>
    <!-- Presentation -->
    <HeaderSection class="container max-w-7xl mx-auto"></HeaderSection>

    <!-- About Me -->
    <div class="bg-brand-green">
      <AboutMeSection class="container max-w-7xl mx-auto"></AboutMeSection>
    </div>

    <!-- Professional Experience -->
    <ProfessionalExperienceSection
      class="container max-w-7xl mx-auto"
    ></ProfessionalExperienceSection>

    <!-- Education -->
    <div class="bg-brand-green">
      <EducationSection class="container max-w-7xl mx-auto"></EducationSection>
    </div>

    <!-- No Tech Things -->
    <NoTechThingsSection
      class="container max-w-7xl mx-auto"
    ></NoTechThingsSection>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {});
</script>
