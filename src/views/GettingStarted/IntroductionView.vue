<template>
  <a-layout has-sider>
    <a-layout :style="{ background: '#fff' }"> </a-layout>

    <a-layout-sider :style="[{ right: 0 }, siderStyle]" theme="light">
      <b>Table of contents </b> <br /><br />
      <a-anchor :affix="false" target-offset="64" :items="[]"></a-anchor>
    </a-layout-sider>
  </a-layout>
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
