<template>
  <button class="cloud-switch" @click="toggle" :class="classes">
    <span class="cloud-ball"></span>
  </button>
</template>

<script lang="ts">
  import {
    computed,
    ref
  } from 'vue'
  export default {
    props: {
      value: Boolean,
      size: {
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    setup(props, context) {
      const toggle = () => {
        if (props.disabled) return
        context.emit('update:value', !props.value)
      }
      const classes = computed(() => {
        return {
          [`cloud-size-${props.size}`]: true,
          [`cloud-checked`]: props.value,
          [`cloud-disabled`]: props.disabled
        }
      })
      return {
        toggle,
        classes
      }
    }
  }
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  $grey: grey;

  .cloud-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    >span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2 / 2;
      transition: all 250ms;
    }

    &.cloud-checked {
      background: #1890ff;

      >span {
        left: calc(100% - #{$h2} - 2px);
      }
    }

    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }

    &.cloud-size-big {
        $h: $h + 3px;
        $h2: $h;
        height: $h;
        width: $h*2;
        &>.cloud-ball {
            height: $h2 - 4px;
            width: $h2 - 3px;
        }
        &.cloud-checked>.cloud-ball {
            left: calc(100% - #{$h2} + 1px);
        }
        &:active:not(.cloud-disabled)>.cloud-ball {
            width: $h2 + 4px;
        }
        &.cloud-checked:active:not(.cloud-disabled)>.cloud-ball {
            left: calc(100% - #{$h2} - 6px);
        }
    }

    &.cloud-size-small {
        $h: $h - 5.5px;
        $h2: $h - 4px;
        height: $h;
        width: $h*2;
        &>.cloud-ball {
            height: $h2;
            width: $h2;
        }
        &.cloud-checked>.cloud-ball {
            left: calc(100% - #{$h2} - 2px);
        }
        &:active:not(.cloud-disabled)>.cloud-ball {
            width: $h2 + 4px;
        }
        &.cloud-checked:active:not(.cloud-disabled)>.cloud-ball {
            left: calc(100% - #{$h2} - 6px);
        }
    }

    &:focus {
      outline: none;
    }

    &:active {
      >span {
        width: $h2 + 4px;
      }
    }

    &.cloud-checked:active {
      >span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
</style>