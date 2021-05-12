<template>
  <div>
    <Navbar :isWelcome="false" />
    <div class="container" style="margin-bottom: 100px;">
      <div class="row" style="margin-top: 50px; margin-bottom: 130px;">
        <div class="col-md-6">
          <h1 style="font-family: medium; color: white;font-size: 100px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">ราศรีจับ</h1>
          <div style="width: 325px;word-break: break-word;">
            <p style="color: white;font-size: 24px;text-shadow: rgb(0 0 0) 0px 0px 9px, rgb(0 0 0) 0px 0px 9px;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>
          <br>
          <img width="180" :src="require('@/assets/LOGO-BAR/SWU_College_Social_Communication_Innovation_EN_White.png')">
          &nbsp;
          <img width="150" :src="require('@/assets/LOGO-BAR/logo_multi_white.png')">
        </div>
        <div class="col-md-6">
          <div style="width: 400px;word-break: break-word;">
            <p style="color: white;font-size: 30px;text-shadow: rgb(0 0 0) 0px 0px 9px, rgb(0 0 0) 0px 0px 9px;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>
        </div>
      </div>
      <h1 class="text-center" style="color: white;margin-bottom: 80px;">SPECIAL THANKS</h1>
      <div class="row text-center">
        <div class="col-md-3">
          <div class="circle"></div>
          <h3 style="color: white;">NAME</h3>
        </div>
        <div class="col-md-3">
          <div class="circle"></div>
          <h3 style="color: white;">NAME</h3>
        </div>
        <div class="col-md-3">
          <div class="circle"></div>
          <h3 style="color: white;">NAME</h3>
        </div>
        <div class="col-md-3">
          <div class="circle"></div>
          <h3 style="color: white;">NAME</h3>
        </div>
      </div>
    </div>
    <FooterNotFix />
  </div>
</template>

<script>
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
.circle {
  height: 200px;
  width: 200px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 30px;
}
</style>