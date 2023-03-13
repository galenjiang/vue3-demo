/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}


interface Transition {
  ready: Promise;
  updateCallbackDone;
  finished: updateCallbackDone;
  skipTransition: () => void;
}

interface Document {
  startViewTransition: (callback: () => void) => Transition;
}