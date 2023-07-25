/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJSX()],
  test: {
    // jest like test apis
    globals: true,
    // 模拟dom环境
    environment: 'happy-dom',
    // 支持tsx
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});
