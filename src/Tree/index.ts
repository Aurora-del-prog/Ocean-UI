import { App } from "vue";
import Tree from './src/Tree'

// 具名导出
export {
  Tree
}
// 导出插件 可以全局使用，得app注册  app.use(Button)
export default {
  install(app: App){
    app.component(Tree.name,Tree)
  }
} 