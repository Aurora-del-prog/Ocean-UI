# 图标 Icon

## 基本用法

设置图标字体中 name 或者远程资源地址。 
:::demo

```vue
<template>
  <s-icon name="icon-zengjia"></s-icon>
  <s-icon name="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" width="80px"></s-icon>
  <s-icon name="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" :width="80"></s-icon>
</template>
```
:::

## 尺寸

设置 size 可以设置图标尺寸 
:::demo 设置 size 可以设置图标尺寸

```vue
<template>
  <s-icon name="icon-guanbijiantou" size="30px"></s-icon>
  <s-icon name="icon-zengjia" :size="30"></s-icon>
   <s-icon name="icon-baocun" :size="30"></s-icon>
</template>
```

:::

## 颜色

设置 color 可以设置图标颜色 
:::demo 设置为合法的颜色字符串即可

```vue
<template>
  <s-icon name="icon-guanbijiantou" size="30px" color="green"></s-icon>
  <s-icon name="icon-zengjia" :size="30" color="blue"></s-icon>
   <s-icon name="icon-baocun" :size="30" color="red"></s-icon>
</template>
```

:::

## svg 图标
设置component可以显示svg图标。
:::demo component设置为symbolId即可

```vue
<template>
  <s-icon component="icon-guanbijiantou" size="30px" ></s-icon>
  <s-icon component="icon-zengjia" :size="30" ></s-icon>
  <s-icon component="icon-baocun" :size="30" ></s-icon>
</template>
```

:::
