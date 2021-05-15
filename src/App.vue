<template>
  <div>
    <div v-if="isLoading" :class="{loading: true, 'animate__animated animate__fadeOut': isFade}"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    <router-view class="animate__animated animate__fadeIn"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: false,
      isFade: false,
      isLoading: true
    };
  },
  watch: {
    $route (to, from) {
      if (!this.count) {
        this.isLoading = true;
        this.isFade = false;
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
        setTimeout(() => {
          this.isFade = true;
        }, 1000);
        this.count = true;
      } else {
        this.isLoading = true;
        this.isFade = false;
        setTimeout(() => {
          this.isLoading = false;
        }, 1400);
        setTimeout(() => {
          this.isFade = true;
        }, 400);
      }
    }
  },
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
  background-color: rgb(0, 0, 0); 
}

.lds-ellipsis {
  display: inline-block;
  position: fixed;
  width: 80px;
  height: 80px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
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

