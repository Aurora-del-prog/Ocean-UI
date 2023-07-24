import { App } from "vue";
import Button from './src/Button'

// 具名导出
export {
  Button
}
// 导出插件 可以全局使用，得app注册  app.use(Button)
export default {
  install(app: App){
    app.component(Button.name,Button)
  }
} 