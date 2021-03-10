import './lib/cloud.scss'
import './index.scss'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';
import CloudUI from './lib';
import { CloudSwitch, CloudButton, CloudSelect, CloudTabs, CloudTab, CloudDialog } from './lib';

const app = createApp(App)
app.config.globalProperties.Flag = false;
//全局导入
app.use(CloudUI)
//按需导入
// app.use(CloudSwitch)
// app.use(CloudButton)
// app.use(CloudSelect)
// app.use(CloudTabs)
// app.use(CloudTab)
// app.use(CloudDialog)
app.use(router)
app.mount('#app')
app.component("Markdown", Markdown)