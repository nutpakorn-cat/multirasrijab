<template>
<div data-v-41458b80="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-font navbar-padding" data-v-41458b80="" style="font-family:medium;background-color:transparent !important;">
        <router-link active-class="" class="navbar-brand" to="/home"><img :src="graphic['logo']" style="width:83px;" data-v-41458b80=""></router-link><button class="navbar-toggler navbar-margin" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-41458b80=""><span class="navbar-toggler-icon" data-v-41458b80=""></span></button>
        <div class="collapse navbar-collapse" id="navbarNav" data-v-41458b80="" style="padding-left: 30px;padding-right: 30px;">
            <ul v-if="isWelcome == false" class="navbar-nav" data-v-41458b80="" style="">
                <li v-for="topic in topicList" :key="topic.topicId" class="nav-item" data-v-41458b80="" style="margin-right: 22px;"><router-link @click="onClick" @mouseleave="(e) => {onLeave(e, topic.topicPath)}" @mouseenter="onHover" :class="{'nav-link': true, 'router-link-active': shouldActive(topic.topicPath)}" :to="'/topic/' + topic.topicPath" style="
                    color: white;
                ">{{topic.topicName}}</router-link></li>
                
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" data-v-41458b80=""><router-link @click="onClick" @mouseleave="(e) => {onLeave(e, 'about')}" @mouseenter="onHover" class="nav-link" to="/about-us" style="
                    color: white;
                    ">About Us</router-link></li>
            </ul>
        </div>
    </nav>
</div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Navbar',
  props: ['isWelcome'],
  data() {
      return {
          topicList: [],
          graphic: {},
          color: '#d3f001'
      };
  },
  watch: {
    $route (to, from) {
        setTimeout(() => {
          document.querySelector('.router-link-active').style.borderBottomColor = this.color;
      }, 100);
    }
  },
  async created() {
      const setting = await axios.post(require('./../host') +'/setting', {
          tableName: 'navbarSetting'
      });
      this.color = setting.data.color;

      const graphicData = await axios.get(require('./../host') +'/graphic');
      this.graphic = graphicData.data;
      const data = await axios(require('./../host') +'/navbar');
      this.topicList = data.data;

      setTimeout(() => {
          document.querySelector('.router-link-active').style.borderBottomColor = this.color;
      }, 100);

  },
  methods: {
    onClick() {
        document.querySelectorAll('.nav-link').forEach((each) => {
            each.style.borderBottomColor = '#FFFFFF00';
        });
    },
    onHover(e) {
        e.target.style.borderBottomColor = this.color;
    },
    onLeave(e, path) {
        if (!this.shouldActive(path))
            e.target.style.borderBottomColor = '#FFFFFF00';
    },
    shouldActive(path) {
        return this.$route.path.includes(path);
    }
  }
}
</script>
<style scoped>
.router-link-active {
    border-bottom: 2px solid;
}
a.nav-link:hover {
    border-bottom: 2px solid;
}
a.nav-link {
    border-bottom: 2px solid #ffffff00;
}
.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 0px solid transparent;
    border-radius: .25rem;
}

@media (min-width: 1148px) {
    .navbar-font {
        font-size: 19px;
    }
}

@media (min-width: 1075px) and (max-width: 1147px) {
    .navbar-font {
        font-size: 17px;
    }
}

@media (max-width: 1074px) {
    .navbar-font {
        font-size: 14.5px;
    }
}

@media (min-width: 425px) {
    .navbar-margin {
        margin-right: 27px
    }
    .navbar-padding {
        padding-left: 51px;
    }
}

@media (max-width: 424px) {
    .navbar-margin {
        margin-right: 18px
    }
    .navbar-padding {
        padding-left: 37px;
    }
}
</style>