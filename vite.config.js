/*
 * @Author: Qin Wenda
 * @Date: 2024-05-07 08:46:17
 * @LastEditors: Qin Wenda
 * @LastEditTime: 2024-05-07 08:50:56
 * @FilePath: \icr\vite.config.js
 * @Copyright: 2023 沈阳东软智睿放疗技术有限公司
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), wasm()],
  worker: {
    plugins: [wasm()],
  },
});
