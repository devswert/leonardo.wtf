<template>
  <div class="bg-brand-green text-brand-light mt-24 py-24 px-5 md:mx-auto">
    <h2 class="font-hornbill text-4xl text-center mb-5">
      • <br />
      {{ $t("aboutMe.title") }}
    </h2>
    <i18n-t
      keypath="aboutMe.firstParagraph"
      tag="p"
      class="mb-4"
      scope="global"
    >
      <template v-slot:years> {{ years }} </template>
    </i18n-t>
    <p class="mb-4">{{ $t("aboutMe.secondParagraph") }}</p>
    <p class="mb-4">{{ $t("aboutMe.someTools") }}</p>
    <div class="flex flex-wrap gap-4 justify-center">
      <GoIcon :size="50" />
      <JSIcon :size="50" />
      <TypeScriptIcon :size="50" />
      <PythonIcon :size="50" />
      <PHPIcon :size="50" />
      <DartIcon :size="50" />
      <LaravelIcon :size="50" />
      <NestjsIcon :size="50" />
      <FlutterIcon :size="50" />
      <CSSIcon :size="50" />
      <TailwindIcon :size="50" />
      <DjangoIcon :size="50" />
      <MongoDBIcon :size="50" />
      <NodeJsIcon :size="50" />
      <VueIcon :size="50" />
      <AngularIcon :size="50" />
      <RedisIcon :size="50" />
      <PostgreSQLIcon :size="50" />
      <MySQLIcon :size="50" />
      <KafkaIcon :size="50" />
      <DockerIcon :size="50" />
      <LinuxIcon :size="50" />
      <FigmaIcon :size="50" />
      <KubernetesIcon :size="50" />
      <AWSIcon :size="50" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const years = computed(() => new Date().getFullYear() - 2013);
</script>
