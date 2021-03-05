# 开始使用
请先[安装](#/doc/install)本组件库。

然后在main.js/main.ts中写入下面的代码

```
import CloudUI from "cloud-ui-1"
import 'cloud-ui-1/dist/lib/cloud.css'
const app = createApp(App)
app.use(CloudUI)
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "cloud-ui-1"
import 'cloud-ui-1/dist/lib/cloud.css'
export default {
  components: {Button}
}
</script>
```