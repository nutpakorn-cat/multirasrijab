<template>
    <div class="footer">
        <div class="abcdefg footer-color"></div>
        <div class="row res" style="overflow: hidden;">
            <div class="col-md-2 text-left">
                <a :href="footerData.facebook">
                    <img class="facebook-position" :src="graphic['facebook']" width="130" style="
                        top: 58px;
                        position: relative;
                    ">
                </a>
            </div>
            <div class="col-md-10 text-right">
                <p class="bottom-text-color line text-footer" data-v-fb3d7926="" style="line-height: 142px;margin-right: 53px;top: 58px;position: relative;">{{footerData.copyright}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'FooterNotFix',
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
    const data = await axios.get(require('./../host') +'/footer');
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
.footer {
    height: 100%;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    overflow: hidden;
    margin-top: -200px;
}

@media (min-width: 1018px) {
    .footer-color {
        width: 100%;
        height: 85px;
        position: relative;
        top: 176px;
    }
}

@media (max-width: 1017px) {
    .res {
        position: relative;
        top: -10px;
    }
    .footer-color {
        width: 100%;
        height: 85px;
        position: relative;
        top: 164px;
    }
}
</style>