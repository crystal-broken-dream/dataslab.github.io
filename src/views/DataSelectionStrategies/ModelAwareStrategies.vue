<template>
  <a-layout has-sider>
    <a-layout :style="{ padding: '0 216px', background: '#fff' }">
      <a-typography
        ><TitleLink id="Title-1">
          <template #title>Model-aware strategies</template>
        </TitleLink>
      </a-typography>
      <a-typography-paragraph
        >Model-aware strategies represent a class of data selection methods that
        explicitly leverage information derived from the model training process,
        such as gradients or parameter updates, to guide the selection of data
        subsets. In practice, all widely adopted model-aware approaches are
        fundamentally based on <b>gradient approximation</b>.
      </a-typography-paragraph>
      <a-typography-paragraph
        ><b>Gradient approximation strategies</b> (symbol: ■ ) focus on
        selecting a subset of data
        <vue-latex
          :expression="'\\mathcal{S}\\subseteq \\mathcal{D}'"
          :display-mode="false"
        />such that the gradients computed on
        <vue-latex :expression="'\\mathcal{S}'" :display-mode="false" />
        closely match those computed on the full dataset
        <vue-latex :expression="'\\mathcal{D}'" :display-mode="false" />
        during model training, as shown in Figure 3. The main goal is to
        maintain similar learning dynamics, guided by gradient updates, when
        training on a selected subset or the entire dataset, thereby maintaining
        convergence speed and generalization
        performance.</a-typography-paragraph
      >
      <a-typography-paragraph
        >Formally, let
        <vue-latex
          :expression="'\\mathcal{f} _{\\theta } '"
          :display-mode="false"
        />
        be the model with parameters
        <vue-latex :expression="'\\theta '" :display-mode="false" /> , and let
        ∇𝜃 L𝑖(𝑓𝜃 ) denote the gradient of the loss function with respect to 𝜃
        for data instance 𝑖. The objective of gradient approximation can be
        formulated as selecting a weighted subset (S, w), where S ⊆ D, |S| = 𝑘,
        and w = [𝑤𝑖]𝑖∈S are non-negative weights, to minimize the gradient
        mismatch:</a-typography-paragraph
      >
      <a-typography-paragraph>
        <vue-latex
          :expression="'\\begin{equation}(S^*, \\mathbf{w}^*) = \\arg\\min_{\\substack{S \\subseteq \\mathcal{D},\\ |S|=k \\\\ w_i \\geq 0}} \\left\\| \\sum_{i \\in S} w_i \\nabla_\\theta \\mathcal{L}_i(f_\\theta) - \\sum_{j \\in \\mathcal{D}} \\nabla_\\theta \\mathcal{L}_j(f_\\theta) \\right\\|_2^2 \\end{equation}'"
          :display-mode="true"
        />
      </a-typography-paragraph>
    </a-layout>

    <a-layout-sider :style="[{ right: 0 }, siderStyle]" theme="light">
      <b>Table of contents </b> <br /><br />
      <a-anchor
        :affix="false"
        target-offset="64"
        :items="[
          {
            href: '#Title-1',
            title: 'Model-aware strategies',
          },
        ]"
      ></a-anchor>
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts" setup>
import TitleLink from "@/components/TitleLink.vue";

import { ref } from "vue";
import { VueLatex } from "vatex";

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
