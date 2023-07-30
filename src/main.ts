import { createApp } from "vue";
import App from "./App.vue";
import './index.scss'
import OceanUI from './index'

const app = createApp(App)
app.use(OceanUI)
app.mount("#app");
