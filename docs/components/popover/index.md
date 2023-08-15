# Popover 弹出框
## 基础
popover 提供不同方向的展示方式和触发方法，详细信息见下方文档
:::demo
```vue
<template>
  <div class="demo-popover">
    <SPopover 
      trigger="click"
      placement="top-start"
      showArrow
      title="121212">
      fsfsfshahahahah
      <template #reference>
          <s-button size="medium">click激活</s-button>
      </template>
    </SPopover>
    <SPopover 
      trigger="hover"
      placement="right-start"
      showArrow
      title="121212">
      <template #reference>
          <s-button size="medium">hover激活</s-button>
        </template>
    </SPopover>
    <SPopover 
      trigger="focus"
      placement="bottom-end"
      showArrow
      title="121212">
      <template #reference>
          <s-button size="medium">focus激活</s-button>
      </template>
    </SPopover>
    <SPopover 
      trigger="manual"
      v-model="visible"
      placement="left-end"
      showArrow
      title="121212"
    >
      <template #reference>
          <s-button size="medium" @click="handler">手动激活</s-button>
      </template>
    </SPopover>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref(false)

    const handler = () => {
      visible.value = !visible.value;
    }

    return {
      visible,
      handler,
    }
  }
})
</script>

<style scoped>
.demo-popover {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.space {
  padding: 16px;
}
</style>
```
:::
