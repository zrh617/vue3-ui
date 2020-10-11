<template>
  <div>
    <div class="topnav">
      <router-link to="/" class="logo">
        <svg class="icon">
          <use xlink:href="#icon-yun"></use>
        </svg>
      </router-link>
      <ul class="menu">
        <li>
          <router-link to="/doc/intro">文档</router-link>
        </li>
      </ul>
      <div class="toggleAside" @click="toggleAside" v-if="toggleMenuVisible"><span></span></div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    inject,
    Ref
  } from 'vue'
  export default {
    name: 'Topnav',
    props: {
      toggleMenuVisible: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const asideVisiable = inject < Ref < boolean >> ('asideVisiable') // get
      const toggleAside = () => {
        asideVisiable.value = !asideVisiable.value
      }
      return {
        toggleAside
      }
    }
  }
</script>

<style lang="scss" scoped>
  $color: #007974;

  .topnav {
    color: $color;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;

    >.logo {
      max-width: 6em;
      margin-right: auto;
      padding-left: 0px;

      @media (max-width: 600px) {
        padding-left: 0;
      }

      >svg {
        width: 32px;
        height: 32px;
      }
    }

    >.menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;

      >li {
        margin: 0 1em;
      }
    }

    >.toggleAside {
      left: 16px;
      z-index: 120;
      position: absolute;
      width: 40px;
      height: 44px;
      display: none;
      background: fade-out(black, 0.9);

      span {
        margin: 14px 0 0 10px;
        width: 20px;
        height: 18px;
        display: block;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgAgMAAAAdw9KTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAADdFJOUwDjSYAlncUAAAAbSURBVBjTY5j/Hwq+MdTDmH+RmUgK6AuGhcsAU5tyB6Ji+x0AAAAASUVORK5CYII=) no-repeat;
        background-size: 100% 100%;
      }
    }

    @media (max-width: 600px) {
      >.menu {
        display: none;
      }

      >.logo {
        margin: 0 auto;
      }

      >.toggleAside {
        display: inline-block;
      }
    }
  }
</style>