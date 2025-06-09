<template>
  <a-layout has-sider>
    <a-layout :style="{ padding: '0 216px', background: '#fff' }">
      <TitleLink id="Title-1">
        <template #title>Data Selection Strategies</template>
      </TitleLink>
      <a-typography>
        <a-typography-paragraph
          >Generally speaking, strategies of data selection can be grouped into
          two categories based on their main optimization goals, i.e.,
          effectiveness and efficiency.</a-typography-paragraph
        >
        <a-row :gutter="[16, 24]">
          <a-col span="12">
            <LinkCard href="/data-selection-strategies/for-efficient-training">
              <template #title>For Efficient Training</template>
              <template #content>self</template>
            </LinkCard>
          </a-col>
          <a-col span="12">
            <LinkCard href="/data-selection-strategies/for-effective-training">
              <template #title>For Effective Training</template>
              <template #content>blank</template>
            </LinkCard>
          </a-col>
        </a-row>
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
            title: 'Data Selection Strategies',
          },
        ]"
      ></a-anchor>
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts" setup>
import TitleLink from "@/components/TitleLink.vue";
import LinkCard from "@/components/LinkCard.vue";

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
