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
@import './assets/bootstrap.min.css';
@import './assets/fonts.css';
@import './assets/responsive.css';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'text';
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.disable-select {
    user-select: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
}
</style>

