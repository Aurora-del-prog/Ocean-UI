<template>
  <icon component="icon-guanbijiantou" size="30px" color="green"></icon>
  <icon component="icon-zengjia" :size="30" color="blue"></icon>
  <icon component="icon-baocun" :size="30" color="red"></icon>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { Table, Column } from './table'
import { Icon } from './icon'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
