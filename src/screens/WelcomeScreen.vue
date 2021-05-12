<template>
  <div>
    <Navbar :isWelcome="true" />
    <Footer />
  </div>
</template>
<script>
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

export default {
  beforeCreate: function() {
    document.body.className = 'welcome';
  },
  name: 'WelcomeScreen',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
body.welcome { 
  background: url('https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Welcome.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>