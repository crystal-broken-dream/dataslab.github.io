import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

import App from "./App.vue";
import router from "./router";

import "highlight.js/styles/stackoverflow-light.css";
import hljs from "highlight.js/lib/core";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import python from "highlight.js/lib/languages/python";

import VueLatex from "vatex";

hljs.registerLanguage("python", python);
hljs.highlightAll();

createApp(App)
  .use(Antd)
  .use(hljsVuePlugin)
  .use(VueLatex)
  .use(router)
  .mount("#app");
