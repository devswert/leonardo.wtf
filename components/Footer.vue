<template>
  <div
    class="flex flex-row gap-2 w-full justify-center items-center pt-20 pb-10"
  >
    <p>Made with</p>
    <HeartIcon :size="20" :color="'#ED8733'"></HeartIcon>
    <p>Check the</p>
    <a
      target="_blank"
      href="https://github.com/devswert/leonardo.wtf"
      aria-label="Check the code source"
      class="flex flex-row gap-1 items-center underline"
    >
      <GitHubIcon :size="20"></GitHubIcon>
      <p>code source</p>
    </a>
  </div>
</template>
