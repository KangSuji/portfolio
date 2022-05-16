<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  body {
    background-color: #FBF8F3;
  }
</style>
