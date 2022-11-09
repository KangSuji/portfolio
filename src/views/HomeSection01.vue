<template>
  <section class="home-main-section">
    <div class="home-wrap">
      <section class="home-text-wrap">
        <scroll-parallax direction="x">
          <div class="text01">project</div>
        </scroll-parallax>
        <scroll-parallax :left="true" direction="x" speed="0.5">
          <div class="text02">about</div>
        </scroll-parallax>
        <scroll-parallax direction="x">
          <div class="text03">PORTFOLIO</div>
        </scroll-parallax>
      </section>
    </div>
  </section>
</template>

<script>
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
export default {
  components: {
    ScrollParallax,
  },
};
</script>

<style>
.home-text-wrap {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
.home-text-wrap {
  width: 80%;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Alfa Slab One", cursive;
  font-size: 8rem;
  font-weight: bold;
  text-transform: uppercase;
}
.text01,
.text03 {
  text-align: start;
}
.text02 {
  text-align: end;
}
</style>
