<template>
  <div v-for="item in state.menuList">
    <router-link :to="item.path">{{ item.name }}</router-link>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  menuList: [
    { path: '/', name: '首页' },
    { path: '/inputNumber', name: '数字输入框' },
  ],
});
</script>

<style lang="scss" scoped></style>
