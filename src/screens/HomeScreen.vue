<template>
  <div>
    <Navbar :isWelcome="false" />
    <div class="container">
      <div class="row" style="margin-top: 82px; margin-bottom: 100px;">
      <div class="col-md-8">
        <div class="player">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ptb3fZ_hKc8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-md-4">
        <h1 style="font-family: medium; color: white;font-size: 74px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">ราศรีจับ</h1>
        <div style="width: 250px;word-break: break-word;">
          <p style="color: white;font-size: 16px;text-shadow: rgb(0 0 0) 0px 0px 9px, rgb(0 0 0) 0px 0px 9px;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
        </div>
      </div>
    </div>
    </div>
    <FooterNoCenter />
  </div>
</template>

<script>
import Navbar from './../components/Navbar';
import FooterNoCenter from './../components/FooterNoCenter';

export default {
  beforeCreate: function() {
    document.body.className = 'home';
  },
  name: 'HomeScreen',
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
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
  height: 315px;
  width: 560px;
  margin-left: auto;
  margin-right: auto;
}
</style>