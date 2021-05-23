<template>
    <div class="footer">
        <div style="
            width: 100%;
            height: 100px;
            position: relative;
            background-color: white;
            top: 160px;
        "></div>
        <div class="row res" style="overflow: hidden;">
            <div class="col-md-4 text-left">
                <a :href="footerData.facebook">
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
            </div>
            <div class="col-md-4 text-right">
                <p data-v-fb3d7926="" style="color: black;line-height: 142px;margin-right: 53px;top: 58px;position: relative;">{{footerData.copyright}}</p>
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
          }
      };
  },
  async created() {
    const data = await axios.get(require('./../host') + '/footer');
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
    text-align: center;
    overflow: hidden;
    margin-top: -103px;
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