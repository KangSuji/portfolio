<template>
  <div class="home-section">
    <div class="home-container">
      <router-link :to="{name:'project', params: {message: 'kakaotalk'} }" class="home-list">
        <span>S</span>
        <div id="home-imgs1"></div>
      </router-link>
      <router-link :to="{name:'project', params: {message: 'starbucks'} }" class="home-list">
        <span>U</span>
        <div id="home-imgs2"></div>
      </router-link>
      <router-link :to="{name:'project', params: {message: 'hk-news'} }" class="home-list">
        <span>J</span>
        <div id="home-imgs3"></div>
      </router-link>
      <router-link :to="{name:'project', params: {message: 'omdb'} }" class="home-list">
        <span>I</span>
        <div id="home-imgs4"></div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .home-section {
    padding: 0 44px 0 57px
  }
  .home-container {
    display: flex;
    justify-content: space-between;
  }
  .home-container .home-list {
    border-right: 1px solid #384364;
    width: 25%;
    height: 50vh;
    text-align: center;
    position: relative;
  }
  .home-container .home-list:last-child {
    border: none;
  }
  .home-container .home-list:nth-child(even) span {
    position: absolute;
    top: 300px;
    right: 0;
    left: 0;
    z-index: 1;
    background: none;
    font-size: 10rem;
    font-family: 'Abril Fatface', cursive;
    color: #FBF8F3;
    -webkit-text-stroke: 1px #384364;
    transition: 0.3s;
  }
  .home-container .home-list:nth-child(odd) span {
    position: absolute;
    top: 200px;
    right: 0;
    left: 0;
    z-index: 1;
    background: none;
    font-size: 10rem;
    font-family: 'Abril Fatface', cursive;
    color: #FBF8F3;
    -webkit-text-stroke: 1px #384364;
    transition: 0.3s;
  }
  .home-container .home-list:hover span {
    color: #384364;
  }
  .home-list {
    cursor: pointer;
  }
  #home-imgs1,
  #home-imgs2,
  #home-imgs3,
  #home-imgs4 {
    height: 50vh;
    opacity: 0;
    transition: 0.3s;
  }
  #home-imgs1 {
    background: linear-gradient(
            to bottom,
            rgba(251, 248, 243, 1) 0%,
            rgba(251, 248, 243, 0.75) 10%,
            rgba(251, 248, 243, 0.25) 25%,
            rgba(251, 248, 243, 0) 50%,
            rgba(251, 248, 243, 0.75) 75%,
            rgba(251, 248, 243, 1) 100%
          ), url("../assets/imgs/izoneTalk.jpg"), no-repeat;
    background-size: cover;
  }
  #home-imgs2 {
    background: linear-gradient(
            to bottom,
            rgba(251, 248, 243, 1) 0%,
            rgba(251, 248, 243, 0.75) 10%,
            rgba(251, 248, 243, 0.25) 25%,
            rgba(251, 248, 243, 0) 50%,
            rgba(251, 248, 243, 0.75) 75%,
            rgba(251, 248, 243, 1) 100%
          ), url("../assets/imgs/starbucks.jpg");
    background-size: cover;
    background-position: -300px 0px;
  }
  #home-imgs3 {
    background: linear-gradient(
            to bottom,
            rgba(251, 248, 243, 1) 0%,
            rgba(251, 248, 243, 0.75) 10%,
            rgba(251, 248, 243, 0.25) 25%,
            rgba(251, 248, 243, 0) 50%,
            rgba(251, 248, 243, 0.75) 75%,
            rgba(251, 248, 243, 1) 100%
          ), url("../assets/imgs/hknews.jpg");
      background-size: cover;
      background-position: -315px 0px;
  }
  #home-imgs4 {
    background: linear-gradient(
            to bottom,
            rgba(251, 248, 243, 1) 0%,
            rgba(251, 248, 243, 0.75) 10%,
            rgba(251, 248, 243, 0.25) 25%,
            rgba(251, 248, 243, 0) 50%,
            rgba(251, 248, 243, 0.75) 75%,
            rgba(251, 248, 243, 1) 100%
          ), url("../assets/imgs/omdbapi.jpg");
      background-size: cover;
      background-position: -10px 0px;
  }
  .home-list:hover #home-imgs1,
  .home-list:hover #home-imgs2,
  .home-list:hover #home-imgs3,
  .home-list:hover #home-imgs4 {
    opacity: 1;
  } 
  
  @media (max-width: 650px) {
    .home-container .home-list {
     
     
      height: 40vh;
      
    } 
    .home-container .home-list:nth-child(even) span,
    .home-container .home-list:nth-child(odd) span  {
      font-size: 5rem;
    }
    .home-container .home-list:nth-child(even) span {
      top: 100px;
    }
    .home-container .home-list:nth-child(odd) span {
      top: 50px;
    }
  }
</style>