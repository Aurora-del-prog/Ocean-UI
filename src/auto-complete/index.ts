import { App } from 'vue'
import AutoComplete from './src/auto-complete'

// 具名导出
export { AutoComplete }

// 导出插件
export default {
  install(app: App) {
    app.component('SAutoComplete', AutoComplete)
  }
}
