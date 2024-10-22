<script setup>
import {ref}  from 'vue'
import { PersonalButton } from "vite-project";
import { MyComponent } from "my-vue-package";

const isShow = ref(false)
function MyComponentClickEvent() {
  console.log("custom component function click event");
  isShow.value=!isShow.value
}
</script>

<template>
  <div class="package-demo">
    <PersonalButton text="hello from child Using TS" />
    <vue-button-yy>Hello</vue-button-yy>
  </div>
  <MyComponent @componentClick="MyComponentClickEvent" :is-show="isShow"/>
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

.package-demo {
  justify-content: space-between;
  display: flex;
  padding: 10px;
  border: 3px solid #42b883aa;
}
</style>
