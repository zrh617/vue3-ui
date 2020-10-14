<template>
  <router-view />
</template>

<script lang="ts" setup>
  import {
    provide,
    ref
  } from 'vue'
  import {
    router
  } from './router'

  const width = document.documentElement.clientWidth
  const asideVisiable = ref(width <= 600 ? false : true)
  provide('asideVisiable', asideVisiable) // set
  router.afterEach(() => {
    if (width <= 600) {
      asideVisiable.value = false
    }
  })
</script>