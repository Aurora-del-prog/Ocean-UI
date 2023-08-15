import { App } from 'vue'
import Tab from './src/tab'
import Tabs from './src/tabs'

// 具名导出
export { Tab, Tabs }

// 导出插件
export default {
  install(app: App) {
    app.component('STab', Tab)
    app.component('STabs', Tabs)
  }
}
