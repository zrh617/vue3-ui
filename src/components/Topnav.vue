<template>
  <div>
    <div class="topnav">
      <div class="toggleAside" @click="toggleAside"><span></span></div>
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
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
  .topnav {
    background: pink;
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
      // width: 24px;
      // height: 24px;
      // background: red;
      // position: absolute;
      left: 16px;
      // top: 50%;
      // transform: translateY(-50%);
      z-index: 120;
      position: absolute;
      width: 40px;
      height: 44px;
      display: none;

      span {
        margin: 14px 0 0 15px;
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