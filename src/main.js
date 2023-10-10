import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as IPFS from 'ipfs-core'
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css' // 样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 创建v-highlight全局指令
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

app.config.globalProperties.$ipfs = IPFS
app.component('MdEditor', MdEditor)

app.use(router).use(ElementPlus).mount('#app')
