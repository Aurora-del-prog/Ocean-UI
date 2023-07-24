import { createApp } from "vue";
import App from "./App.vue";
import './index.scss'
import Button from "./Button";

const app = createApp(App)
app.use(Button)
app.mount("#app");
