<template>
  <a-layout has-sider>
    <a-layout :style="{ margin: '0 200px', background: '#fff' }">
      <a-typography>
        <TitleLink id="Title-1">
          <template #title>Title</template>
        </TitleLink>

        <TitleLink id="Title-2" :level="2">
          <template #title>H2 Title</template>
        </TitleLink>

        <a-typography-paragraph>
          common text
          <a-typography-link href="/demo" target="_blank">
            common link
          </a-typography-link>
        </a-typography-paragraph>
        <a-row :gutter="[16, 24]">
          <a-col span="12">
            <LinkCard href="/demo">
              <template #title>Demo</template>
              <template #content>self</template>
            </LinkCard>
          </a-col>
          <a-col span="12">
            <LinkCard href="/demo" target="_blank">
              <template #title>Demo</template>
              <template #content>blank</template>
            </LinkCard>
          </a-col>
        </a-row>

        <CodeBlock code="code" />
        <CodeBlock
          code="code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code code "
        />

        <CollapseBlock type="info">
          <template #header>info</template>
          <template #content>info</template>
        </CollapseBlock>

        <CollapseBlock>
          <template #header>CollapseBlock</template>
          <template #content>
            <CollapseBlock>
              <template #header>innerBlock</template>
              <template #content>content</template>
            </CollapseBlock>
          </template>
        </CollapseBlock>

        <CollapseBlock type="code">
          <template #header>可折叠代码块</template>
          <template #content>
            <CodeBlock code="pip install" />
          </template>
        </CollapseBlock>

        <CollapseBlock :active="false">
          <template #header>默认关闭</template>
          <template #content>content</template>
        </CollapseBlock>
        <a-typography-paragraph>
          block（使用latex语法）:
          <vue-latex :expression="'\\frac{a_i}{1+x}'" :display-mode="true" />
        </a-typography-paragraph>
        <a-typography-paragraph>
          inline:
          <vue-latex :expression="'\\frac{a_i}{1+x}'" :display-mode="false" />
        </a-typography-paragraph>

        交叉引用（最底下有脚注）<footNoteLink :num="1" />

        表格（读取CSV字符串）
        <CSVParser :rawCSV="csvData" />

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <a-divider />
        <footNote :num="1">
          <template #content>detail</template>
        </footNote>
      </a-typography>
    </a-layout>

    <demoSider />

    <a-layout-sider :style="[{ right: 0 }, siderStyle]" theme="light">
      <b>Table of contents </b> <br /><br />
      <a-anchor
        :affix="false"
        target-offset="64"
        :items="[
          {
            href: '#Title-1',
            title: 'Title',
          },
          {
            href: '#Title-2',
            title: 'H2 Title',
          },
        ]"
      ></a-anchor>
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts" setup>
import LinkCard from "@/components/LinkCard.vue";
import TitleLink from "@/components/TitleLink.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import CollapseBlock from "@/components/CollapseBlock.vue";
import demoSider from "@/components/Sider/demoSider.vue";
import footNoteLink from "@/components/footNoteLink.vue";
import footNote from "@/components/footNote.vue";
import CSVParser from "@/components/CSVParser.vue";
import { VueLatex } from "vatex";

import { ref, defineComponent } from "vue";

defineComponent({
  components: {
    VueLatex,
  },
});

const csvData = `ID,Product_Number,Industry_Type,Customer_Type,Brand_Number,Segments_Number,Country_number
1,3,Energy and Resources; Industrial and Manufacturing,Business,1,2,7
2,15,Industrial and Manufacturing,Business,1,3,2
3,0,Others,Business; Consumer,2,0,0
4,3,Others,"Business, Consumer",1,0,1
5,21,Healthcare and Education,"Consumer, Business",1,0,1
6,0,Others,"Business, Consumer",1,5,1
7,0,Industrial and Manufacturing,Business; Government,1,0,0
8,1,Others,"Business, Consumer",1,2,1
9,0,Healthcare and Education,"Consumer, Business",1,4,0
10,3,Healthcare and Education,"Business, Government",1,0,1
`;

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

<style scoped>
.Title {
  scroll-margin-top: 80px;
}
</style>
