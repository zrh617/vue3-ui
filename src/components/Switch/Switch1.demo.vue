<demo>
  常规用法
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
  import {
    ref
  } from 'vue'
  export default {
    setup() {
      const bool = ref(false)
      return {
        bool
      }
    }
  }
</script>