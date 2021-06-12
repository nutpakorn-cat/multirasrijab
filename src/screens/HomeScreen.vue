<template>
  <div>
    <Navbar :isWelcome="false" />
    <div v-if="!success" class="text-center" style="margin-top: 90px;margin-bottom: 290px;"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    <div v-if="success" class="container text-center height-device">
      <div class="row" style="margin-top: 82px; margin-bottom: 100px;">
      <div class="col-md-7">
        <div class="player player-margin player-padding" v-html="homeData.mediaClip">
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
      success: false
    };
  },
  async created() {
    const data = await axios.get(require('./../host') +'/home');
    this.homeData = data.data;
    this.success = true;
  },
  components: {
    Navbar,
    FooterNoCenter
  }
}
</script>

<style>
body.home { 
  background: linear-gradient(to right, #000000ab, #000000ab), url('https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Home.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

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

  .header-font {
    font-size: 74px;
  }
  .description-font {
    font-size: 16px;
  }
  .description-block {
    width: 250px;
  }
}

@media (min-width: 677px) and (max-width: 767px) {
  .header-font {
    font-size: 50px;
  }
  .description-font {
    font-size: 14px;
  }
  .description-block {
    width: 217px;
  }
}

@media (min-width: 489px) and (max-width: 676px) {
  .header-font {
    font-size: 50px;
  }
  .description-font {
    font-size: 14px;
  }
}

@media (min-width: 427px) and (max-width: 488px) {
  .header-font {
    font-size: 42px;
  }
  .description-font {
    font-size: 14px;
  }
}

@media (max-width: 426px) {
  .header-font {
    font-size: 33px;
  }
  .description-font {
    font-size: 12px;
  }
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