import { App, defineAsyncComponent } from 'vue';
import Utils from "./plugins/utils";
import AppState from "./plugins/appState";
import PrimeVue from "primevue/config";

function install (app: App) {
  app.use(AppState);
  app.use(Utils);
  app.component('NetworkEventsAnalyzer', defineAsyncComponent(
      ()=>import('./components/NetworkEventsAnalyzer.vue')
  ));
}

import './assets/style.scss';
//export default install;
export {
  install as default,
  PrimeVue as DesignSystemConfig,
};