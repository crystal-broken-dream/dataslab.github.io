<template>
  <a-layout has-sider>
    <a-layout :style="{ margin: '0 200px', background: '#fff' }">
      <a-typography>
        <TitleLink id="Title-1">
          <template #title> The python library for data valuation </template>
        </TitleLink>

        <a-typography-paragraph>
          pyDVL collects algorithms for data valuation and influence function
          computation. For the full list see
          <a-typography-link href="/getting-started/methods" target="_blank">
            Methods
          </a-typography-link>
          . It supports out-of-core and distributed computation, as well as
          local or distributed caching of results.
        </a-typography-paragraph>
        <a-row :gutter="[16, 24]">
          <a-col span="12">
            <LinkCard href="/getting-started">
              <template #title>Getting started</template>
              <template #content>
                Steps to install pyDVL and its requirements
              </template>
            </LinkCard>
          </a-col>
          <a-col span="12">
            <LinkCard href="/examples">
              <template #title>Example gallery</template>
              <template #content>
                Notebooks with worked-out examples of data valuation and
                influence functions
              </template>
            </LinkCard>
          </a-col>

          <a-col span="12">
            <LinkCard href="/demo">
              <template #title>Demo</template>
              <template #content> 所有的组件都在这里展示 </template>
            </LinkCard>
          </a-col>
          <a-col span="12"> </a-col>

          <a-col span="12"></a-col>
          <a-col span="12"></a-col>

          <a-col span="12"></a-col>
          <a-col span="12"></a-col>
        </a-row>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </a-typography>
    </a-layout>

    <HomeSider />

    <a-layout-sider :style="[{ right: 0 }, siderStyle]" theme="light">
      <b>Table of contents </b> <br /><br />
      <a-anchor
        :affix="false"
        target-offset="64"
        :items="[
          {
            href: '#Title-1',
            title: 'The python library for data valuation',
          },
        ]"
      ></a-anchor>
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts" setup>
import LinkCard from "@/components/LinkCard.vue";
import TitleLink from "@/components/TitleLink.vue";
import HomeSider from "@/components/Sider/HomeSider.vue";
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
