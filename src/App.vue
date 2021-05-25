<template>
  <div>
    <div v-if="isLoading" :class="{loading: true, 'animate__animated animate__fadeOut': isFade}"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
    <router-view class="animate__animated animate__fadeIn"></router-view>
    <div @click="scrollTop" v-if="isShowTop" :style="{backgroundImage: 'url(' + require('@/assets/PNG/Topic_Bottom_Button.png') + ')'}" :class="{'scroll-to-top': true, 'animate__animated animate__fadeIn': isShowTop}"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: false,
      isFade: false,
      isLoading: true,
      isShowTop: false,
    };
  },
  watch: {
    $route (to, from) {
      if (!this.count) {
        this.isLoading = true;
        this.isFade = false;
        setTimeout(() => {
          this.isLoading = false;
        }, 2300);
        setTimeout(() => {
          this.isFade = true;
        }, 1300);
        this.count = true;
      } else {
        this.isLoading = true;
        this.isFade = false;
        setTimeout(() => {
          this.isLoading = false;
        }, 1600);
        setTimeout(() => {
          this.isFade = true;
        }, 600);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

      if (bottomOfWindow) {
        this.isShowTop = true;
      } else {
        this.isShowTop = false;
      }
    },
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
@import './assets/bootstrap.min.css';
@import './assets/fonts.css';
@import './assets/responsive.css';

.scroll-to-top {
    position: fixed;
    bottom: 29px;
    left: 0;
    right: 0;
    width: 60px;
    margin: 1px auto;
    height: 60px;
    background-position: center center;
    background-size: contain;
    cursor: pointer;
}

@media (max-height: 799px) {
  .height-device {
    margin-top: 0px;
  }
  .height-device-small {
    margin-bottom: 0px;
  }
}

@media (min-height: 800px) {
  .height-device {
    margin-top: 200px;
  }
  .height-device-small {
    margin-bottom: 100px;
  }
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

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

@media (min-width: 999px) {
  .text-footer {
    font-size: 16px;
  }
}

@media (min-width: 625px) and (max-width: 998px) {
  .text-footer {
    font-size: 12px;
  }
}

@media (min-width: 440px) and (max-width: 624px) {
  .text-footer {
    font-size: 7px;
  }
}

@media (max-width: 439px) {
  .text-footer {
    font-size: 5px;
  }
}

</style>

