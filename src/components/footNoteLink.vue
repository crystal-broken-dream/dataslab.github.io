<template>
  <sup :id="'footNoteLink-' + num"
    ><a :href="'#footNote-' + num">{{ num }}</a></sup
  >
</template>

<script lang="ts" setup>
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
</style>
