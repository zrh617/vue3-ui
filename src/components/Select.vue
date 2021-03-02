<template>
  <div>
    <h1>Select 示例</h1>
    <Demo :component="Select1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Select1Demo from './Select/Select1.demo.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Select1Demo
    };
  },
};
</script>