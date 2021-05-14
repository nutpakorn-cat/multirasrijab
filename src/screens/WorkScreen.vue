<template>
  <div>
    <Navbar :isWelcome="false" />
    <div class="container" style="margin-top:40px; margin-bottom: -10px;">
        <div class="row">
            <div class="col-md-7">
                <Lightbox />
            </div>
            <div class="col-md-5">
                <h4 style="font-family: medium; color: #909090;font-size: 23px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{topicName}}</h4>
                <h3 style="font-family: medium; color: white;font-size: 37px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workName}}</h3>
                <div class="row" style="margin-top: 40px;padding-left: 30px;">
                    <div class="col-md-3" style="margin-bottom: 18px;">
                        <div :style="{backgroundImage: 'url(' + work.workOwnerImage + ')'}" class="circle">
                            <div class="block text-center">{{work.workId}}</div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <br>
                        <h3 style="font-family: medium; color: white;font-size: 20px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerName}}</h3>
                        <h3 style="font-family: medium; color: white;font-size: 20px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerId}}</h3>
                    </div>
                </div>
                <a :href="work.workOwnerJournal" class="btn btn-theme" style="margin-right: 10px;">Journal</a>
                <a :href="work.workOwnerFacebook" class="btn btn-theme" style="margin-right: 10px;">FB</a>
                <a :href="work.workOwnerInstagram" class="btn btn-theme" style="margin-right: 10px;">IG</a>
                <a :href="'mailto:' + work.workOwnerEmail" class="btn btn-theme" style="margin-right: 10px;">EMAIL</a>
                <div class="text-box">
                    <p>{{work.workDescription}}</p>
                </div>
            </div>
        </div>
    </div>
    <FooterHasItem :leftId="work.leftId" :rightId="work.rightId" :topicPath="topicPath" />
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
  },
  data() {
    return {
      topicName: '',
      topicPath: '',
      workOwnerId: '',
      work: {}
    };
  },
  created() {
    this.topicName = this.$route.query.type;
    this.topicPath = 'animation';
    this.workOwnerId = this.$route.query.id;
    this.work = {
        workId: '1',
        workName: 'Work Name',
        workOwnerId: 'XXXXXXXXXXX',
        workOwnerImage: 'https://www.w3schools.com/w3css/img_lights.jpg',
        workOwnerName: 'XXXXXXXX XXXXXXXX',
        workOwnerJournal: 'https://www.google.com',
        workOwnerFacebook: 'https://www.google.com',
        workOwnerInstagram: 'https://www.google.com',
        workOwnerEmail: 'abc@abc.com',
        workDescription: 'ทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความทดสอบการใส่ข้อความ',
        leftId: '047',
        rightId: '002',
      };
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
  background-size: cover;
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