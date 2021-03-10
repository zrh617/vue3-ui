<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'cloud-tab',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
    },
  }
</script>