import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import Scrollmagic from "scrollmagic";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

const app = createApp(App);
app.use(router);
app.use(Scrollmagic);
app.use(ScrollParallax);
app.component("scroll-parallax", ScrollParallax);
app.mount("#app");
