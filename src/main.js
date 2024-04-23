import { createApp } from "vue";

import App from "./App.vue";
import router from "./route";
import st from "./member";

createApp(App).use(router).use(st).mount("#app");
window.Kakao.init('21434f74e5e17e4bf0e260c66d72b496'); // JavaScript 키
Kakao.isInitialized();