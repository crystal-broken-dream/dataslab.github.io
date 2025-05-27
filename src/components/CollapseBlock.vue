<template>
  <a-collapse v-model:activeKey="activeKey" expandIconPosition="end">
    <a-collapse-panel key="1">
      <template #header>
        <a-flex gap="middle">
          <span v-if="type === 'info'"><InfoCircleOutlined /> </span>
          <span v-if="type === 'code'"><CodeOutlined /> </span>
          <slot name="header"></slot>
        </a-flex>
      </template>
      <slot name="content"></slot>
    </a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts" setup>
import { InfoCircleOutlined, CodeOutlined } from "@ant-design/icons-vue";
import { defineProps, onMounted, ref } from "vue";

const activeKey = ref(1);

onMounted(() => {
  if (props.active) {
    activeKey.value = 1;
  } else {
    activeKey.value = 0;
  }
});

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped></style>
