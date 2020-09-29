<template>
  <div class="layout">
    <Topnav />
    <div class="content">
      <aside v-if="asideVisiable">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/swich">Switch 组件</router-link>
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
      <main>主内容</main>
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
      const asideVisiable = inject < Ref < boolean >> ('xxx') // get
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
      padding-top: 60px;
      padding-left: 156px;

      @media (max-width: 500px) {
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
    height: 100%;

    >h2 {
      margin-bottom: 4px;
    }

    >ol {
      >li {
        padding: 4px 0;
      }
    }
  }

  main {
    overflow: auto;
  }
</style>