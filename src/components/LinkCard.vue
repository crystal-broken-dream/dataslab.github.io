<template>
  <a-card hoverable>
    <a-typography-link @click="router.push(href as string)" :target="target">
      <slot name="title"></slot>
    </a-typography-link>
    <a-divider />
    <a-typography-paragraph>
      <slot name="content"></slot>
    </a-typography-paragraph>
  </a-card>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({
  href: {
    type: String,
  },
  target: {
    type: String,
    default: "_self",
  },
});
</script>

<style scoped></style>
