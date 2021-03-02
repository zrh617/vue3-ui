<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
  <Demo :component="Tabs2Demo" />
  <Demo :component="Tabs3Demo" />
</template>

<script lang="ts">
  import Demo from './Demo.vue'
  import Tabs1Demo from './Tabs/Tabs1.demo.vue'
  import Tabs2Demo from './Tabs/Tabs2.demo.vue'
  import Tabs3Demo from './Tabs/Tabs3.demo.vue'
  export default {
    components: {
      Demo
    },
    setup() {
      return {
        Tabs1Demo,
        Tabs2Demo,
        Tabs3Demo
      }
    }
  }
</script>