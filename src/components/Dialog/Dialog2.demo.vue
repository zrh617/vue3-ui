<demo>
  自定义 Dialog 模板
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
  import {
    openDialog
  } from '../../lib/index'
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