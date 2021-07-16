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
                          <h3 class="project-name-font" style="font-family: bold; color: white;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;" v-html="work.workName.replace('(', '<br>(')"></h3>
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
          workList: [],
          grahpic: {},
          "project1": "20",
          "text1": "15",
          "name1": "14",
          "id1": "12",
          "project2": "-3",
          "text2": "-3",
          "name2": "-3",
          "id2": "-3",
          "project3": "-6",
          "text3": "-1",
          "name3": "-5",
          "id3": "-5",
          "project4": "-4",
          "text4": "0",
          "name4": "-3",
          "id4": "-3",
          "project5": "-6",
          "text5": "-2",
          "name5": "-5",
          "id5": "-5"
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
      document.querySelector('body').style.backgroundImage = '';
      if (!this.$route.path.includes('work')) {
        if (this.$route.path.includes('animation'))
          document.body.style = "background:  url('" + this.graphic['anim'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
        if (this.$route.path.includes('installation'))
          document.body.style = "background:  url('" + this.graphic['ins'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
        if (this.$route.path.includes('corporate-and-brand-identity'))
          document.body.style = "background:  url('" + this.graphic['ci'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
        if (this.$route.path.includes('campaigns'))
          document.body.style = "background:  url('" + this.graphic['ca'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
        if (this.$route.path.includes('interactive'))
          document.body.style = "background:  url('" + this.graphic['int'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
      }
      this.fetchData();
    }
  },
  async created() {

    const setting = await axios.post(require('./../host') +'/setting', {
        tableName: 'topicSetting'
    });
    this.project1 = setting.data.project1;
    this.text1 = setting.data.text1;
    this.name1 = setting.data.name1;
    this.id1 = setting.data.id1;

    const graphicData = await axios.get(require('./../host') +'/graphic');
    this.graphic = graphicData.data;

    if (this.$route.path.includes('animation'))
      document.body.style = "background:  url('" + this.graphic['anim'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
    if (this.$route.path.includes('installation'))
      document.body.style = "background:  url('" + this.graphic['ins'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
    if (this.$route.path.includes('corporate-and-brand-identity'))
      document.body.style = "background:  url('" + this.graphic['ci'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
    if (this.$route.path.includes('campaigns'))
      document.body.style = "background:  url('" + this.graphic['ca'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
    if (this.$route.path.includes('interactive'))
      document.body.style = "background:  url('" + this.graphic['int'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";
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
      const name = document.querySelectorAll('.project-name-font');
      const special = document.querySelectorAll('.text-font');
      const header = document.querySelectorAll('.name-font');
      const content = document.querySelectorAll('.id-font');
      if (window.innerWidth > 992) {
        this.setSize(name, this.project1 + 'px');
        this.setSize(special, this.text1 + 'px');
        this.setSize(header, this.name1 + 'px');
        this.setSize(content, this.id1 + 'px');
      } else if (window.innerWidth > 792 && window.innerWidth <= 991) {
        this.setSize(name, this.dec(this.project1, this.project2));
        this.setSize(special, this.dec(this.text1, this.text2));
        this.setSize(header, this.dec(this.name1, this.name2));
        this.setSize(content, this.dec(this.id1, this.id2));
      } else if (window.innerWidth > 722 && window.innerWidth <= 791) {
        this.setSize(name, this.dec(this.project1, this.project3));
        this.setSize(special, this.dec(this.text1, this.text3));
        this.setSize(header, this.dec(this.name1, this.name3));
        this.setSize(content, this.dec(this.id1, this.id3));
      } else if (window.innerWidth > 721 && window.innerWidth <= 419) {
        this.setSize(name, this.dec(this.project1, this.project4));
        this.setSize(special, this.dec(this.text1, this.text4));
        this.setSize(header, this.dec(this.name1, this.name4));
        this.setSize(content, this.dec(this.id1, this.id4));
      } else {
        this.setSize(name, this.dec(this.project1, this.project5));
        this.setSize(special, this.dec(this.text1, this.text5));
        this.setSize(header, this.dec(this.name1, this.name5));
        this.setSize(content, this.dec(this.id1, this.id5));
      }
    },
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
        setTimeout(() => {
          this.onResize();
        }, 100);
      }
  }
}
</script>

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
  .circle {
      height: 55px;
      width: 55px;
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
  .circle {
    height: 54px;
    width: 54px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    left: -12px;
    position: relative;
    display: inline-block;
    margin-top: 5px;
}
  .col-size {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 722px) and (max-width: 791px) {
  .circle {
    height: 49px;
    width: 49px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    left: -17px;
    position: relative;
    margin-top: 5px;
  }
  .col-size {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 547px) and (max-width: 721px) {
  .circle {
    height: 60px;
    width: 60px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 2px;
  }
}

@media (min-width: 479px) and (max-width: 546px) {
  .circle {
    height: 50px;
    width: 50px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 5px;
  }
}

@media (min-width: 400px) and (max-width: 478px) {
  .circle {
    height: 47px;
    width: 47px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 7px;
    left: -10px;
    position: relative;
  }
}

@media (min-width: 300px) and (max-width: 399px) {
  .circle {
    height: 42px;
    width: 42px;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    display: inline-block;
    margin-top: 8px;
    left: -10px;
    position: relative;
  }
}

@media (min-width: 419px) and (max-width: 721px) {
  .col-size {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 418px) {
  .col-size {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>