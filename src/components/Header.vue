<template>
  <div>
    <header>
      <div class="header-section">
        <button @click="toggleModal">
          <span class="material-symbols-outlined">menu</span>
        </button>
       
        <span class="logo">
          <router-link to="/">
            KANG SUJI PORTPOLIO
          </router-link>
        </span>
        <div class="mode">
          <router-link to="/about">
            <span class="material-symbols-outlined">person</span>
          </router-link>
        </div>
      </div>
      <transition name="fade">
        <div class="menu-wrap" v-if="isOpen">
          <div class="menu-list-section">
            <span @click="toggleModal" class="material-symbols-outlined">close</span>
            <ul class="menu-list">
              <li><router-link to="/home" @click="toggleModal">Home</router-link></li>
              <li><router-link to="/about" @click="toggleModal">About</router-link></li>
              <li><router-link to="/project" @click="toggleModal">Project</router-link></li>
              <li>Resume</li>
            </ul>
            <div class="menu-right">
              <div class="menu-r-top">
                <div></div>
                <div></div>
              </div>
              <div class="menu-r-bottom">
                <div>
                  <img src="../assets/imgs/logo.png" />
                </div>
                <div>KANG SUJI</div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
  header {
    padding: 21px 0px;
    color: #384364;
  }
  .header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 44px 0 50px;
    
  }
  .header-section button {
    border: none;
    background-color: #FBF8F3;
    font-size: 1.5rem;
    color: #384364;
    
  }
  .logo{
    font-size: 2rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: 700;
  }
  .logo a {
    text-decoration: none;
    color: #384364;
  }
  .mode a{
    font-size: 1.5rem;
    color: #384364;
  }
  .mode span:first-child {
    margin-right: 10px;
  }

  /* meun section */
  .fade-enter,
  .fade-enter-from {
    transition: opacity 0.5s ease-out;
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }

  .fade-leave-to {
    opacity: 0;
  }
  
  .menu-wrap {
    width: 100%;
    height: 100vh;
    padding: 0px 0px 0px 50px;
    box-sizing: border-box;
    background-color: #FBF8F3;
    position: absolute;
    top: 0;
    z-index: 3; 
  }
  .menu-list-section{
    top: 0px;
    height: 100%;
    padding: 0px 0px 0px 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;    
  }
  .menu-list{
    width: 80%;
    text-align: center;
    line-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .menu-list a{
    text-decoration: none;
    color: #384364;
  }
  .menu-list li {
    font-size: 5rem;
    font-family: 'Abril Fatface', cursive;
    cursor: pointer;
  }
  .menu-list a:hover {
    text-decoration: underline;
  }
  .menu-wrap span {
    position: absolute;
    left: 57px;
    top: 21px;
  }
  .material-symbols-outlined {
    cursor: pointer;
  }
  .menu-right {
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
  .menu-r-top{
    display: flex;
    width: 100%;
  }
  .menu-r-top div:first-child {
    width: 30%;
    height: 50vh;
    background: url("../assets/imgs/img4.jpg");
    background-size: cover;
    background-attachment: scroll;
    background-position-x: -200px;
  }
  .menu-r-top div:last-child {
    background-color: #384364;
    width: 70%;
    height: 50vh;
  }
  .menu-r-bottom {
    display: flex;
    height: 100%;
  }
  .menu-r-bottom div {
    height: 50vh;
  }
  .menu-r-bottom div:first-child {
    width: 30%;
    background-color: #384364;
    line-height: 50vh;
  }
  .menu-r-bottom div:first-child img{
    width: 50px;
    margin-left: 20px;
    color: #FBF8F3;
  }
  .menu-r-bottom div:last-child {
    width: 70%;
    text-align: center;
    line-height: 47vh;
    font-size: 4rem;
    font-family: 'Abril Fatface', cursive;
    -webkit-text-stroke: 2px #384364;
    color: rgba(0, 0, 0, 0);
    background-image: url("../assets/imgs/img3.jpg");
    background-size: cover;
  }
</style>