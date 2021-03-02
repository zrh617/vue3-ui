<demo>
  垂直排列
</demo>
<template>
  <Tabs v-model:selected="x" direction="vertical">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
    <Tab title="导航4">内容4</Tab>
  </Tabs>
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