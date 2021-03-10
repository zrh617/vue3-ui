<demo>
  垂直排列
</demo>
<template>
  <cloud-tabs v-model:selected="x" direction="vertical">
    <cloud-tab title="导航1">内容1</cloud-tab>
    <cloud-tab title="导航2">内容2</cloud-tab>
    <cloud-tab title="导航3">内容3</cloud-tab>
    <cloud-tab title="导航4">内容4</cloud-tab>
  </cloud-tabs>
</template>

<script lang="ts">
  import {
    ref
  } from 'vue'
  export default {
    setup() {
      const x = ref('导航2')
      return {
        x
      }
    }
  }
</script>