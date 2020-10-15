<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'CloudTab',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
    },
  }
</script>