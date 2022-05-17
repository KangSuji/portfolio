<template>
  <Header></Header>
  <transition name="page">
    <router-view></router-view>
  </transition>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  body {
    background-color: #FBF8F3;
  }
    /* transition */
  .page-enter,
  .page-enter-from{
    transition: opacity .5s;
    opacity: 0;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>
