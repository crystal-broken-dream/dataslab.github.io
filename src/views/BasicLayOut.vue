<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/"
          ><router-link to="/">home</router-link></a-menu-item
        >
        <a-menu-item key="/getting-started">
          <router-link to="/getting-started"> Getting Started </router-link>
        </a-menu-item>
        <a-menu-item key="/examples">
          <router-link to="/examples">Examples</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout-content :style="{ marginTop: '64px' }">
      <LinkBreadcrumb />
      <div :style="{ background: 'white', minHeight: '500px' }">
        <router-view />
      </div>
      <a-back-top />
    </a-layout-content>

    <a-layout-footer :style="{ textAlign: 'center', zIndex: 1 }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
import LinkBreadcrumb from "@/components/LinkBreadcrumb.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const selectedKeys = ref<string[]>(["1"]);
router.afterEach((to) => {
  selectedKeys.value = ["/" + to.path.split("/")[1]];
});
</script>

<style scoped></style>
