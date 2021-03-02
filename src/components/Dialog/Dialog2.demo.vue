<demo>
  通过按钮打开 Dialog
</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
  import {
    ref,
    h
  } from 'vue'
  export default {
    setup() {
      const showDialog = () => {
        openDialog({
          title: h('strong', {}, '标题'),
          content: '你好',
          closeOnClickOverlay: false,
          ok() {
            console.log('ok')
          },
          cancel() {
            console.log('cancel')
          }
        })
      }
      return {
        showDialog
      }
    }
  }
</script>