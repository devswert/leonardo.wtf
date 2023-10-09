<template>
  <div
    class="flex flex-row gap-2 w-full justify-center items-center pt-20 pb-10"
  >
    <i18n-t
      keypath="footer.message"
      tag="div"
      scope="global"
      class="flex flex-row gap-2 justify-center items-center"
    >
      <template v-slot:coded>
        <a
          target="_blank"
          href="https://github.com/devswert/leonardo.wtf"
          aria-label="Check the code source"
          class="flex flex-row items-center underline"
        >
          <p>coded</p>
        </a>
      </template>
      <template v-slot:love>
        <HeartIcon :size="20" :color="'#ED8733'"></HeartIcon>
      </template>
    </i18n-t>
    <span>•</span>
    <a
      href="#"
      v-for="locale in availableLocales"
      :key="locale.code"
      @click.prevent.stop="setLocale(locale.code)"
      >{{ locale.name }}</a
    >
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
