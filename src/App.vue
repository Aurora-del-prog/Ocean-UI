<script setup lang="ts">
import Button from "./Button/src/Button";
</script>

<template>
  <div class="flex-auto w-100 h-screen justify-center align-middle relative bg-white"  > 
    <div class="w-full h-16 left-1/2 top-1/3 absolute flex-auto">
      <Button type="primary" size="small" block>111</Button>
      <Button type="primary" size="medium">222</Button>
      <!-- Boolean  直接用值表示true/false -->
      <Button type="primary" size="large" disabled>333</Button>
    </div>
  </div>
</template>

<style scoped>
</style>
