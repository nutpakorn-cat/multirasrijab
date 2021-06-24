<template>
  <div>
    <Navbar :isWelcome="false" />
    <div class="height-device-small">
      <div v-if="!(('entityId') in work)" class="text-center" style="margin-top: 90px;margin-bottom: 290px;"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
      <div v-if="(('entityId') in work)" class="container" style="margin-top:40px; margin-bottom: -10px;">
          <div class="row">
              <div class="col-md-7 col-size">
                  <Lightbox :key="workOwnerId" :workOwnerId="workOwnerId" />
              </div>
              <div class="col-md-5 col-size">
                  <h4 class="topic-font" style="font-family: medium; color: #909090;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{topicName}}</h4>
                  <h3 class="work-name-font" style="font-family: medium; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workName}}</h3>
                  <div class="row" style="margin-top: 40px;padding-left: 30px;">
                      <div class="col-md-3 text-center" style="margin-bottom: 18px;">
                          <div :style="{backgroundImage: 'url(' + work.workOwnerImage + ')'}" class="circle">
                              <div class="block text-center">{{work.workId}}</div>
                          </div>
                      </div>
                      <div class="col-md-9">
                          <br>
                          <h3 class="work-owner-font" style="font-family: medium; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerName}}</h3>
                          <h3 class="work-owner-font" style="font-family: medium; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerId}}</h3>
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
    </div>
    <FooterHasItem :key="work.workOwnerId" :workId="work.workId" :leftOwnerId="work.leftOwnerId" :rightOwnerId="work.rightOwnerId" :leftId="work.leftId" :rightId="work.rightId" :topicPath="topicPath" />
  </div>
</template>

<script>
import axios from 'axios';
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
      work: {},
      graphic: {}
    };
  },
  watch: {
    $route (to, from) {
        document.body.style = "background: url('" + this.graphic['works'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
        this.fetchData();
    }
  },
  async created() {
    const graphicData = await axios.get(require('./../host') +'/graphic');
    this.graphic = graphicData.data;
    document.body.style = "background: url('" + this.graphic['works'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.workOwnerId = this.$route.params.id;

      this.topicPath = this.$route.params.type;

      const topicNameData = await axios.post(require('./../host') + '/topic', {
          topicPath: this.topicPath
      });

      this.topicName = topicNameData.data.topicName;
      
      const workData = await axios.post(require('./../host') + '/work', {
          workOwnerId: this.workOwnerId
      });

      this.work = workData.data;
    }
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
</style>

<style scoped>
.text-box {
    margin-top: 60px;
    padding: 20px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;
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

@media (min-width: 1200px) {
  .topic-font {
    font-size: 23px;
  }
  .work-name-font {
    font-size: 37px;
  }
  .work-owner-font {
    font-size: 20px;
  }
  .circle {
    height: 80px;
    width: 80px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .topic-font {
    font-size: 21px;
  }
  .work-name-font {
    font-size: 35px;
  }
  .work-owner-font {
    font-size: 18px;
  }
  .circle {
    height: 70px;
    width: 70px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 15px;
    margin-bottom: 20px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .topic-font {
    font-size: 19px;
  }
  .work-name-font {
    font-size: 33px;
  }
  .work-owner-font {
    font-size: 16px;
  }
  .circle {
    height: 60px;
    width: 60px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 17px;
    margin-bottom: 20px;
  }
}

@media (min-width: 456px) and (max-width: 767px) {
  .topic-font {
    font-size: 19px;
  }
  .work-name-font {
    font-size: 33px;
  }
  .work-owner-font {
    font-size: 16px;
  }
  .circle {
    height: 70px;
    width: 70px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 13px;
    margin-bottom: 20px;
    /* margin-left: auto; */
    position: relative;
    left: 12px;
    /* margin-right: auto; */
  }
  .col-size {
    margin-bottom: 50px;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 455px) {
  .topic-font {
    font-size: 19px;
  }
  .work-name-font {
    font-size: 33px;
  }
  .work-owner-font {
    font-size: 16px;
  }
  .circle {
    height: 60px;
    width: 60px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 13px;
    margin-bottom: 20px;
    /* margin-left: auto; */
    position: relative;
    left: 12px;
    /* margin-right: auto; */
  }
  .col-size {
    margin-bottom: 50px;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>