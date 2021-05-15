<template>
    <div class="footer">
        <div class="row" style="overflow: hidden;">
            <div class="col-md-4 text-left">
                <a :href="footerDatafacebook">
                    <img :src="require('@/assets/PNG/AllPage_Facebook_ICON.png')" width="130" style="
                        top: 58px;
                        position: relative;
                    ">
                </a>
            </div>
            <div class="col-md-4">
                <div class="row">
                    <div class="col-md-4" style="cursor: pointer;">
                        <br>
                        <br>
                        <br>
                        <br>
                        <router-link :to="'/work/' + topicPath + '/' + leftId"><h3 style="color: grey;border-bottom: 2px solid grey;">{{leftId}}</h3></router-link>
                    </div>
                    <div class="col-md-4">
                        <br>
                        <br>
                        <br>
                        <h3 style="color: white;border-bottom: 2px solid white;">001</h3>
                    </div>
                    <div class="col-md-4" style="cursor: pointer;">
                        <br>
                        <br>
                        <br>
                        <br>
                        <router-link :to="'/work/' + topicPath + '/' + rightId"><h3 style="color: grey;border-bottom: 2px solid grey;">{{rightId}}</h3></router-link>
                    </div>
                </div>
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
  name: 'FooterHasItem',
  props: {
      leftId: {
          type: String
      },
      rightId: {
          type: String
      },
      topicPath: {
          type: String
      }
  },
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
a:hover {
    text-decoration: none;
}
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