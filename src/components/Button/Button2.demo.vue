<demo>
  支持 size
</demo>
<template>
  <div>
    <div class="box">
      <cloud-button size="big">大按钮</cloud-button>
      <cloud-button>普通按钮</cloud-button>
      <cloud-button size="small">小按钮</cloud-button>
    </div>
    <div class="box">
      <cloud-button theme="link" size="big">大按钮</cloud-button>
      <cloud-button theme="link">普通按钮</cloud-button>
      <cloud-button size="small" theme="link">小按钮</cloud-button>
    </div>
    <div class="box">
      <cloud-button size="big" theme="text">大按钮</cloud-button>
      <cloud-button theme="text">普通按钮</cloud-button>
      <cloud-button size="small" theme="text">小按钮</cloud-button>
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