<demo>
  支持 Size
</demo>
<template>
  <div>大开关</div>
  <cloud-switch v-model:value="bool1" size="big" />
  <div>普通开关</div>
  <cloud-switch v-model:value="bool2" />
  <div>小开关</div>
  <cloud-switch v-model:value="bool3" size="small" />
</template>

<script lang="ts">
  import {
    ref
  } from 'vue'
  export default {
    name: 'SwitchDemo',
    setup() {
      const bool1 = ref(false)
      const bool2 = ref(false)
      const bool3 = ref(false)
      return {
        bool1,
        bool2,
        bool3
      }
    }
  }
</script>