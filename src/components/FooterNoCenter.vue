<template>
    <div class="footer">
        <div data-v-32a80de1="" class="abcdefg" style="width: 100%;height: 100px;position: fixed;bottom: -47px;"></div>
        <div class="row">
            <div class="col-md-2 text-left" style="position: relative;top: 6px;">
                <a :href="footerData.facebook"><img :src="graphic['facebook']" width="130"></a>
            </div>
            <div class="col-md-10 text-right" style="position: relative;top: 6px;">
                <p class="bottom-text-color text-footer" style="line-height: 142px;margin-right: 53px;">{{footerData.copyright}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'FooterNoCenter',
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
    position: fixed;
    height: 100px;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
}

.footer-image {
    height: 90px;width: 200px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -113px;
}
</style>