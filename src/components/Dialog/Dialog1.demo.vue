<demo>
  常规使用
</demo>
<template>
  <div>
    <cloud-button @click="toggle">打开对话框</cloud-button>
    <cloud-dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </cloud-dialog>
  </div>
</template>

<script lang="ts">
  import {
    ref
  } from 'vue'
  export default {
    setup() {
      const x = ref(false)
      const toggle = () => {
        x.value = !x.value
      }
      const f1 = () => {
        return true
      }
      const f2 = () => {}
      return {
        x,
        toggle,
        f1,
        f2
      }
    }
  }
</script>