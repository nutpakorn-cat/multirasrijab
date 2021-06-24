<template>
    <div class="footer">
        <div data-v-32a80de1="" class="" style="width: 100%;height: 100px;position: fixed;background-color: white;bottom: -47px;"></div>
        <div class="row">
            <div class="col-md-2 text-left" style="position: relative;top: 6px;">
                <a :href="footerData.facebook"><img :src="graphic['facebook']" width="130"></a>
            </div>
            <div class="col-md-10 text-right" style="position: relative;top: 6px;">
                <p class="text-footer" style="color: black;line-height: 142px;margin-right: 53px;">{{footerData.copyright}}</p>
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

.footer-image {
    height: 90px;width: 200px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -113px;
}
</style>