<template>
  <div>Dialog</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"></Dialog>
</template>

<script lang="ts">
  import Button from '../lib/Button.vue'
  import Dialog from '../lib/Dialog.vue'
  import {
    ref
  } from 'vue'
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
      return {
        x,
        toggle,
        f1,
        f2
      }
    }
  }
</script>