<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tab',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
    },
  }
</script>