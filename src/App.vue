<!--
 * @Author: Qin Wenda
 * @Date: 2024-05-07 08:46:16
 * @LastEditors: Qin Wenda
 * @LastEditTime: 2024-05-07 08:48:49
 * @FilePath: \icr\src\App.vue
 * @Copyright: 2023 沈阳东软智睿放疗技术有限公司
-->
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import ICRPolySeg from "@icr/polyseg-wasm";

console.log(new ICRPolySeg());
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
