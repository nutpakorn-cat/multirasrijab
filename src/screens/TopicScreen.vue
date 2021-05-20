<template>
  <div>
    <Navbar :isWelcome="false" />
    <div class="height-device-small">
      <div v-if="!workList.length" class="text-center" style="margin-top: 90px;margin-bottom: 290px;"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
      <div v-if="workList.length" class="container" style="margin-top:50px;">
          <h1 style="font-family: medium; color: white;font-size: 50px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{ topicName }}</h1>
          <div class="row" style="margin-top: 40px;">
              <div v-for="work in workList" v-bind:key="work.workName" @click="goPage(work.workOwnerId)" class="col-md-6 data col-size" style="margin-bottom: 70px;">
                  <div class="row">
                      <div class="col-md-6">
                          <div :style="{backgroundImage: 'url(' + work.workImage + ')'}" class="thumbnail">
                              <div class="block text-center">{{work.workId}}</div>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <h3 class="project-name-font" style="font-family: medium; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;" v-html="work.workName.replace('(', '<br>(')"></h3>
                          <h4 class="text-font" style="font-family: medium; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workText}}</h4>
                          <div class="row" style="margin-top: 15px;">
                              <div class="col-md-4 text-center">
                                  <div :style="{backgroundImage: 'url(' + work.workOwnerImage + ')'}" class="circle"></div>
                              </div>
                              <div class="col-md-8" style="padding-top: 8px;">
                                  <h5 class="name-font" style="font-family: medium; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerName.split(' ')[0]}}<br>{{work.workOwnerName.split(' ')[1]}}<abc v-if="work.workOwnerName.split(' ').length > 2"><br>{{work.workOwnerName.split(' ')[2]}}</abc></h5>
                                  <h5 class="id-font" style="font-family: medium; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerId}}</h5>
                              </div>
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
      document.querySelector('body').style.backgroundImage = '';
      if (!this.$route.path.includes('work')) {
        if (this.$route.path.includes('animation'))
          document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Topic_Animation.jpg")';
        if (this.$route.path.includes('installation'))
          document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Topic_Installation.jpg")';
        if (this.$route.path.includes('corporate-and-brand-identity'))
          document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Topic_CI.jpg")';
        if (this.$route.path.includes('campaigns'))
          document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Topic_Campaign.jpg")';
        if (this.$route.path.includes('interactive'))
          document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Interactive_Medoa.jpg")';
      }
      this.fetchData();
    }
  },
  created() {
    if (this.$route.path.includes('animation'))
      document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Topic_Animation.jpg")';
    if (this.$route.path.includes('installation'))
      document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Topic_Installation.jpg")';
    if (this.$route.path.includes('corporate-and-brand-identity'))
      document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Topic_CI.jpg")';
    if (this.$route.path.includes('campaigns'))
      document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Topic_Campaign.jpg")';
    if (this.$route.path.includes('interactive'))
      document.querySelector('body').style.backgroundImage = 'url("https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Interactive_Medoa.jpg")';
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

        const workListData = await axios.get(require('./../host') +'/work', {
          params: {
            topicId: topicNameData.data.entityId
          }
        });
        this.workList = workListData.data;
      }
  }
}
</script>

<style>
body.topic { 
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
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
    height: 169px;
    width: 100%;
    background-size: cover;
    background-position: center center;
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

.data {
    cursor: pointer;
}

@media (min-width: 992px) {
  .project-name-font {
    font-size: 20px;
  }
  .text-font {
    font-size: 15px;
  }
  .name-font {
    font-size: 14px;
  }
  .id-font {
    font-size: 12px;
  }
  .circle {
    height: 50px;
    width: 50px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 10px;
  }
  .col-size {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 792px) and (max-width: 991px) {
  .project-name-font {
    font-size: 17px;
  }
  .text-font {
    font-size: 12px;
  }
  .name-font {
    font-size: 11px;
  }
  .id-font {
    font-size: 9px;
  }
  .circle {
    height: 43px;
    width: 43px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 8px;
  }
  .col-size {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 722px) and (max-width: 791px) {
  .project-name-font {
    font-size: 14px;
  }
  .text-font {
    font-size: 13px;
  }
  .name-font {
    font-size: 9px;
  }
  .id-font {
    font-size: 7px;
  }
  .circle {
    height: 35px;
    width: 35px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 9px;
  }
  .col-size {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 419px) and (max-width: 721px) {
  .project-name-font {
    font-size: 16px;
  }
  .text-font {
    font-size: 15px;
  }
  .name-font {
    font-size: 11px;
  }
  .id-font {
    font-size: 9px;
  }
  .circle {
    height: 45px;
    width: 45px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 7px;
  }
  .col-size {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 418px) {
  .project-name-font {
    font-size: 14px;
  }
  .text-font {
    font-size: 13px;
  }
  .name-font {
    font-size: 9px;
  }
  .id-font {
    font-size: 7px;
  }
  .circle {
    height: 30px;
    width: 30px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 13px;
  }
  .col-size {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>