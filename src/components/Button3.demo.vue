<demo>
  支持 level
</demo>
<template>
  <div>
    <div class="box">
      <Button level="main">主要按钮</Button>
      <Button level="warning">警告按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div class="box">
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link" level="warning">警告链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div class="box">
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text" level="warning">警告文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Button} from "../lib/index";
  export default {
    components: {
      Button
    }
  }
</script>

<style lang="scss">
  .box{
    &+& {
      margin-top: 10px;
    }
  }
</style>