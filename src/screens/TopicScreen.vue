<template>
  <div>
    <Navbar :isWelcome="false" />
    <div class="container" style="margin-top:50px;">
        <h1 style="font-family: medium; color: white;font-size: 50px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{ topicName }}</h1>
        <div class="row" style="margin-top: 40px;">
            <div v-for="(work, i) in workList" v-bind:key="work.workName" @click="goPage(work.workId)" class="col-md-6 data" style="margin-bottom: 70px;">
                <div class="row">
                    <div class="col-md-6">
                        <div :style="{backgroundImage: 'url(' + work.workImage + ')'}" class="thumbnail">
                            <div class="block text-center">{{i+1}}</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h3 style="font-family: medium; color: white;font-size: 25px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workName}}</h3>
                        <h4 style="font-family: medium; color: white;font-size: 20px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workText}}</h4>
                        <div class="row" style="margin-top: 15px;">
                            <div class="col-md-6">
                                <div :style="{backgroundImage: 'url(' + work.workOwnerImage + ')'}" class="circle"></div>
                            </div>
                            <div class="col-md-6" style="padding-top: 8px;">
                                <h5 style="font-family: medium; color: white;font-size: 15px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerName}}</h5>
                                <h5 style="font-family: medium; color: white;font-size: 15px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerId}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterNotFix />
  </div>
</template>

<script>
import Navbar from './../components/Navbar';
import FooterNotFix from './../components/FooterNotFix';
import axios from 'axios';

export default {
  beforeCreate: function() {
    document.body.className = 'topic';
  },
  name: 'TopicScreen',
  components: {
    Navbar,
    FooterNotFix
  },
  data() {
      return {
          topicName: '',
          topicPath: '',
          workList: []
      };
  },
  watch: {
    $route (to, from) {
        this.fetchData();
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
      goPage(workOwnerId) {
          this.$router.push('/work/' + this.topicPath + '/' + workOwnerId);
      },
      async fetchData() {
        this.topicPath = this.$route.params.type;

        const topicNameData = await axios.post(require('./../host') + '/topic', {
            topicPath: this.topicPath
        });

        this.topicName = topicNameData.data.topicName;

        const workListData = await axios.get(require('./../host') +'/work');
        this.workList = workListData.data;
      }
  }
}
</script>

<style>
body.topic { 
  background: url('https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Topic_Animation.jpg') no-repeat center center fixed; 
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
.thumbnail {
    height: 100%;
    width: 100%;
    background-size: cover;
}
.block {
    font-family: 'text';
    position: relative;
    left: -30px;
    height: 30px;
    width: 30px;
    background-color: black;
    border: 1px solid white;
    color: white;
    padding-top: 2px;
}
.circle {
  height: 80px;
  width: 80px;
  background-size: cover;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 20px;
}
.data {
    cursor: pointer;
}
</style>