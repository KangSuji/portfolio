<template>
  <div class="project-section">
    <div class="go-top" @click="goTop">top</div>
    <div class="project-wrap">
     
      <nav class="project-nav" id="nav">
        <ul>
          <li @click="goContent('kakaotalk')">kakaotalk</li>
          <li @click="goContent('starbucks')">starbucks</li>
          <li @click="goContent('hk-news')">hk news</li>
          <li @click="goContent('omdb')">OMDb api</li>
        </ul>
      </nav>
      
      <div class="project-content" id="kakaotalk">
        <div class="left">
          <span class="title">kakaotalk</span>
          <div class="left-text">
            
            <a href="" @click.prevent="go" class="go-to">
              <span>To the page </span>
              <span class="material-symbols-outlined">
                arrow_forward
              </span>
            </a>
            <div class="tool">
             <span>
              HTML, CSS
             </span>
            </div>
            <div>
              <p>
                HTML과 CSS를 이용해 카카오톡 클론코딩을 하였습니다.
                실제 채팅 느낌이 나게 transform의 translateX 사용해 animation 효과를 넣었습니다.
                media query를 이용해 650px이 넘으면 표시되지 않게 화면 크기 제한을 두었습니다.
              </p>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="img" id="img1"></div>
        </div>
      </div>
      <div class="project-content" id="starbucks">
        <div class="left">
          <span class="title">starbucks</span>
          <div class="left-text">
            <a href="https://elastic-spence-57bbf2.netlify.app/" target="_blank" class="go-to">
              <span>To the page </span>
              <span class="material-symbols-outlined">
                arrow_forward
              </span>
            </a>
            <div class="tool">
             <span>
              HTML, CSS, JavaScript
             </span>
            </div>
            <div>
              <p>
                CSS와 HTML를 이용해 만든 스타벅스 메인페이지 클론 코딩입니다.
                main 페이지와 signin 페이지를 구현했습니다.
                lodash 와 GSAP을 이용해 뱃지요소를 숨기고 보이게 하였습니다.
                swiper를 이용해 수직슬라이드 배너를 만들었습니다.
                ScrollMagic을 이용해 스크롤 위치를 계산해 애니메이션 효과를 주었습니다.
              </p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="img" id="img2"></div>
        </div>
      </div>
      <div class="project-content" id="hk-news">
       <div class="left">
          <span class="title">hk news</span>
          <div class="left-text">
            <a href="https://beamish-concha-aa339d.netlify.app" target="_blank" class="go-to">
              <span>To the page </span>
              <span class="material-symbols-outlined">
                arrow_forward
              </span>
            </a>
            <div class="tool">
             <span>
              Vue2, Vuex, VueRouter
             </span>
            </div>
            <div>
              <p>
                Hacker News open API를 사용해 News, Aks, Jobs 리스트를 구현했습니다.
                router에 id를 이용해 사용자 정보와 ask의 질문내용, 코멘트를 볼수있게 만들었습니다.
              </p>
            </div>
          </div>
        </div>
        <div class="right">
           <div class="img" id="img3"></div>
        </div>
      </div>
      <div class="project-content" id="omdb">
        <div class="left">
          <span class="title">omdb api</span>
          <div class="left-text">
            <a href="https://kangsuji.github.io/vue-movie/" target="_blank" class="go-to">
              <span>To the page </span>
              <span class="material-symbols-outlined">
                arrow_forward
              </span>
            </a>
            <div class="tool">
             <span>
              Vue3, Vuex, VueRouter
             </span>
            </div>
            <div>
              <p>
                OMDb API의 open API를 이용해서 영화 검색 사이트를 구현했습니다.
                영화 선택시 영화의 상세정보를 볼수있게 하였습니다.
              </p><br>
              <div>아쉬운점</div>
              <p>
                api응답속도가 느려서 결과를 받기까지 빈화면이 지속됨.
                같은 ID가 있는경우 걸러내지 못함.
              </p>
            </div>
          </div>
        </div>
        <div class="right">
           <div class="img" id="img4"></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"project",
  mounted() {
    if(this.$route.params.message){
      let id = this.$route.params.message;
      const el = document.querySelector(`#${id}`).offsetTop;
      window.scrollTo({top:el, behavior:'smooth'})
    }
      
  },
  methods: {
    go() {
      window.open('https://kangsuji.github.io/izone-talk-2021/','',
      'toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=640, height=1200, top=100,left=300');
    },
    goContent (id) {
      const el = document.querySelector(`#${id}`).offsetTop;
      window.scrollTo({top:el, behavior:'smooth'})
    },
    goTop() {
      window.scrollTo({top:0, behavior:'smooth'})
    }
  }
}
</script>

<style scoped>
.project-section {
  width: 100%;
  height: 100%;
  font-family: 'Libre Baskerville', sans-serif;
  color: #384364;
}
.project-wrap {
  padding: 0px 50px;
  width: 100%;
  box-sizing: border-box;
}
.project-nav {
  margin-top: 200px;
  width: 100%;
  height: 50px;
  font-weight: 700;
  text-transform: uppercase;
}
.project-nav ul {
  display: flex;
  justify-content: space-around;
}
.project-nav li {
  line-height: 50px;
  cursor: pointer;
}
.project-nav li:hover {
  text-decoration: underline;
}
.project-content {
  width: 80%;
  display: flex;
  margin: 0 auto;
  padding: 250px 0px 300px 0px;
}
.project-content .left {
  width: 50%;
  padding-right: 100px;
  box-sizing: border-box;
}
.project-content .title {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 700;
}

.left-text {
  padding: 50px 0px;
  line-height: 1.5rem;
}
.left-text a {
  color: #384364;
  text-decoration: none;
  font-weight: 700;
}
.go-to span{
  padding: 20px 0px;
  vertical-align: middle;
}
.tool {
  padding: 20px 0px;
}
/* Rigth section */
.project-content .right {
  width: 50%;
  height: 40vh;
  
}
.img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
#img1{
background-image: url("../assets/imgs/izone-friends.png");
background-size: contain;
background-position-x: 40%;
}
#img2 {
background-image: url("../assets/imgs/starbucks.jpg");
background-position-x: -250px;
}
#img3 {
background-image: url("../assets/imgs/hknews.jpg");
background-position-x: -200px;
background-position-y: -5px;

}
#img4 {
background-image: url("../assets/imgs/omdb-search.png");
}

.go-top {
  position: fixed;
  width: 35px;
  height: 35px;
  border: 1px solid #384364;
  bottom: 20px;
  right: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  opacity: .7;
}
@media (max-width: 970px) {
  .project-content {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 200px 0px 100px 0px;
  }
  .project-content .left {
    width: 100%;
    padding-right: 0px;
  }
  .project-content .title{
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  .project-content .right {
    width: 100%;
    height: 50vh;
  }
 
}
@media (max-width: 650px) {
  .project-nav {
  margin-top: 50px;
  }
  .project-nav ul {
    display: inline;
    text-align: center;
  }
  .project-nav li {
    line-height: 30px;
  }
 
}
</style>