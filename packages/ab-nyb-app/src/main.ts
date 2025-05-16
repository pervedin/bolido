import "./main.scss";
import "@fkui/icon-lib-default/dist/f";

import { createApp } from "vue";
import App from "./App.vue";
//import { BValidationPlugin as ValidationPlugin } from "@vedin-pp-se/bolido-vue";
import { ValidationPlugin } from "@fkui/vue";

const app = createApp(App);
app.use(ValidationPlugin);
app.mount("#app");
