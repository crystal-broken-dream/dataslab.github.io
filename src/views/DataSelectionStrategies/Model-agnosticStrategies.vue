<template>
  <a-layout has-sider>
    <a-layout :style="{ padding: '0 216px', background: '#fff' }">
      <a-typography
        ><TitleLink id="Title-1">
          <template #title>Model-agnostic strategies</template>
        </TitleLink>
        <a-typography-paragraph
          >Model-agnostic strategies represent a class of data selection methods
          that are independent of any specific model architecture or training
          dynamics. Instead, these strategies rely solely on the geometric
          properties of the data distribution within the feature space. As a
          result,all practical model agnostic approaches are fundamentally
          <b>geometry-based</b>.
        </a-typography-paragraph>
        <a-typography-paragraph>
          Geometry-based strategies(symbol:●)aim to select a representative and
          diverse subset of data instances from the entire data set D, such that
          the selected subset S preserves the inherent structure and
          distribution of the original dataset, as shown in Figure1. The
          underlying idea is that, by covering the data space as uniformly as
          possible, the coreset S enables the model to generalize similarly to
          training on the full set. Since the geometric properties of the data
          distribution remain constant throughout the model training process,
          these strategies prefer a single-pass selection.As illustrated in
          Figure2, geometry-based strategies can be further categorized into
          four main type, each characterized by a distinct way of representing
          the feature space to ensure coverage and diversity within the selected
          subset.
        </a-typography-paragraph>
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
            title: 'Model-agnostic strategies',
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
