<template>
  <a-breadcrumb :style="{ margin: '16px 216px' }">
    <a-breadcrumb-item v-for="(route, index) in routes" :key="index">
      <a
        v-if="index !== routes.length - 1"
        @click="router.push('/' + routes.slice(0, index + 1).join('/'))"
      >
        {{ map.get(route) || route }}
      </a>
      <span v-if="index === routes.length - 1">
        {{ map.get(route) || route }}
      </span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const path = ref("");
const routes = ref([""]);

router.afterEach((to) => {
  path.value = to.path;
  routes.value = path.value.split("/").filter((str) => str !== "");
});

const map: Map<string, string> = new Map<string, string>([
  ["", "home"],
  ["getting-started", "getting started"],
  ["examples", "examples"],
  ["introduction", "introduction"],
  ["data-selection-strategies", "data selection strategies"],
  ["for-efficient-training", "for efficient training"],
  ["demo", "demo"],
]);
</script>
