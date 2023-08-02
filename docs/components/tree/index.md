# 树 🌲

## 基础功能

Tree 组件基本用法，传入`data`属性即可。 
:::demo Tree 组件基本用法，传入 data 属性
```vue
<template>
  <STree :data="data"></STree>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'docs',
    id: 'docs'
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue'
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        children: [
          {
            label: 'src',
            id: 'src'
          },
          {
            label: 'README.md',
            id: 'README.md'
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
])
</script>
```

:::


## 连接线

展开节点之后设置连接线便于分辨同级节点。通过`lineable`属性控制特性开关，默认 false。 
:::demo 通过`lineable`属性控制特性开关，默认 false

```vue
<template>
  <STree :data="data" lineable></STree>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'docs',
    id: 'docs'
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue'
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        children: [
          {
            label: 'src',
            id: 'src'
          },
          {
            label: 'README.md',
            id: 'README.md'
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
])
</script>
```

:::

## 级联选择

通过复选框可以多选节点，这样可以批量操作节点。 
:::demo 通过`checkable`属性控制特性开关，默认 false

```vue
<template>
  <STree :data="data" checkable></STree>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'docs',
    id: 'docs',
    checked: true
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    checked: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue',
        checked: true
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        checked: true,
        children: [
          {
            label: 'src',
            id: 'src',
            checked: true
          },
          {
            label: 'README.md',
            id: 'README.md',
            checked: true
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
])
</script>
```
:::
