# 开始使用
请先[安装](#/doc/install)本组件库。

你可以选择全局注册，在main.js/main.ts中写入下面的代码

```
import CloudUI from "cloud-ui-1"
import 'cloud-ui-1/dist/lib/cloud.css'
const app = createApp(App)
app.use(CloudUI)
```

就可以使用我提供的组件了。

你也可以选择按需导入

```
import {CloudButton, CloudSwitch} from "cloud-ui-1"
import 'cloud-ui-1/dist/lib/cloud.css'
const app = createApp(App)
app.mount('#app')
app.use(CloudButton)
app.use(CloudSwitch)
```

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <cloud-button>按钮</cloud-button>
  </div>
</template>
<script>
</script>
```