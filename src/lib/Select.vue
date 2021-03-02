<template>
  <div class="cloud-select">
    <div
      class="result"
      @click="openOptions"
    >{{ data[curIdx].text }}
    </div>
    <div
      class="options"
      v-show="optionsShow"
    >
      <div
        class="option"
        v-for="(item, index) of data"
        :key="item.id"
        @click="setOption(index, item)"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';

export default {
  name: 'Select',
  props: {
    data: Array,
    currentIndex: {
      type: Number,
      default: 0
    },
    callback: Function,
    setup(props) {
      const state = reactive({
        curIdx: props.currentIndex,
        optionsShow: false
      })

      return {
        ...toRefs(state)
      }
    }
  }
};
</script>

<style></style>