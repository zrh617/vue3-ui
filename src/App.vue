<template>
  <router-view />
</template>

<script lang="ts">
  import {
    provide,
    ref
  } from 'vue'
  import {
    router
  } from './router'
  export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth
      const asideVisiable = ref(width <= 600 ? false : true)
      provide('asideVisiable', asideVisiable) // set
      router.afterEach(() => {
        if (width <= 600) {
          asideVisiable.value = false
        }
      })
    }
  }
</script>