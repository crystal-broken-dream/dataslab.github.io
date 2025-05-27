<template>
  <a-typography-paragraph type="secondary" :id="'footNote-' + num">
    <span>{{ num }}.</span>
    <slot name="content"> </slot>
    <a class="link" :href="'#footNoteLink-' + num"><EnterOutlined /></a>
  </a-typography-paragraph>
</template>

<script lang="ts" setup>
import { EnterOutlined } from "@ant-design/icons-vue";
import { defineProps } from "vue";
defineProps({
  num: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
* {
  scroll-margin-top: 80px;
}
.link {
  opacity: 0;
}
.link:hover {
  opacity: unset;
}
</style>
