<template>
  <a-layout has-sider>
    <a-layout :style="{ background: '#fff' }">
      <router-view />
    </a-layout>

    <a-layout-sider :style="[{ left: 0 }, siderStyle]" theme="light">
      <b>Data Selection Strategies</b> <br /><br />
      <a-anchor
        :affix="false"
        :items="[
          {
            key: 'ForEfficientTraining',
            href: '/data-selection-strategies/for-efficient-training',
            title: 'For Efficient Training',
            children: [
              {
                key: 'ModelAgnosticStrategies',
                href: '/data-selection-strategies/for-efficient-training/model-agnostic-strategies',
                title: 'Model-agnostic strategies',
              },
              {
                key: 'ModelAwareStrategies',
                href: '/data-selection-strategies/for-efficient-training/model-aware-strategies',
                title: 'Model-aware strategies',
              },
            ],
          },
          {
            key: 'ForEfficientTraining',
            href: '/data-selection-strategies/for-effective-training',
            title: 'For Efficient Training',
            children: [
              {
                key: 'TaskAgnosticBasedStrategies',
                href: '/data-selection-strategies/for-effective-training/task-agnostic-based-strategies',
                title: 'Task-agnostic based strategies',
              },
              {
                key: 'TaskAwareBasedStrategies',
                href: '/data-selection-strategies/for-effective-training/task-aware-based-strategies',
                title: 'Task-aware based strategies',
              },
            ],
          },
        ]"
      ></a-anchor>
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
