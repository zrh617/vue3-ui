<template>
  <div
    class="cloud-select"
    @click.stop="openOptions">
    <div
      class="result"
    >{{ data[curIdx].text }}
    </div>
  </div>
  <div
    class="options"
    v-show="optionsShow"
  >
      <!-- 小三角部分 -->
      <div class="mod-triangle">
        <div class="t-border"></div>
        <div class="t-inset"></div>
      </div>
      <div
        class="option"
        v-for="(item, index) of data"
        :key="item.id"
        @click.stop="setOption(index, item)"
        :class="index === curIdx? 'selected' : ''"
      >
        {{ item.text }}
      </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, watch } from 'vue';

export default {
  name: 'Select',
  props: {
    data: Array,
    currentIndex: {
      type: Number,
      default: 0
    },
    callback: Function
  },
  setup(props) {
    //声明响应式数据
    const state = reactive({
      curIdx: props.currentIndex,
      optionsShow: false
    })

    const setOption = (index, item) => {
      state.curIdx = index;
      state.optionsShow = false;
      props.callback(index, item);
    }

    const openOptions = () => {
      state.optionsShow = !state.optionsShow;
    }

    const app = document.getElementById('app');
    app.addEventListener('click', () => {
      state.optionsShow = false;
    })

    return {
      ...toRefs(state),
      setOption,
      openOptions
    }
  }
};
</script>

<style lang="scss">
  $h: 40px;
  $w: 200px;
  $size: 16px;
  $border-color: #d9d9d9;

  .cloud-select {
    width: $w;
    height: $h;
    line-height: $h;
    font-size: $size;
    padding-left: 10px;
    border: 1px solid $border-color;
    border-radius: 5px;
  }

  .options {
    width: $w;
    margin-top: 10px;
    font-size: $size;
    background-color: #fff;
    border: 1px solid $border-color;
    border-radius: 5px;
    position: absolute;
    z-index: 1;

    /*小三角部分*/
    .mod-triangle {
      display:block;
      position:relative;
      left:$w/2 - 10px;
      top:-$h + 20px;
      z-index:20;
    }
    .mod-triangle .t-border,
    .mod-triangle .t-inset{
      left:0px;
      top:0px;
      width:0;
      height:0;
      font-size:0;
      overflow:hidden;
      position:absolute;
      border-width:10px;
      border-style:dashed solid dashed dashed;
    }
    .mod-triangle .t-border{
      border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;
    }
    .mod-triangle .t-inset{
      border-color: transparent transparent #fff transparent;
    }

    .option{
      padding: 8px 10px;

      &.selected{
        color: #0d92ff;
      }
    }

    .option:hover{
      background-color: #f5f7fa;
    }
  }
</style>