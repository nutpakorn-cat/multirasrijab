<template>
    <div>
        <div v-if="hasMedia == false" class="text-center">
            <h4 style="font-family: medium; color: white;font-size: 23px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">ไม่มีข้อมูล</h4>
        </div>
        <div v-if="hasMedia == true && selectedType == 'youtube'" class="player text-center">
            <iframe width="545" height="300" :src="selectedClip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div @click="showModal = true" v-if="hasMedia == true && selectedType == 'image'" class="viewer" :style="{backgroundImage: 'url(' + selectedImage + ')', cursor: 'pointer'}"></div>
        <div v-if="hasMedia == true" class="row justify-content-center">
            <div class="col-md-1" v-if="useBar == true">
                <p @click="clickLeft" class="disable-select" style="line-height: 100px;cursor: pointer;font-family: medium; color: white;font-size: 40px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">&lt;</p>
            </div>

            <div class="col-md-3">
                <div @click="clickFirst" :style="{backgroundImage: 'url(' + firstImage + ')'}" :class="{thumbnail: true, selected: (selectedIndex == firstIndex)}"></div>
            </div>

            <div v-if="secondIndex != -10" class="col-md-3">
                <div @click="clickSecond" :style="{backgroundImage: 'url(' + secondImage + ')'}" :class="{thumbnail: true, selected: (selectedIndex == secondIndex)}"></div>
            </div>

            <div v-if="thirdIndex != -10" class="col-md-3">
                <div @click="clickThird" :style="{backgroundImage: 'url(' + thirdImage + ')'}" :class="{thumbnail: true, selected: (selectedIndex == thirdIndex)}"></div>
            </div>

            <div class="col-md-1" v-if="useBar == true">
                <p @click="clickRight" class="disable-select" style="line-height: 100px;cursor: pointer;font-family: medium; color: white;font-size: 40px;text-shadow: rgb(0, 0, 0) 0px 0px 16px, rgb(0, 0, 0) 0px 0px 16px;">&gt;</p>
            </div>
        </div>
        <div v-if="showModal">
            <transition name="modal">
                <div class="modal-mask" @click="showModal = false">
                    <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <img class="res-img" width="500" :src="selectedImage" style="margin-left: auto; margin-right: auto; display: block;">
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Lightbox',
    props: ['workOwnerId'],
    components: {},
    data() {
        return {
            showModal: false,
            selectedIndex: 0,
            selectedImage: '',
            selectedClip: '',
            selectedType: '',
            firstIndex: 0,
            firstImage: '',
            secondIndex: 1,
            secondImage: '',
            thirdIndex: 2,
            thirdImage: '',
            hasMedia: true,
            useBar: true,
            mediaList: [],
            color: ''
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            const setting = await axios.post(require('./../host') + '/setting', {
                tableName: 'navbarSetting'
            });
            this.color = setting.data.color;
            const mediaListData = await axios.post(require('./../host') + '/media', {
                workOwnerId: this.workOwnerId
            });

            this.mediaList = mediaListData.data;

            if (!this.mediaList.length)
                this.hasMedia = false;

            if (this.mediaList.length == 1) {
                this.secondIndex = -10;
                this.thirdIndex = -10;
            }

            if (this.mediaList.length == 2) {
                this.thirdIndex = -10;
            }

            if (this.mediaList.length <= 3) {
                this.useBar = false;
            }

            this.updateViewer();
            this.updateSelectImage();
        },
        updateViewer() {
            document.querySelector('.selected').style.borderColor = this.color;
            this.selectedImage = this.mediaList[this.selectedIndex].mediaPath;
            this.selectedType = this.mediaList[this.selectedIndex].mediaType;

            if (this.selectedType == 'youtube')
                this.selectedClip = this.mediaList[this.selectedIndex].mediaClip;
        },
        clickFirst() {
            this.selectedIndex = this.firstIndex;
            this.updateViewer();
        },
        clickSecond() {
            this.selectedIndex = this.secondIndex;
            this.updateViewer();
        },
        clickThird() {
            this.selectedIndex = this.thirdIndex;
            this.updateViewer();
        },
        checKLowerBound(number) {
            return (number < 0) ? this.mediaList.length - 1 : number;
        },
        checkUpperBound(number) {
            return (number >= this.mediaList.length) ? 0 : number;
        },
        updateSelectImage() {
            if (this.firstIndex != -10)
                this.firstImage = this.mediaList[this.firstIndex].mediaPath;
            
            if (this.secondIndex != -10)
                this.secondImage = this.mediaList[this.secondIndex].mediaPath;

            if (this.thirdIndex != -10)
                this.thirdImage = this.mediaList[this.thirdIndex].mediaPath;
        },
        clickLeft() {
            this.firstIndex = this.checKLowerBound(this.firstIndex - 1);
            this.secondIndex = this.checKLowerBound(this.secondIndex - 1);
            this.thirdIndex = this.checKLowerBound(this.thirdIndex - 1);
            this.updateSelectImage();
        },
        clickRight() {
            this.firstIndex = this.checkUpperBound(this.firstIndex + 1);
            this.secondIndex = this.checkUpperBound(this.secondIndex + 1);
            this.thirdIndex = this.checkUpperBound(this.thirdIndex + 1);
            this.updateSelectImage();
        },
    }
}
</script>

<style scoped>
.player {
  position: relative;
  width: 80%;
  height: 315px;
  overflow: hidden;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}

.player iframe {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-content {
    background-color: transparent;
    border: 0px solid transparent;
}
.modal-dialog {
    max-width: 880px;
    margin: 1.75rem auto;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.viewer {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 300px;
    background-size: cover;
    background-position: center center;
    margin-bottom: 50px;
}
.selected {
    border: 2px solid;
}
.thumbnail {
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    height: 100px;
    width: 100%;
    background-color: black;
    color: white;
}

@media (min-width: 1100px) {
    .res-img {
        width: 850px;
    }
}

@media (min-width: 866px) and (max-width: 1099px) {
    .res-img {
        width: 820px;
    }
}

@media (min-width: 735px) and (max-width: 865px) {
    .res-img {
        width: 700px;
    }
}

@media (min-width: 635px) and (max-width: 734px) {
    .res-img {
        width: 600px;
    }
}

@media (min-width: 535px) and (max-width: 634px) {
    .res-img {
        width: 500px;
    }
}
@media (min-width: 435px) and (max-width: 534px) {
    .res-img {
        width: 400px;
    }
}
@media (min-width: 335px) and (max-width: 434px) {
    .res-img {
        width: 300px;
    }
}
@media (max-width: 334px) {
    .res-img {
        width: 200px;
    }
}
</style>