/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "*.csv" {
  const content: {
    [key: string]: string;
  }[];
  export default content;
}
