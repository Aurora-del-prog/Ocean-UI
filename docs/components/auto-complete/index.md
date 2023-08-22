# 自动填充  Auto Complete

## 基础用法

传入 fetchSuggestions 属性设置数据模型。

:::demo 传入 fetchSuggestions 属性设置数据模型

```vue
<template>
   <s-AutoComplete  
   placeholder="请输入文字" 
   :fetchSuggestions="handleFetch"
   v-model="model"
   ></s-AutoComplete>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'
  const model = ref('')
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins','james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const handleFetch = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }
</script>
```
:::

## 自定义搜索结果模板

使用 renderOption 插槽设置样式 。

:::demo 传入 fetchSuggestions 属性设置数据模型

```vue
<template>
   <s-AutoComplete  
   placeholder="输入 Github 用户名试试" 
   :fetchSuggestions="handleFetch"
   v-model="model"
   >
     <template #renderOption="item">
      <div>
        <b>名字: {{item.value}}</b>
        <span>球衣号码: {{item.number}}</span>
      </div>
    </template>
   </s-AutoComplete>
</template>
<script lang="ts" setup>
  import {ref} from 'vue'
  const model = ref('')
  const lakersWithNumber = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
  ] 
  const handleFetch = (query: string) => {
    return lakersWithNumber.filter(player => player.value.includes(query))
  }
  
</script>
```
:::

## 异步搜索

传入fetchSuggestions 异步函数设置数据模型。
:::demo 传入 fetchSuggestions 属性设置数据模型

```vue
<template>
   <s-AutoComplete  
   placeholder="输入 Github 用户名试试" 
   :fetchSuggestions="handleFetch"
   >
   </s-AutoComplete>
</template>
<script lang="ts" setup>
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }
  
</script>
```
:::