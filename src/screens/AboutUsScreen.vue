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
            <img class="l-img-size" :src="graphic['college']">
            &nbsp;
            <img style="margin-top: -3px;" class="m-img-size" :src="graphic['iamd']">
            &nbsp;
            <img class="r-img-size" :src="graphic['intlogo']">
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
          <h3 class="name-font" style="color: white;" v-html="person.personName.replace('(', '<br>(')"></h3>
        </div>
      </div>
    </div>
    <br><br><br><br><br><br><br><br>
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
      success: false,
      graphic: {},
      "name1": "19",
      "special1": "40",
      "header1": "100",
      "content1": "24",
      "right1": "20",
      "name2": "-6",
      "special2": "-3",
      "header2": "-20",
      "content2": "-6",
      "right2": "-2",
      "name3": "-6",
      "special3": "-5",
      "header3": "-20",
      "content3": "-6",
      "right3": "-4",
      "name4": "-6",
      "special4": "-8",
      "header4": "-50",
      "content4": "-8",
      "right4": "-5",
      "name5": "-9",
      "special5": "-10",
      "header5": "-60",
      "content5": "-8",
      "right5": "-6"
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
      const name = document.querySelectorAll('.name-font');
      const special = document.querySelectorAll('.special-font');
      const header = document.querySelectorAll('.header-font');
      const content = document.querySelectorAll('.content-font');
      const right = document.querySelectorAll('.right-font');
      if (window.innerWidth > 874) {
        this.setSize(name, this.name1 + 'px');
        this.setSize(special, this.special1 + 'px');
        this.setSize(header, this.header1 + 'px');
        this.setSize(content, this.content1 + 'px');
        this.setSize(right, this.right1 + 'px');
      } else if (window.innerWidth > 702 && window.innerWidth <= 873) {
        this.setSize(name, this.dec(this.name1, this.name2));
        this.setSize(special, this.dec(this.special1, this.special2));
        this.setSize(header, this.dec(this.header1, this.header2));
        this.setSize(content, this.dec(this.content1, this.content2));
        this.setSize(right, this.dec(this.right1, this.right2));
      } else if (window.innerWidth > 622 && window.innerWidth <= 701) {
        this.setSize(name, this.dec(this.name1, this.name3));
        this.setSize(special, this.dec(this.special1, this.special3));
        this.setSize(header, this.dec(this.header1, this.header3));
        this.setSize(content, this.dec(this.content1, this.content3));
        this.setSize(right, this.dec(this.right1, this.right3));
      } else if (window.innerWidth > 542 && window.innerWidth <= 621) {
        this.setSize(name, this.dec(this.name1, this.name4));
        this.setSize(special, this.dec(this.special1, this.special4));
        this.setSize(header, this.dec(this.header1, this.header4));
        this.setSize(content, this.dec(this.content1, this.content4));
        this.setSize(right, this.dec(this.right1, this.right4));
      } else {
        this.setSize(name, this.dec(this.name1, this.name5));
        this.setSize(special, this.dec(this.special1, this.special5));
        this.setSize(header, this.dec(this.header1, this.header5));
        this.setSize(content, this.dec(this.content1, this.content5));
        this.setSize(right, this.dec(this.right1, this.right5));
      }
    },
  },
  async created() {
    const setting = await axios.post(require('./../host') +'/setting', {
          tableName: 'aboutSetting'
      });
      this.name1 = setting.data.name1;
      this.special1 = setting.data.special1;
      this.header1 = setting.data.header1;
      this.content1 = setting.data.content1;
      this.right1 = setting.data.right1;
    const graphicData = await axios.get(require('./../host') +'/graphic');
    this.graphic = graphicData.data;
    document.body.style = "background: url('" + this.graphic['aboutus'] + "') no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;";

    const data = await axios.get(require('./../host') +'/about-us');
    this.aboutusData = data.data;
    this.success = true;
    setTimeout(() => {
      this.onResize();
    }, 100);
  }
}
</script>

<style scoped>
@media (min-width: 874px) {
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
}

@media (min-width: 622px) and (max-width: 701px) {
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
}

@media (min-width: 542px) and (max-width: 621px) {
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

@media (min-width: 418px) and (max-width: 541px) {
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

@media (max-width: 417px) {
  .img-margin {
    margin-top: 22px;
  }
  .l-img-size {
    width: 50px;
  }
  .m-img-size {
    width: 25px;
  }
  .r-img-size {
    width: 40px;
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