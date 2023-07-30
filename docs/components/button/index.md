# Button 按钮

## 基础按钮

:::demo 基础按钮

```vue
<template>
  <h-button></h-button>
  <h-button type="primary" round>文本</h-button>
</template>
```

:::

## 按钮类型 type

:::demo 通过 type 属性设置按钮样式，可选：primary | secondary | text

```vue
<template>
  <h-button></h-button>
  <h-button type="primary"></h-button>
  <h-button type="text"></h-button>
  <h-button loading ></h-button>
</template>
```

:::

## 按钮尺寸 size

:::demo 通过 size 属性设置按钮样式，可选：small | medium | large
```vue
<template>
  <h-button size="small">Small</h-button>
  <h-button>Medium</h-button>
  <h-button size="large">Large</h-button>
</template>
```
:::


## 禁用按钮 disabled

:::demo 通过 disabled 属性禁用按钮
```vue
<template>
    <h-button type="primary"          
      @click="confirm">Primary</h-button>
    <h-button type="primary" disabled 
      @click="confirm">Disabled</h-button>
</template>
<script setup>
  const confirm = () => console.log('confirm')
</script>
```
:::

## 块级按钮 block

:::demo 通过 block 属性设置按钮为块级
```vue
<template>
  <h-button type="primary" block>Confirm</h-button>
  <h-button block>Cancel</h-button>
</template>
```
:::