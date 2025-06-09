<template>
  <a-layout has-sider>
    <a-layout :style="{ padding: '0 216px', background: '#fff' }">
      <a-typography>
        <TitleLink id="Title-1">
          <template #title>Data Selection for Efficient Training</template>
        </TitleLink>
        <a-typography-paragraph
          >Data Selection for Efficient Training aims to select a subset
          (a.k.a., the coreset) from the full training set such that training on
          the much smaller coreset leads to a high efficiency, but we still
          expect that training on the coreset achieves a similar model accuracy
          with training on the full set. To achieve this, current methods can be
          categorized into two groups:
        </a-typography-paragraph>
        <a-typography-paragraph
          >(1)
          <a-typography-link
            @click="
              router.push(
                '/data-selection-strategies/for-efficient-training/model-agnostic-strategies'
              )
            "
            target="_blank"
          >
            Model-agnostic strategies []
          </a-typography-link>
          select the coreset purely considering the geometric properties of the
          feature space w.r.t. the training data. In this way, the distribution
          of the selected coreset is always similar with that of the full
          training set, and thus training on the coreset hopefully can achieve a
          competitive performance. However, the above strategies do not consider
          the model training process where the metadata (e.g., the gradients) is
          significant in data selection, leading to a relatively lower model
          accuracy.
        </a-typography-paragraph>
        <a-typography-paragraph
          >(2)
          <a-typography-link
            @click="
              router.push(
                '/data-selection-strategies/for-efficient-training/model-aware-strategies'
              )
            "
            target="_blank"
          >
            Model-aware strategies []
          </a-typography-link>
          mainly focus on gradient matching between the selected coreset and the
          full training set. To be specific, the coreset is a weighted subset
          that is selected to approximate the full gradient during training. In
          this way, the model accuracy of training over the coreset is on par
          with the full set with a theoretical guarantee, better than that of
          model-agnostic strategies.
        </a-typography-paragraph>
        <a-typography-paragraph
          >The above line of work emphasizes that training over the full set
          always achieves the best accuracy, and the optimization goal is to
          select an optimal coreset to accelerate the training process, while
          keeping a comparable model accuracy with the full set. However, in
          practice, there might be some data instances that can negatively
          affect model performance. This is primarily due to them 𝑖) contain-
          ing noise, and 𝑖𝑖) misaligning with the underlying distribution of
          downstream tasks.
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
            title: 'Data Selection for Efficient Training',
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
