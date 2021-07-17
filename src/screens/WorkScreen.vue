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
                  <h4 class="topic-font" style="font-family: medium; text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{topicName}}</h4>
                  <h3 class="work-name-font" style="font-family: medium; text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workName}}</h3>
                  <div class="row" style="margin-top: 40px;padding-left: 30px;">
                      <div class="col-md-3 text-center" style="margin-bottom: 18px;">
                          <div :style="{backgroundImage: 'url(' + work.workOwnerImage + ')'}" class="circle">
                              <div class="block text-center">{{work.workId}}</div>
                          </div>
                      </div>
                      <div class="col-md-9">
                          <br>
                          <h3 class="work-owner-font" style="font-family: medium; text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerName}}</h3>
                          <h3 class="work-owner-font" style="font-family: medium; text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">{{work.workOwnerId}}</h3>
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
      graphic: {},
      "topic1": "23",
      "name1": "37",
      "owner1": "20",
    "topic2": "-2",
    "name2": "-2",
    "owner2": "-2",
    "topic3": "-4",
    "name3": "-4",
    "owner3": "-4",
    "topic4": "-4",
    "name4": "-4",
    "owner4": "-4",
    "topic5": "-4",
    "name5": "-4",
    "owner5": "-4",
    "nameColor": "#5A4099",
    "nameOpacity": "0.3",
    "ownerColor": "#5A4099",
    "ownerOpacity": "0.3",
    "topicColor": "#5A4099",
    "topicOpacity": "0.3"
    };
  },
  mounted() {
      this.$nextTick(() => {
          window.addEventListener('resize', this.onResize);
      });
  },
  beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
  },
  watch: {
    $route (to, from) {
        document.body.style = "background: url('" + this.graphic['works'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
        this.fetchData();
    }
  },
  async created() {

    const setting = await axios.post(require('./../host') +'/setting', {
        tableName: 'workSetting'
    });
    
    this.topic1 = setting.data.topic1;
    this.name1 = setting.data.name1;
    this.owner1 = setting.data.owner1;

    this.nameColor = setting.data.nameColor;
    this.nameOpacity = setting.data.nameOpacity;
    this.topicColor = setting.data.topicColor;
    this.topicOpacity  = setting.data.topicOpacity;
    this.ownerColor = setting.data.ownerColor;
    this.ownerOpacity = setting.data.ownerOpacity;

    const graphicData = await axios.get(require('./../host') +'/graphic');
    this.graphic = graphicData.data;
    document.body.style = "background: url('" + this.graphic['works'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
    this.fetchData();
  },
  methods: {
    dec(a, b) {
      return ((parseInt(a) + parseInt(b) <= 0) ? 10 : parseInt(a) + parseInt(b)) + 'px';
    },
    setSize(a, b) {
      a.forEach((each) => {
        each.style.fontSize = b;
      })
    },
    onResize() {
      const name = document.querySelectorAll('.topic-font');
      const special = document.querySelectorAll('.work-name-font');
      const header = document.querySelectorAll('.work-owner-font');
      if (window.innerWidth > 1200) {
        this.setSize(name, this.topic1 + 'px');
        this.setSize(special, this.name1 + 'px');
        this.setSize(header, this.owner1 + 'px');
      } else if (window.innerWidth > 992 && window.innerWidth <= 1199) {
        this.setSize(name, this.dec(this.topic1, this.topic2));
        this.setSize(special, this.dec(this.name1, this.name2));
        this.setSize(header, this.dec(this.owner1, this.owner2));
      } else if (window.innerWidth > 768 && window.innerWidth <= 991) {
        this.setSize(name, this.dec(this.topic1, this.topic3));
        this.setSize(special, this.dec(this.name1, this.name3));
        this.setSize(header, this.dec(this.owner1, this.owner3));
      } else if (window.innerWidth > 456 && window.innerWidth <= 767) {
        this.setSize(name, this.dec(this.topic1, this.topic4));
        this.setSize(special, this.dec(this.name1, this.name4));
        this.setSize(header, this.dec(this.owner1, this.owner4));
      } else {
        this.setSize(name, this.dec(this.topic1, this.topic5));
        this.setSize(special, this.dec(this.name1, this.name5));
        this.setSize(header, this.dec(this.owner1, this.owner5));
      }
    },
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
      setTimeout(() => {
        const name = document.querySelectorAll('.topic-font');
        const special = document.querySelectorAll('.work-name-font');
        const header = document.querySelectorAll('.work-owner-font');

        name.forEach(each => {
          each.style.color = this.topicColor;
          each.style.opacity = this.topicOpacity;
        });

        special.forEach(each => {
          each.style.color = this.nameColor;
          each.style.opacity = this.nameOpacity;
        });

        header.forEach(each => {
          each.style.color = this.ownerColor;
          each.style.opacity = this.ownerOpacity;
        });
        this.onResize();
      }, 100);
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