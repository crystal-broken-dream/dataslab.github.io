<template>
  <a-layout has-sider>
    <a-layout :style="{ padding: '0 216px', background: '#fff' }">
      <a-typography
        ><TitleLink id="Title-1">
          <template #title>Task-aware based strategies</template>
        </TitleLink>
      </a-typography>
    </a-layout>

    <a-layout-sider :style="[{ right: 0 }, siderStyle]" theme="light">
      <b>Table of contents </b> <br /><br />
      <a-anchor
        :affix="false"
        target-offset="64"
        :items="[
          {
            href: '#Title-1',
            title: 'Task-aware based strategies',
          },
        ]"
      ></a-anchor>
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts" setup>
import TitleLink from "@/components/TitleLink.vue";

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
