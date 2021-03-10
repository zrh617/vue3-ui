<demo>
  支持 disabled
</demo>

<template>
  <div>禁用开关</div>
  <cloud-switch v-model:value="bool1" disabled />
  <div>通过按钮控制开关是否禁用</div>
  <cloud-switch v-model:value="bool2" :disabled="disabled" />
  <cloud-button level="main" @click="toggleDisabled" style="margin: 5px 10px">Toggle Disable</cloud-button>
</template>

<script lang="ts">
  import {
    computed,
    ref
  } from 'vue'
  export default {
    setup() {
      const bool1 = ref(false)
      const bool2 = ref(false)
      const disabled = ref(true)
      const toggleDisabled = () => {
        disabled.value = !disabled.value
      }
      return {
        bool1,
        bool2,
        disabled,
        toggleDisabled
      }
    }
  }
</script>