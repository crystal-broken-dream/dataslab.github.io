<template>
  <a-layout has-sider>
    <a-layout :style="{ padding: '0 216px', background: '#fff' }">
      <a-typography>
        <TitleLink id="Title-1">
          <template #title>Data Selection for Effective Training</template>
        </TitleLink>
        <a-typography-paragraph
          >Data Selection for Effective Training aims to select a high- quality
          training subset from a data pool to maximize the model accuracy, which
          serves as the main optimization goal. Hence natu- rally, all popular
          strategies are model-aware, i.e., considering the model prediction
          results or metadata during training to select data.
        </a-typography-paragraph>
        <a-typography-paragraph
          >Nevertheless, we can categorized these strategies into task-agnostic
          and task-aware, depending on whether or not they choose data
          considering downstream tasks.
        </a-typography-paragraph>
        <a-typography-paragraph>
          (1)
          <a-typography-link
            @click="
              router.push(
                '/data-selection-strategies/for-effective-training/task-agnostic-based-strategies'
              )
            "
            target="_blank"
            >Task-agnostic based strategies []
          </a-typography-link>
          follow the active learning par- adigm that iteratively leverages the
          model to score each data in- stance from the data pool, select a
          subset of instances with the highest scores and use the subset to
          fine-tune the model. The most commonly-used scoring metric is the
          uncertainty, which selects the most informative data instances where
          the model lacks confidence. Besides, CC [XXX]. However, the
          aforementioned approaches fail to take into account the impact of data
          instances on the downstream task. As a result, their effectiveness
          diminishes when the down- stream task does not align with the
          distribution of the training set.
        </a-typography-paragraph>
        <a-typography-paragraph
          >(2)
          <a-typography-link
            @click="
              router.push(
                '/data-selection-strategies/for-effective-training/task-aware-based-strategies'
              )
            "
            target="_blank"
            >Task-aware based strategies []
          </a-typography-link>
          focus on how to select high- quality data to enhance the performance
          of downstream task, which can be further categorized into the
          following three classes. 𝑖) Valida- tion loss based strategies employ
          an iterative selection mechanism to select data. First, the model is
          trained on the currently selected data subset. Second, we test the
          model on the validation set to com- pute the validation loss. Third,
          we update the data selection criteria based on this loss and return to
          the first step to select another batch of instances, so as to minimize
          the validation loss. Consequently, this approach achieves superior
          model accuracy because it directly minimizes the loss, but it has the
          efficiency problem because of iterative training. 𝑖𝑖) Influence
          function based strategies select data instances with the highest
          influence scores, which quantify each data instance’s contribution to
          model performance. A higher score indicates that if we add the
          instance into the training set, it can much improve the performance of
          the downstream task. 𝑖𝑖𝑖) Shap- ley value based strategies quantify
          each data instance’s contribution by averaging its performance impact
          across all possible training subsets. Specifically, they evaluate the
          model’s performance on ev- ery subset with and without that instance
          and compute the mean of these marginal gains, resulting in the Shapley
          value of the instance. However, these strategies require training on
          numerous possible subsets, which is computationally intensive. For
          large-scale datasets, this approach becomes computationally
          prohibitive.
        </a-typography-paragraph>
        <a-typography-paragraph> </a-typography-paragraph>
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
            title: 'Data Selection for Effective Training',
          },
        ]"
      ></a-anchor>
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts" setup>
import TitleLink from "@/components/TitleLink.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

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
