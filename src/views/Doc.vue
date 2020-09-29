<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside v-if="asideVisiable">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    inject,
    Ref
  } from 'vue'
  import Topnav from "../components/Topnav.vue"
  export default {
    name: 'Doc',
    components: {
      Topnav
    },
    setup() {
      const asideVisiable = inject < Ref < boolean >> ('asideVisiable') // get
      return {
        asideVisiable
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
      flex-shrink: 0;
    }

    >.content {
      flex-grow: 1;
      padding-top: 50px;
      padding-left: 150px;

      @media (max-width: 600px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    >aside {
      flex-shrink: 0;
    }

    >main {
      flex-grow: 1;
      padding: 16px;
      background: lightgreen;
    }
  }

  aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    z-index: 9; 
    height: 100%;

    >h2 {
      margin-bottom: 4px;
    }

    >ol {
      >li {
        padding: 4px 0;
      }
    }

    @media (max-width: 600px) {
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 70px;
    }

    main {
      overflow: auto;
    }
  }

  // main {
  //   overflow: auto;
  // }
</style>