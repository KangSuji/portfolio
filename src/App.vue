<template>
  <Header2></Header2>
  <HomeSection01></HomeSection01>
  <HomeSection02></HomeSection02>
  <transition name="page">
    <router-view></router-view>
  </transition>
  <Footer></Footer>
  <Header></Header>
</template>

<script>
import Header from "./components/Header.vue";
import Header2 from "./components/Header2.vue";
import HomeSection01 from "./views/HomeSection01.vue";
import HomeSection02 from "./views/HomeSection02.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Header2,
    HomeSection01,
    HomeSection02,
    Footer,
  },
};
</script>

<style>
body {
  background-color: #fbf8f3;
}
/* transition */
.page-enter,
.page-enter-from {
  transition: opacity 0.5s;
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
