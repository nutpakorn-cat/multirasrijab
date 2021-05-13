<template>
    <div class="footer">
        <div class="row">
            <div class="col-md-4 text-left">
                <a href="https://facebook.com"><img :src="require('@/assets/PNG/AllPage_Facebook_ICON.png')" width="130"></a>
            </div>
            <div class="col-md-4">
                <router-link to="/home">
                    <div class="footer-image" :style="{backgroundImage: 'url(' + require('@/assets/PNG/Welcome_Let_sGoButton.png') + ')'}"></div>
                </router-link>
            </div>
            <div class="col-md-4 text-right">
                <p style="color: rgb(160 160 160);line-height: 142px;margin-right: 53px;">Copyright</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>
.footer {
    position: fixed;
    height: 100px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(
0deg
, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
    text-align: center;
}

@media (min-width: 768px) {
    .footer-image {
        height: 90px;width: 200px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -113px;
    }
}

@media (min-width: 480px) and (max-width: 767px) {
    .footer-image {
        height: 90px;width: 133px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -70px;
    }
}

@media (min-width: 377px) and (max-width: 479px) {
    .footer-image {
        height: 90px;width: 100px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -50px;
    }
}

@media (max-width: 376px) {
    .footer-image {
        height: 90px;width: 90px;margin-left: auto;margin-right: auto;background-size: 153%;background-position-x: center;background-position-y: -40px;
    }
}
</style>