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
@media (min-width: 1372px) {
  body.welcome { 
    background: url('https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Welcome.jpg') no-repeat center -100px fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}

@media (min-width: 1342px) and (max-width: 1371px) {
  body.welcome { 
    background: url('https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Welcome.jpg') no-repeat center -70px fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}

@media (max-width: 1341px) {
  body.welcome { 
    background: url('https://multirasrijab.s3-ap-southeast-1.amazonaws.com/BG/BG_Welcome.jpg') no-repeat center -50px fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}

</style>