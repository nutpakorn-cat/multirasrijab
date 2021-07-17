<template>
    <div class="footer">
        <div data-v-86d5249c="" class="abcdefg" style="width: 100%;height: 150px;position: relative;top: 160px;"></div>

        <div class="row" style="width: 30%;
            margin-left: auto;
            margin-right: auto;
            top: -45px;
            z-index: 9998;
            position: relative;
            margin-bottom: -146px;">
            <div class="col-md-4" style="cursor: pointer;">
                <br>
                <br>
                <br>
                <br>
                <router-link :to="'/work/' + topicPath + '/' + leftOwnerId"><h3 style="color: grey;border-bottom: 2px solid grey;">{{leftId}}</h3></router-link>
            </div>
            <div class="col-md-4">
                <br>
                <br>
                <br>
                <h3 style="color: black;border-bottom: 2px solid white;padding-left: 1.5px;">{{workId}}</h3>
            </div>
            <div class="col-md-4" style="cursor: pointer;">
                <br>
                <br>
                <br>
                <br>
                <router-link :to="'/work/' + topicPath + '/' + rightOwnerId"><h3 style="color: grey;border-bottom: 2px solid grey;">{{rightId}}</h3></router-link>
            </div>
        </div>

        <div class="row res" style="overflow: hidden;
    top: -2px;
    position: relative;">
            <div class="col-md-2 text-left">
                <a :href="footerData.facebook">
                    <img :src="graphic['facebook']" width="130" style="
                        top: 58px;
                        position: relative;
                    ">
                </a>
            </div>
            <div class="col-md-10 text-right">
                <p class="bottom-text-color text-footer" style="line-height: 142px;margin-right: 53px;top: 58px;position: relative;">{{footerData.copyright}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'FooterHasItem',
  props: ['topicPath', 'workId', 'leftId', 'rightId', 'leftOwnerId', 'rightOwnerId'],
  data() {
      return {
          footerData: {
            facebook: '',
            copyright: ''
          },
          graphic: {},
          bottomColor: '',
          bottomOpacity: '',
          bottomTextColor: ''
      };
  },
  async created() {
      const setting = await axios.post(require('./../host') +'/setting', {
        tableName: 'navbarSetting'
    });
    this.bottomColor = setting.data.bottomColor;
    this.bottomOpacity = setting.data.bottomOpacity;
    this.bottomTextColor = setting.data.bottomTextColor;
    const graphicData = await axios.get(require('./../host') +'/graphic');
    this.graphic = graphicData.data;
    const data = await axios.get(require('./../host') + '/footer');
    this.footerData = data.data;

    setTimeout(() => {
        document.querySelector('.abcdefg').style.backgroundColor = this.bottomColor;
        document.querySelector('.abcdefg').style.backgroundOpacity = this.bottomOpacity;
        document.querySelector('.bottom-text-color').style.color = this.bottomTextColor;
    }, 100);
  }
}
</script>
<style scoped>
a:hover {
    text-decoration: none;
}
.footer {
    height: 100%;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    overflow: hidden;
    margin-top: -153px;
}
@media (min-width: 500px) {
    .res {
        
    }
}

@media (max-width: 499px) {
    .res {
        position: relative;
        top: -10px;
    }
}
</style>