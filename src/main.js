import { createApp } from "vue";

import App from "./App.vue";
import router from "./route";
import st from "./member";

createApp(App).use(router).use(st).mount("#app");
