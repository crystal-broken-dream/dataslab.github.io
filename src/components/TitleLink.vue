<template>
  <div :id="id" class="Title">
    <a-typography-title>
      <slot name="title"></slot>
      <a-typography-link :level="level" :href="'#' + id" target="_self">
        <span class="link" style="font-size: 32px"> #</span>
      </a-typography-link>
    </a-typography-title>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  id: {
    type: String,
  },
  level: {
    type: Number,
    default: 1,
  },
});
</script>

<style scoped>
.Title {
  scroll-margin-top: 64px;
}
.link {
  opacity: 0;
}
.link:hover {
  opacity: unset;
}
</style>
