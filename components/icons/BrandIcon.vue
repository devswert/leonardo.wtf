<template>
  <div>
    <GoIcon
      v-if="$props.icon === 'go'"
      :size="$props.size"
      :color="$props.color"
    />
    <JSIcon
      v-if="$props.icon === 'js'"
      :size="$props.size"
      :color="$props.color"
    />
    <TypeScriptIcon
      v-if="$props.icon === 'typescript'"
      :size="$props.size"
      :color="$props.color"
    />
    <PythonIcon
      v-if="$props.icon === 'python'"
      :size="$props.size"
      :color="$props.color"
    />
    <PHPIcon
      v-if="$props.icon === 'php'"
      :size="$props.size"
      :color="$props.color"
    />
    <DartIcon
      v-if="$props.icon === 'dart'"
      :size="$props.size"
      :color="$props.color"
    />
    <LaravelIcon
      v-if="$props.icon === 'laravel'"
      :size="$props.size"
      :color="$props.color"
    />
    <NestjsIcon
      v-if="$props.icon === 'nestjs'"
      :size="$props.size"
      :color="$props.color"
    />
    <FlutterIcon
      v-if="$props.icon === 'flutter'"
      :size="$props.size"
      :color="$props.color"
    />
    <TailwindIcon
      v-if="$props.icon === 'tailwind'"
      :size="$props.size"
      :color="$props.color"
    />
    <DjangoIcon
      v-if="$props.icon === 'django'"
      :size="$props.size"
      :color="$props.color"
    />
    <MongoDBIcon
      v-if="$props.icon === 'mongo'"
      :size="$props.size"
      :color="$props.color"
    />
    <NodeJsIcon
      v-if="$props.icon === 'node'"
      :size="$props.size"
      :color="$props.color"
    />
    <VueIcon
      v-if="$props.icon === 'vue'"
      :size="$props.size"
      :color="$props.color"
    />
    <AngularIcon
      v-if="$props.icon === 'angular'"
      :size="$props.size"
      :color="$props.color"
    />
    <RedisIcon
      v-if="$props.icon === 'redis'"
      :size="$props.size"
      :color="$props.color"
    />
    <PostgreSQLIcon
      v-if="$props.icon === 'postgresql'"
      :size="$props.size"
      :color="$props.color"
    />
    <MySQLIcon
      v-if="$props.icon === 'mysql'"
      :size="$props.size"
      :color="$props.color"
    />
    <KafkaIcon
      v-if="$props.icon === 'kafka'"
      :size="$props.size"
      :color="$props.color"
    />
    <DockerIcon
      v-if="$props.icon === 'docker'"
      :size="$props.size"
      :color="$props.color"
    />
    <FigmaIcon
      v-if="$props.icon === 'figma'"
      :size="$props.size"
      :color="$props.color"
    />
    <KubernetesIcon
      v-if="$props.icon === 'k8s'"
      :size="$props.size"
      :color="$props.color"
    />
    <AWSIcon
      v-if="$props.icon === 'aws'"
      :size="$props.size"
      :color="$props.color"
    />
    <NginxIcon
      v-if="$props.icon === 'nginx'"
      :size="$props.size"
      :color="$props.color"
    />
    <WordPressIcon
      v-if="$props.icon === 'wordpress'"
      :size="$props.size"
      :color="$props.color"
    />
    <SCSSIcon
      v-if="$props.icon === 'scss'"
      :size="$props.size"
      :color="$props.color"
    />
    <CSSIcon
      v-if="$props.icon === 'css'"
      :size="$props.size"
      :color="$props.color"
    />
    <LinuxIcon
      v-if="$props.icon === 'linux'"
      :size="$props.size"
      :color="$props.color"
    />
    <CodeigniterIcon
      v-if="$props.icon === 'codeigniter'"
      :size="$props.size"
      :color="$props.color"
    />
    <ShopifyIcon
      v-if="$props.icon === 'shopify'"
      :size="$props.size"
      :color="$props.color"
    />
    <FirebaseIcon
      v-if="$props.icon === 'firebase'"
      :size="$props.size"
      :color="$props.color"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "#306564",
  },
  size: {
    type: Number,
    default: 100,
  },
});
</script>
