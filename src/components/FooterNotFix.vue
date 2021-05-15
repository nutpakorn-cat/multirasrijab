<template>
    <div class="footer">
        <div class="row" style="overflow: hidden;">
            <div class="col-md-4 text-left">
                <a :href="footerData.facebook">
                    <img :src="require('@/assets/PNG/AllPage_Facebook_ICON.png')" width="130" style="
                        top: 58px;
                        position: relative;
                    ">
                </a>
            </div>
            <div class="col-md-4">
                
            </div>
            <div class="col-md-4 text-right">
                <p data-v-fb3d7926="" style="color: rgb(160, 160, 160);line-height: 142px;margin-right: 53px;top: 58px;position: relative;">{{footerData.copyright}}</p>
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
    height: 100%;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(
0deg
, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
    text-align: center;
}
</style>