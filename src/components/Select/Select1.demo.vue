<demo>
常规使用
</demo>
<template>
  <div>
    <select :data="data" :currentIndex="curIdx" :callback="setOption">默认选择器</select>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const curIdx = ref(1);

    const data = [
      {
        id: 1,
        value: 'orange',
        text: '橙子'
      },
      {
        id: 2,
        value: 'apple',
        text: '苹果'
      },
      {
        id: 3,
        value: 'pear',
        text: '梨'
      },
    ];

    const setOption = (index, item) => {

    }

    return {
      data,
      curIdx,
      setOption
    };
  }
};
</script>