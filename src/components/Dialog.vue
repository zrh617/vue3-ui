<template>
  <div>Dialog</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <div>hi</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <div>hi</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue'
  import Dialog from '../lib/Dialog.vue'
  import {
    ref,
    h
  } from 'vue'
  import {
    openDialog
  } from '../lib/openDialog'
  export default {
    components: {
      Button,
      Dialog
    },
    setup(props) {
      const x = ref(false)
      const toggle = () => {
        x.value = !x.value
      }
      const f1 = () => {
        return false
      }
      const f2 = () => {}
      const showDialog = () => {
        openDialog({
          title: h('strong', {}, '标题'),
          content: '你好',
          ok: () => {

          },
          cancel: () => {

          }
        })
      }
      return {
        x,
        toggle,
        f1,
        f2,
        showDialog
      }
    }
  }
</script>