<template>
  <div class="layout">
    <Topnav toggleMenuVisible class="nav" />
    <div class="content">
      <transition name="fade">
        <aside v-if="asideVisiable" ref='asideRef'>
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>
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
      </transition>
      <main style="width:100%">
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
      const asideRef = inject < Ref < HTMLDivElement >> ('asideRef')
      const asideVisiable = inject < Ref < boolean >> ('asideVisiable') // get
      return {
        asideVisiable,
        asideRef
      }
    }
  }
</script>

<style lang="scss" scoped>
  $aside-padding:24px;
  $bg:#3cb54b;

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease, top 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    top: -30px;
    opacity: 0;
  }

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
      padding-left: 300px;

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
    }
  }

  aside {
    // background: lightblue;
    // width: 150px;
    // padding: 16px 0;
    // position: fixed;
    // top: 0;
    // left: 0;
    // padding-top: 70px;
    // z-index: 9;
    // height: 100%;

    // >h2 {
    //   margin-bottom: 4px;
    //   padding: 0 16px;
    // }

    // >ol {
    //   >li {
    //     >a {
    //       display: block;
    //       padding: 4px 16px;
    //       text-decoration: none;
    //     }

    //     .router-link-active {
    //       background: white;
    //     }
    //   }
    // }
    z-index: 9;
    background: rgb(247, 247, 247);
    width: 300px;
    padding: 70px 24px 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    border-right: 1px solid #ececec;

    >.aside-inner {
      position: relative;
    }

    >h2 {
      font-size: 18px;
      padding: 5px 0;
    }

    >ol {
      >li {
        >a {
          font-size: 14px;
          padding: 3px 0;
          color: #6d6d6d;
          border: none;
          text-decoration: none;
          display: block;
        }

        a:hover {
          color: #1a1a1a;
        }

        >a.router-link-active {
          border-right: 4px solid $bg;
          color: #000;
        }
      }
    }

    @media (max-width: 600px) {
      // position: fixed;
      // top: 0;
      // left: 0;
      // padding-top: 70px;
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;

      >ol>li>a.router-link-active {
        color: $bg;
        border: none;
      }
    }

    main {
      overflow: auto;
    }
  }
</style>