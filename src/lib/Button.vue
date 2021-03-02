<template>
  <button class="cloud-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="cloud-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
  import {
    computed
  } from 'vue'
  export default {
    name: 'Button',
    props: {
      theme: {
        type: String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'normal'
      },
      level: {
        type: String,
        default: "normal",
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const {
        theme,
        size,
        level
      } = props
      const classes = computed(() => {
        return {
          [`cloud-theme-${theme}`]: theme,
          [`cloud-size-${size}`]: size,
          [`cloud-level-${level}`]: level
        }
      })
      return {
        classes
      }
    }
  }
</script>

<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $primary:#1890ff;
  $danger:#ff4d4f;
  $warning:#f4bd00;
  $color: #262626;
  $blue: #40a9ff;
  $radius: 4px;
  $red: red;
  $yellow: yellow;
  $grey: grey;

  .cloud-button {
    box-sizing: border-box;
    height: $h;
    padding: 12px 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-color: $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: box-shadow 250ms;

    &+& {
      margin-left: 8px;
    }

    & {
      background: #fff;
      box-shadow: 0 0 0 6px rgba($primary, 0);
    }

    &:active {
      transition: none;
      box-shadow: 0 0 0 0 rgba($primary, 0.5);
    }

    &:hover,
    &:focus {
      color: fade-out($color: $primary, $amount: 0);
      border: 1px solid fade-out($color: $primary, $amount: 0.5);
    }

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    &.cloud-theme-link {
      border-color: transparent;
      box-shadow: none;
      color: $blue;

      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }

    &.cloud-theme-text {
      border-color: transparent;
      box-shadow: none;
      color: inherit;

      &:hover,
      &:focus {
        background: darken(white, 5%);
      }
    }

    &.cloud-size-big {
      padding: 6px 18px;
      height: 48px;
      font-size: 18px;
    }

    &.cloud-size-normal {
      padding: 6px 14px;
      font-size: 13px;
      height: 36px;
    }

    &.cloud-size-small {
      font-size: 10px;
      padding: 4px 12px;
      height: 24px;
    }

    &.cloud-theme-button {
      &.cloud-level-main {
        background: $primary;
        color: white;
        border-color: $blue;

        & {
          background: #40a9ff;
          box-shadow: 0 0 0 6px rgba($primary, 0);
        }

        &:active {
          transition: none;
          box-shadow: 0 0 0 0 rgba($primary, 0.5);
        }

        &:hover,
        &:focus {
          border: 1px solid fade-out($color: $primary, $amount: 0.5);
        }
      }

      &.cloud-level-warning {
        background: $yellow;
        border-color: $yellow;
        color: white;

        & {
          background: $warning;
          box-shadow: 0 0 0 6px rgba($warning, 0);
        }

        &:active {
          transition: none;
          box-shadow: 0 0 0 0 rgba($warning, 0.5);
        }

        &:hover,
        &:focus {
          border: 1px solid fade-out($color: $warning, $amount: 0.5);
        }
      }

      &.cloud-level-danger {
        background: $red;
        border-color: $red;
        color: white;

        & {
          background: $danger;
          box-shadow: 0 0 0 6px rgba($danger, 0);
        }

        &:active {
          transition: none;
          box-shadow: 0 0 0 0 rgba($red, 0.5);
        }

        &:hover,
        &:focus {
          border: 1px solid fade-out($color: $danger, $amount: 0.5);
        }
      }
    }

    &.cloud-theme-link {
      &.cloud-level-warning {
        color: $warning;

        &:hover,
        &:focus {
          color: darken($yellow, 10%);
        }
      }

      &.cloud-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }

    }

    &.cloud-theme-text {
      &.cloud-level-main {
        color: $blue;

        &:hover,
        &:focus {
          color: darken($blue, 10%);
        }
      }

      &.cloud-level-warning {
        color: $warning;

        &:hover,
        &:focus {
          color: darken($yellow, 10%);
        }
      }

      &.cloud-level-danger {
        color: $red;

        &:hover,
        &:focus {
          color: darken($red, 10%);
        }
      }
    }

    &.cloud-theme-button {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
        border-color: $grey;

        &:hover {
          border-color: $grey;
        }
      }
    }

    &.cloud-theme-link,
    &.cloud-theme-text {
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }

    >.cloud-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: transparent $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: cloud-spin 1s infinite linear;
    }
  }

  @keyframes cloud-spin {
    0% {
      transform: rotate(0deg)
    }

    100% {
      transform: rotate(360deg)
    }
  }
</style>