<demo>
  支持 level
</demo>
<template>
  <div>
    <div class="box">
      <cloud-button level="main">主要按钮</cloud-button>
      <cloud-button level="warning">警告按钮</cloud-button>
      <cloud-button level="danger">危险按钮</cloud-button>
    </div>
    <div class="box">
      <cloud-button theme="link" level="main">主要链接按钮</cloud-button>
      <cloud-button theme="link" level="warning">警告链接按钮</cloud-button>
      <cloud-button theme="link" level="danger">危险链接按钮</cloud-button>
    </div>
    <div class="box">
      <cloud-button theme="text" level="main">主要文字按钮</cloud-button>
      <cloud-button theme="text" level="warning">警告文字按钮</cloud-button>
      <cloud-button theme="text" level="danger">危险文字按钮</cloud-button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
  }
</script>

<style lang="scss">
  .box{
    &+& {
      margin-top: 10px;
    }
  }
</style>