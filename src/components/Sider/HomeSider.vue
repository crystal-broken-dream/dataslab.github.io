<template>
  <a-layout-sider :style="[{ left: 0 }, siderStyle]" theme="light">
    <b>Home</b> <br /><br />
    <a-anchor :affix="false" :items="[]"></a-anchor>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const siderStyle = ref({
  overflow: "auto",
  height: "100vh",
  width: "200px",
  position: "fixed",
  top: "64px",
  bottom: 0,
  padding: "16px",
});
</script>

<style scoped></style>
