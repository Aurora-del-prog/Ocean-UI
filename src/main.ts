import { createApp } from 'vue'
// import './style.css'
import './styles/index.scss'
import App from './App.vue'
import Button from './button'
import Icon from './icon'
// import SheepUI from '../build/'

createApp(App).use(Icon).mount('#app')
