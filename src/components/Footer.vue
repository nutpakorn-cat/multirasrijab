<template>
    <div class="footer">
        <div data-v-32a80de1="" class="" style="width: 100%;height: 100px;position: fixed;background-color: white;bottom: -47px;"></div>
        <div class="row">
            <div class="col-md-4 text-left" style="position: relative;top: 6px;">
                <a :href="footerData.facebook"><img :src="require('@/assets/PNG/AllPage_Facebook_ICON.png')" width="130"></a>
            </div>
            <div class="col-md-4">
                <router-link to="/home">
                    <div class="footer-image" :style="{backgroundImage: 'url(' + require('@/assets/PNG/Welcome_Let_sGoButton.png') + ')'}"></div>
                </router-link>
            </div>
            <div class="col-md-4 text-right" style="position: relative;top: 6px;">
                <p style="color: black;line-height: 142px;margin-right: 53px;">{{footerData.copyright}}</p>
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
          }
      };
  },
  async created() {
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
    }
}

@media (min-width: 377px) and (max-width: 479px) {
    .footer-image {
        height: 90px;width: 100px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -50px;
        margin-top: -32px;
    }
}

@media (max-width: 376px) {
    .footer-image {
        height: 90px;width: 90px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -40px;
        margin-top: -30px;
    }
}
</style>