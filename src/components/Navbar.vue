<template>
<div data-v-41458b80="" style="background: linear-gradient(rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%);">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" data-v-41458b80="" style="padding-left:51px;font-family:medium;font-size: 19px;background-color:transparent !important;">
        <router-link active-class="" class="navbar-brand" to="/home"><img src="https://multirasrijab.s3-ap-southeast-1.amazonaws.com/300x300.png" style="width:83px;" data-v-41458b80=""></router-link><button style="margin-right: 27px" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-v-41458b80=""><span class="navbar-toggler-icon" data-v-41458b80=""></span></button>
        <div class="collapse navbar-collapse" id="navbarNav" data-v-41458b80="" style="padding-left: 30px;padding-right: 30px;">
            <ul v-if="isWelcome == false" class="navbar-nav" data-v-41458b80="" style="
                ">
                <li class="nav-item" data-v-41458b80="" style="margin-right: 22px;"><router-link class="nav-link active" to="/animation" data-v-41458b80="" style="
                    color: white;
                    ">Animation</router-link></li>
                <li class="nav-item" data-v-41458b80="" style="
                    margin-right: 22px;
                    "><a class="nav-link" href="#" data-v-41458b80="" style="
                    color: white;
                    ">Installation</a></li>
                <li class="nav-item" data-v-41458b80="" style="
                    margin-right: 22px;
                    "><a class="nav-link" href="#" data-v-41458b80="" style="
                    color: white;
                    ">Corperate & Brand Identity</a></li>
                <li class="nav-item" data-v-41458b80="" style="
                    margin-right: 22px;
                    "><a class="nav-link" href="#" data-v-41458b80="" style="
                    color: white;
                    ">Campaigns</a></li>
                <li class="nav-item" data-v-41458b80="" style="
                    margin-right: 22px;
                    "><a class="nav-link" href="#" data-v-41458b80="" style="
                    color: white;
                    ">Interactive Media</a></li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" data-v-41458b80=""><router-link class="nav-link" to="/about-us" style="
                    color: white;
                    ">About Us<span class="sr-only" data-v-41458b80="">(current)</span></router-link></li>
            </ul>
        </div>
    </nav>
</div>
</template>
<script>
export default {
  name: 'Navbar',
  props: ['isWelcome']
}
</script>
<style scoped>
.router-link-active {
    border-bottom: 2px solid #d3f001!important;
}
a.nav-link:hover {
    border-bottom: 2px solid #d3f001;
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
</style>