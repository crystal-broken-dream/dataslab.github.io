import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DemoView from "@/views/DemoView.vue";

import GettingStartedLayout from "@/views/GettingStarted/GettingStartedLayout.vue";
import GettingStartedIndex from "@/views/GettingStarted/GettingStartedIndex.vue";
import IntroductionView from "@/views/GettingStarted/IntroductionView.vue";

import ExamplesLayout from "@/views/Examples/ExamplesLayout.vue";
import ExamplesIndex from "@/views/Examples/ExamplesIndex.vue";
import DataSelectionStrategiesLayout from "@/views/DataSelectionStrategies/DataSelectionStrategiesLayout.vue";
import DataSelectionStrategiesIndex from "@/views/DataSelectionStrategies/DataSelectionStrategiesIndex.vue";
import ModelAgnosticStrategies from "@/views/DataSelectionStrategies/Model-agnosticStrategies.vue";
import ForEfficientTraining from "@/views/DataSelectionStrategies/ForEfficientTraining.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/getting-started",
    name: "GettingStarted",
    component: GettingStartedLayout,
    children: [
      { path: "", component: GettingStartedIndex },
      { path: "introduction", component: IntroductionView },
    ],
  },
  {
    path: "/examples",
    name: "examples",
    component: ExamplesLayout,
    children: [{ path: "", component: ExamplesIndex }],
  },
  {
    path: "/data-selection-strategies",
    name: "data selection strategies",
    component: DataSelectionStrategiesLayout,
    children: [
      { path: "", component: DataSelectionStrategiesIndex },
      {
        path: "for-efficient-training",
        component: ForEfficientTraining,
      },
      {
        path: "for-efficient-training/model-agnostic-strategies",
        component: ModelAgnosticStrategies,
      },
    ],
  },
  {
    path: "/demo",
    name: "demo",
    component: DemoView,
  },
  //  {
  //    path: "/about",
  //    name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //    component: () =>
  //      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
