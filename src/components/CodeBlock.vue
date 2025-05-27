<template>
  <div class="container">
    <button class="button" @click="copy">
      <CopyOutlined />
    </button>
    <highlightjs :language="language" :code="code" />
  </div>
</template>

<script lang="ts" setup>
import "highlight.js/lib/common";
import clipBorad from "vue-clipboard3";

import { CopyOutlined } from "@ant-design/icons-vue";
import { defineProps } from "vue";

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: "python",
  },
});

let Clip = clipBorad;
let { toClipboard } = Clip();

const copy = async () => {
  try {
    await toClipboard(props.code);
    console.log("Copied to clipboard");
  } catch (e) {
    console.error(e);
  }
};
</script>

<style scoped>
.container {
  position: relative;
}
.button {
  position: absolute;
  top: 18px;
  right: 16px;
  opacity: 0;
}
.button:hover {
  opacity: unset;
}
</style>
