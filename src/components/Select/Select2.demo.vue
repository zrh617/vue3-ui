<demo>
支持禁用选项
</demo>
<template>
  <div>
    <Select :data="data" :currentIndex="curIdx" :callback="setOption"></Select>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const curIdx = ref(0);

    const data = [
      {
        id: 1,
        value: 'orange',
        text: '橙子'
      },
      {
        id: 2,
        value: 'apple',
        text: '苹果',
        disable: true
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