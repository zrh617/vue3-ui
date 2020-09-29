<template>
  <div>
    <div class="topnav">
      <div class="logo" @click="toggleAside">LOGO</div>
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
      const asideVisiable = inject < Ref < boolean >> ('xxx') // get
      const toggleAside = () => {
        asideVisiable.value = !asideVisiable.value
      }
      return {toggleAside}
    }
  }
</script>

<style lang="scss" scoped>
  .topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;

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
  }
</style>