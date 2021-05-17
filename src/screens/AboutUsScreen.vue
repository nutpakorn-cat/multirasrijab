<template>
  <div>
    <Navbar :isWelcome="false" />
    <div v-if="!success" class="text-center" style="margin-top: 90px;margin-bottom: 290px;"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    <div v-if="success" class="container" style="margin-bottom: 100px;">
      <div class="row" style="margin-top: 50px; margin-bottom: 130px;">
        <div class="col-md-6">
          <h1 class="header-font" style="font-family: medium; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{aboutusData.header}}</h1>
          <div style="word-break: break-word;">
            <p class="content-font" style="color: white;text-shadow: rgb(0 0 0) 0px 0px 9px, rgb(0 0 0) 0px 0px 9px;">{{aboutusData.header2}}</p>
          </div>
          <div class="img-margin">
            <img class="l-img-size" :src="require('@/assets/LOGO-BAR/SWU_College_Social_Communication_Innovation_EN_White.png')">
            &nbsp;
            <img style="margin-top: -3px;" class="m-img-size" :src="require('@/assets/LOGO-BAR/logo_iamd_white.png')">
            &nbsp;
            <img class="r-img-size" :src="require('@/assets/LOGO-BAR/logo_multi_white.png')">
          </div>
        </div>
        <div class="col-md-6">
          <div style="word-break: break-word;">
            <p class="right-font" style="color: white;text-shadow: rgb(0 0 0) 0px 0px 9px, rgb(0 0 0) 0px 0px 9px;" v-html="aboutusData.content"></p>
          </div>
        </div>
      </div>
      <h1 class="text-center special-font" style="color: white;margin-bottom: 80px;">SPECIAL THANKS</h1>
      <div class="row text-center" style="margin-bottom: -50px;">
        <div v-for="person in aboutusData.specialThanks" v-bind:key="person.image" class="col-md-3">
          <div :style="{backgroundImage: 'url(' + person.image + ')'}" class="circle"></div>
          <h3 class="name-font" style="color: white;">{{person.personName}}</h3>
        </div>
      </div>
    </div>
    <FooterNotFix />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './../components/Navbar';
import FooterNotFix from './../components/FooterNotFix';

export default {
  beforeCreate: function() {
    document.body.className = 'aboutus';
  },
  name: 'AboutUsScreen',
  components: {
    Navbar,
    FooterNotFix
  },
  data() {
    return {
      aboutusData: {},
      success: false
    };
  },
  async created() {
    const data = await axios.get(require('./../host') +'/about-us');
    this.aboutusData = data.data;
    this.success = true;
  }
}
</script>

<style>
body.aboutus { 
  background: url('https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_About_us.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<style scoped>
@media (min-width: 874px) {
  .name-font {
    font-size: 19px;
  }
  .special-font {
    font-size: 40px;
  }
  .img-margin {
    margin-top: 40px;
  }
  .l-img-size {
    width: 140px;
  }
  .m-img-size {
    width: 70px;
  }
  .r-img-size {
    width: 110px;
  }
  .header-font {
    font-size: 100px;
  }
  .content-font {
    font-size: 24px;
  }
  .right-font {
    font-size: 30px;
  }
  .circle {
    background-size: cover;
    background-position: center center;
    height: 200px;
    width: 200px;
    
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 30px;
  }
}

@media (min-width: 725px) and (max-width: 991px) {
  .circle {
    background-size: cover;
    background-position: center center;
    height: 160px;
    width: 160px; 
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 30px;
  }
}

@media (min-width: 622px) and (max-width: 724px) {
  .circle {
    background-size: cover;
    background-position: center center;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 30px;
  }
}

@media (min-width: 702px) and (max-width: 873px) {
  .name-font {
    font-size: 13px;
  }
  .special-font {
    font-size: 37px;
  }
  .img-margin {
    margin-top: 40px;
  }
  .l-img-size {
    width: 120px;
  }
  .m-img-size {
    width: 50px;
  }
  .r-img-size {
    width: 90px;
  }
  .header-font {
    font-size: 80px;
  }
  .content-font {
    font-size: 18px;
  }
  .right-font {
    font-size: 27px;
  }
}

@media (min-width: 622px) and (max-width: 701px) {
  .name-font {
    font-size: 13px;
  }
  .special-font {
    font-size: 35px;
  }
  .img-margin {
    margin-top: 40px;
  }
  .l-img-size {
    width: 110px;
  }
  .m-img-size {
    width: 40px;
  }
  .r-img-size {
    width: 80px;
  }
  .header-font {
    font-size: 80px;
  }
  .content-font {
    font-size: 18px;
  }
  .right-font {
    font-size: 27px;
  }
}

@media (min-width: 542px) and (max-width: 621px) {
  .name-font {
    font-size: 13px;
  }
  .special-font {
    font-size: 32px;
  }
  .img-margin {
    margin-top: 30px;
  }
  .l-img-size {
    width: 90px;
  }
  .m-img-size {
    width: 40px;
  }
  .r-img-size {
    width: 60px;
  }
  .header-font {
    font-size: 50px;
  }
  .content-font {
    font-size: 16px;
  }
  .right-font {
    font-size: 20px;
  }
  .circle {
    background-size: cover;
    background-position: center center;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 30px;
  }
}

@media (max-width: 541px) {
  .name-font {
    font-size: 10px;
  }
  .special-font {
    font-size: 30px;
  }
  .img-margin {
    margin-top: 22px;
  }
  .l-img-size {
    width: 70px;
  }
  .m-img-size {
    width: 30px;
  }
  .r-img-size {
    width: 40px;
  }
  .header-font {
    font-size: 40px;
  }
  .content-font {
    font-size: 16px;
  }
  .right-font {
    font-size: 20px;
  }
  .circle {
    background-size: cover;
    background-position: center center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 30px;
  }
}
</style>