<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import './assets/fonts.css';
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'text';
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
</style>

