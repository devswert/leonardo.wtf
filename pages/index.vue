<template>
  <div>
    <!-- Presentation -->
    <PresentationSection
      class="container max-w-7xl mx-auto"
    ></PresentationSection>

    <!-- About Me -->
    <WaveContainer :color="'#306564'">
      <div class="bg-brand-green">
        <AboutMeSection class="container max-w-5xl mx-auto"></AboutMeSection>
      </div>
    </WaveContainer>

    <!-- Professional Experience -->
    <ProfessionalExperienceSection
      class="container max-w-5xl mx-auto"
    ></ProfessionalExperienceSection>

    <!-- Education -->
    <WaveContainer :color="'#306564'">
      <div class="bg-brand-green">
        <EducationSection
          class="container max-w-5xl mx-auto"
        ></EducationSection>
      </div>
    </WaveContainer>

    <!-- No Tech Things -->
    <NoTechThingsSection
      class="container max-w-7xl mx-auto"
    ></NoTechThingsSection>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {});
</script>
