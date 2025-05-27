<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="false"
    :scroll="{ x: 1000, y: 240 }"
    size="small"
  />
</template>

<script lang="ts" setup>
import Papa from "papaparse";

import { defineProps, onMounted, ref } from "vue";

const data = ref<Array<{ [key: string]: string }>>([]);
const columns = ref<Array<{ title: string; dataIndex: string; key: string }>>(
  []
);

const parseCSV = (rawCSV: string) => {
  Papa.parse(rawCSV, {
    header: true, // 使用第一行作为标题
    skipEmptyLines: true, // 跳过空行
    complete: function (results) {
      /*
      console.log(results.data);
      console.log(results.meta.fields);
      */
      data.value = results.data as Array<{ [key: string]: string }>;
      Object.entries(data.value[0]).forEach(([key, value]) =>
        columns.value.push({
          title: key,
          dataIndex: key,
          key: key,
        })
      );
      console.log(columns.value);
    },
  });
};
const props = defineProps({
  rawCSV: {
    type: String,
    default: "",
  },
});

onMounted(() => {
  parseCSV(props.rawCSV);
});
</script>

<style scoped></style>
