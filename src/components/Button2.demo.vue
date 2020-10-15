<demo>
  支持 size
</demo>
<template>
  <div>
    <div class="box">
      <Button size="big">大按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">小按钮</Button>
    </div>
    <div class="box">
      <Button theme="link" size="big">大按钮</Button>
      <Button theme="link">普通按钮</Button>
      <Button size="small" theme="link">小按钮</Button>
    </div>
    <div class="box">
      <Button size="big" theme="text">大按钮</Button>
      <Button theme="text">普通按钮</Button>
      <Button size="small" theme="text">小按钮</Button>
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