<template>
    <div
      class="result"
    >
      <input
        class="cloud-select"
        :disabled="disable"
        :value='data[curIdx] ? data[curIdx].text : null'
        placeholder="请选择"
        @click.stop="openOptions"
        @blur="closeOptions"
      />
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
          :disabled="item.disable"
        >
          {{ item.text }}
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  name: 'cloud-select',
  props: {
    data: Array,
    currentIndex: {
      type: Number
    },
    callback: Function,
    disable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    //声明响应式数据
    const state = reactive({
      flag: null,
      curIdx: null,
      optionsShow: false
    })

    const setOption = (index, item) => {
      if( item.disable === true){
        state.flag = index;
        return;
      }
      state.curIdx = index;
      state.optionsShow = false;
      props.callback(index, item);
    }

    const openOptions = () => {
      state.optionsShow = !state.optionsShow;
    }

    const closeOptions = () => {
      setTimeout(() => {
        if( props.data[state.flag] && props.data[state.flag].disable === true ){
          state.flag = null;
          return;
        }
        state.optionsShow = false;
      }, 150)
    }

    document.getElementById('app').addEventListener('click', () => {
      state.optionsShow = false;
    })

    return {
      ...toRefs(state),
      setOption,
      openOptions,
      closeOptions
    }
  }
};
</script>

<style lang="scss">
  $h: 40px;
  $w: 200px;
  $size: 14px;
  $grey: grey;
  $disable-color: #c0c4cc;
  $border-color: #d9d9d9;

  input {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  input:hover {
    cursor: pointer;
  }

  input::-webkit-input-placeholder {
    color: $disable-color;
    font-size: $size;
  }

  .cloud-select {
    width: $w;
    height: $h;
    line-height: $h;
    font-size: $size;
    padding-left: 10px;
    border: 1px solid $border-color;
    border-radius: 5px;

    &[disabled] {
      cursor: not-allowed;
      color: $disable-color;
      background-color: #f5f7fa;
    }
  }

  .cloud-select:focus {
    outline: none;
    border: 1px solid #409eff;
    border-radius: 5px;
  }

  .options {
    width: $w;
    margin-top: 12px;
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
      top:-$h + 24px;
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
      border-width:8px;
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
        font-weight: bold;
      }

      &[disabled] {
        cursor: not-allowed;
        color: $disable-color;
        border-color: $grey;

        &:hover {
          border-color: $grey;
          background-color: #fff;
        }
      }
    }

    .option:hover{
      background-color: #f5f7fa;
    }
  }
</style>