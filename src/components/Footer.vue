<template>
    <div class="footer">
        <div data-v-32a80de1="" class="" style="width: 100%;height: 100px;position: fixed;background-color: white;bottom: -47px;"></div>
        <router-link to="/home">
            <div class="footer-image" :style="{backgroundImage: 'url(' + graphic['letsgo'] + ')'}"></div>
        </router-link>
        <div class="row">
            <div class="col-md-2 text-left" style="position: relative;top: -31px;">
                <a :href="footerData.facebook"><img :src="graphic['facebook']" width="130"></a>
            </div>
            <div class="col-md-10 text-right" style="position: relative;top: -31px;">
                <p class="text-footer" style="color: black;line-height: 142px;margin-right: 53px;">{{footerData.copyright}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Footer',
  data() {
      return {
          footerData: {
            facebook: '',
            copyright: ''
          },
          graphic: {}
      };
  },
  async created() {
    const graphicData = await axios.get(require('./../host') +'/graphic');
    this.graphic = graphicData.data;
    const data = await axios.get(require('./../host') +'/footer');
    this.footerData = data.data;
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

@media (min-width: 768px) {
    .footer-image {
        height: 90px;
        width: 200px;
        margin-left: auto;
        margin-right: auto;
        background-size: 123%;
        background-position-x: center;
        background-position-y: -89px;
        margin-top: -53px;
    }
}

@media (min-width: 480px) and (max-width: 767px) {
    .footer-image {
        height: 90px;width: 133px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -70px;
        margin-top: -42px;
        margin-bottom: -11px;
    }
}

@media (min-width: 377px) and (max-width: 479px) {
    .footer-image {
        height: 90px;width: 100px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -50px;
        margin-top: -32px;
        margin-bottom: -20px;
    }
}

@media (max-width: 376px) {
    .footer-image {
        height: 90px;width: 90px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -40px;
        margin-top: -30px;
        margin-bottom: -23px;
    }
}
</style>