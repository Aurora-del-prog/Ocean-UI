# 输入框  Input

## 基础用法

传入 model 属性设置数据模型。

:::demo 传入 model 属性设置数据模型

```vue
<template>
   <s-input v-model="model.user" placeholder="请输入文字"><br/>
</template>
<script setup>
  import {ref} from 'vue'
  const model = ref({
    user: 'tom'
  })
</script>
```
:::

## 被禁用的 Input

传入 model 属性设置数据模型。

:::demo 传入 disabled

```vue
<template>
   <s-input 
   placeholder="请输入文字"
   disabled
   >
</template>

```
:::

## 带图标的 Input

设置图标字体中 name 或者远程资源地址, iconSize控制图标大小。

:::demo 

```vue
<template>
   <s-input 
   placeholder="请输入文字"
   name="icon-rili"
   iconSize="15px"
   >
</template>

```
:::
