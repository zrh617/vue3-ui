<demo>
  支持 disabled
</demo>
<template>
  <cloud-tabs v-model:selected="x">
    <cloud-tab title="导航1">内容1</cloud-tab>
    <cloud-tab title="导航2">内容2</cloud-tab>
    <cloud-tab title="导航3" :disabled="true">内容3</cloud-tab>
    <cloud-tab title="导航4">内容4</cloud-tab>
  </cloud-tabs>
</template>

<script lang="ts">
  import {
    ref
  } from 'vue'
  export default {
    setup() {
      const x = ref('导航1')
      return {
        x
      }
    }
  }
</script>