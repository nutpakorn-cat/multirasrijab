<template>
  <div>
    <Navbar :isWelcome="false" />
    <div class="container" style="margin-top:40px; margin-bottom: -10px;">
        <div class="row">
            <div class="col-md-7">
                <Lightbox />
            </div>
            <div class="col-md-5">
                <h4 style="font-family: medium; color: #909090;font-size: 23px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">Animation</h4>
                <h3 style="font-family: medium; color: white;font-size: 37px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">Work Name</h3>
                <div class="row" style="margin-top: 40px;padding-left: 30px;">
                    <div class="col-md-3" style="margin-bottom: 18px;">
                        <div class="circle">
                            <div class="block text-center">1</div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <br>
                        <h3 style="font-family: medium; color: white;font-size: 20px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">XXXXXXXX XXXXXXXXXXX</h3>
                        <h3 style="font-family: medium; color: white;font-size: 20px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">XXXXXXXXXXX</h3>
                    </div>
                </div>
                <a href="#" class="btn btn-theme" style="margin-right: 10px;">Journal</a>
                <a href="#" class="btn btn-theme" style="margin-right: 10px;">FB</a>
                <a href="#" class="btn btn-theme" style="margin-right: 10px;">IG</a>
                <a href="#" class="btn btn-theme" style="margin-right: 10px;">EMAIL</a>
                <div class="text-box">
                    <p>ทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความ</p>
                </div>
            </div>
        </div>
    </div>
    <FooterHasItem />
  </div>
</template>

<script>
import Navbar from './../components/Navbar';
import FooterHasItem from './../components/FooterHasItem';
import Lightbox from './../components/Lightbox';

export default {
  beforeCreate: function() {
    document.body.className = 'work';
  },
  name: 'WorkScreen',
  components: {
    Lightbox,
    Navbar,
    FooterHasItem
  }
}
</script>

<style>
a.btn-theme:hover {
    color: #ffffff;
    text-decoration: none;
}
.btn-theme {
    border-radius: 17px;
    color: #fff;
    background-color: #000000;
    border-color: #ffffff;
}
body.work { 
  background: url('https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Works_Animation.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

<style scoped>
.text-box {
    margin-top: 60px;
    padding: 20px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;
}
.circle {
  height: 80px;
  width: 80px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 20px;
}
.block {
    font-family: 'text';
    position: relative;
    left: -40px;
    height: 25px;
    width: 25px;
    background-color: black;
    border: 1px solid white;
    color: white;
    padding-top: 2px;
}
</style>