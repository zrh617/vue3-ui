<template>
  <div>
    <h1>Select 示例</h1>
    <Demo :component="Select1Demo" />
    <Demo :component="Select2Demo" />
    <Demo :component="Select3Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Select1Demo from './Select/Select1.demo.vue';
import Select2Demo from './Select/Select2.demo.vue';
import Select3Demo from './Select/Select3.demo.vue';
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Select1Demo,
      Select2Demo,
      Select3Demo
    };
  },
};
</script>