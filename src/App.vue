<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
  export default {
    name: 'App',
    setup() {
      const asideVisiable = ref(false)
      provide('xxx', asideVisiable) // set
    }
  }
</script>