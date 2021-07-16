<template>
  <div>
    <Navbar :isWelcome="false" />
    <div v-if="!success" class="text-center" style="margin-top: 90px;margin-bottom: 290px;"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    <div v-if="success" class="container text-center height-device">
      <div class="row" style="margin-top: 82px; margin-bottom: 100px;">
      <div class="col-md-7">
        <div class="player player-margin player-padding" v-html="homeData.mediaClip.replace('autoplay=1', 'autoplay=1&muted=1')">
        </div>
      </div>
      <div class="col-md-5">
        <h1 class="header-font" style="font-family: medium; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{homeData.header}}</h1>
        <div class="description-block" style="margin-left: auto; margin-right: auto;word-break: break-word;">
          <p class="description-font" style="color: white;text-shadow: rgb(0 0 0) 0px 0px 9px, rgb(0 0 0) 0px 0px 9px;">{{homeData.content}}</p>
        </div>
      </div>
    </div>
    </div>
    <FooterNoCenter />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './../components/Navbar';
import FooterNoCenter from './../components/FooterNoCenter';

export default {
  beforeCreate: function() {
    document.body.className = 'home';
  },
  name: 'HomeScreen',
  data() {
    return {
      homeData: {},
      graphic: {},
      success: false,
      windowWidth: 0,
      header1c: 768,
      header2ca: 677,
      header2cb: 767, 
      header3ca: 489,
      header3cb: 676,
      header4ca: 427,
      header4cb: 488,
      header5c: 426,
      header1: "74",
      header2: "-24",
      header3: "-24",
      header4: "-32",
      header5: "-41",
      des1c: 768,
      des1: "16",
      des2ca: 677,
      des2cb: 767,
      des2: "-2",
      des3ca: 478,
      des3cb: 676,
      des3: "-2",
      des4ca: 427,
      des4cb: 488,
      des4: "-2",
      des5c: 426,
      des5: "-4"
    };
  },
  watch: {
        
  },
  mounted() {
      this.$nextTick(() => {
          window.addEventListener('resize', this.onResize);
      });
  },
  beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
  },
  methods: {
    dec(a, b) {
      return ((parseInt(a) + parseInt(b) <= 0) ? 5 : parseInt(a) + parseInt(b));
    },
    onResize() {
      console.log(document.querySelector('.header-font').style.fontSize);
      if (window.innerWidth > this.header1c) {
        document.querySelector('.header-font').style.fontSize = this.header1 + 'px';
      } else if (window.innerWidth >= this.header2ca && window.innerWidth <= this.header2cb) {
        document.querySelector('.header-font').style.fontSize = this.dec(this.header1, this.header2) + 'px';
      } else if (window.innerWidth >= this.header3ca && window.innerWidth <= this.header3cb) {
        document.querySelector('.header-font').style.fontSize = this.dec(this.header1, this.header3) + 'px';
      } else if (window.innerWidth >= this.header4ca && window.innerWidth <= this.header4cb) {
        document.querySelector('.header-font').style.fontSize = this.dec(this.header1, this.header4) + 'px';
      } else if (window.innerWidth >= this.header5c) {
        document.querySelector('.header-font').style.fontSize = this.dec(this.header1, this.header5) + 'px';
      }

      if (window.innerWidth > this.des1c) {
        document.querySelector('.description-font').style.fontSize = this.des1 + 'px';
      } else if (window.innerWidth >= this.des2ca && window.innerWidth <= this.des2cb) {
        document.querySelector('.description-font').style.fontSize = this.dec(this.des1, this.des2) + 'px';
      } else if (window.innerWidth >= this.des3ca && window.innerWidth <= this.des3cb) {
        document.querySelector('.description-font').style.fontSize = this.dec(this.des1, this.des3) + 'px';
      } else if (window.innerWidth >= this.des4ca && window.innerWidth <= this.des4cb) {
        document.querySelector('.description-font').style.fontSize = this.dec(this.des1, this.des4) + 'px';
      } else if (window.innerWidth >= this.des5c) {
        document.querySelector('.description-font').style.fontSize = this.dec(this.des1, this.des5) + 'px';
      }
    },
  },
  async created() {
    const setting = await axios.post(require('./../host') +'/setting', {
          tableName: 'homeSetting'
      });
      this.header1 = setting.data.header1;
      this.des1 = setting.data.des1;
    const graphicData = await axios.get(require('./../host') +'/graphic');
    this.graphic = graphicData.data;
    document.body.style = "background: linear-gradient(to right, #000000ab, #000000ab), url('" + this.graphic['home'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";

    const data = await axios.get(require('./../host') +'/home');
    this.homeData = data.data;
    this.success = true;
    setTimeout(() => {
      this.onResize();
    }, 100);
  },
  components: {
    Navbar,
    FooterNoCenter
  }
}
</script>

<style scoped>
.player {
  position: relative;
  width: 100%;
  height: 0;
  border-radius: 10px;
  overflow: hidden;
  z-index: -1;
  margin-left: auto;
  margin-right: auto;
}

.player iframe {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-width: 768px) {
  .description-block {
    width: 250px;
  }
}

@media (min-width: 677px) and (max-width: 767px) {
  .description-block {
    width: 217px;
  }
}

@media (min-width: 489px) and (max-width: 676px) {
}

@media (min-width: 427px) and (max-width: 488px) {
}

@media (max-width: 426px) {
}

@media (min-width: 819px) {
  .player-margin {
    margin-top: 0px;
  }
}

@media (min-width: 719px) and (max-width: 818px) {
  .player-margin {
    margin-top: 22px;
  }
}

@media (min-width: 672px) and (max-width: 718px) {
  .player-margin {
    margin-top: 12px;
  }
}

@media (min-width: 589px) and (max-width: 671px) {
  .player-margin {
    margin-top: 20px;
  }
}

@media (min-width: 501px) and (max-width: 588px) {
  .player-margin {
    margin-top: 30px;
  }
}

@media (min-width: 501px) {
  .player-padding {
    padding-bottom: 56.25%;
  }
}

@media (max-width: 500px) {
  .player-padding {
    padding-bottom: 108.25%;
  }
  .player-margin {
    margin-top: 20px;
  }
}
</style>