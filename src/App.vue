<template>
  <div>
    <div v-if="isLoading" class="loading"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoading: true
    };
  },
  watch: {
    $route (to, from) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1400);
    }
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1400);
  }
}
</script>

<style>
@import './assets/bootstrap.min.css';
@import './assets/fonts.css';
@import './assets/responsive.css';

.loading {
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
}

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

