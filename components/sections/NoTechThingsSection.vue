<template>
  <div class="text-brand-green pt-24 px-5 relative">
    <h2 class="font-hornbill text-4xl text-center mb-5">
      • <br />
      No Tech Things
    </h2>
    <div class="md:flex md:flex-row md:items-center">
      <BurbleShape
        :images="images"
        :size="500"
        class="-bottom-20 -left-20 max-w-xl opacity-40 absolute w-full -z-10 md:opacity-100 md:w-2/3 md:relative md:bottom-0 md:left-0"
      ></BurbleShape>
      <p class="font-sora z-10 md:w-1/3 md:text-right">
        I live with my partner, my little princess (my daughter), 2 bunnies, and
        2 cockatiels. It's a beautiful family, even if it sometimes looks like a
        zoo. For some years, I volunteered in a pet rescue ONG; spending time
        helping animals was something meaningful, and I hope to help again in
        another organization. I love a good cup of coffee with a V60 Dripper and
        tasty beans. Sometimes, I play cards with friends, like Magic or Mitos y
        Leyendas, a Chilean card game. With my partner, we play Overcooked 2
        <b>a lot</b>. We love that game.
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
