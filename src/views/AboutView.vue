<template>
  <div class="about-section">
    <div class="about-content-wrap" >
      <div class="about-content">
        <div class="info-title back-to-position to-right">Info</div>
        <div class="info-content back-to-position to-right">
          <div>KANG SUJI</div>
          <div>1994.06.08</div>
          <div>sukang0608@naver.com</div>
          <div>010-9660-5987</div>
        </div>
      </div>
      <div class="about-content">
        <div class="info-title back-to-position to-left">Experience</div>
        <div class="info-content back-to-position to-left">
          <div>2020. 06. 12. ~ 2020. 11. 26.(총 800시간)</div>
          <div>이젠아카데미</div>
          <p>
            [과정평가형]정보처리산업기사(JAVA, 자바프로그래밍, 백엔드 웹개발자)B
          </p><br/>
          <div>훈련내용</div>
          <p>
            애플리케이션 배포/ 프로그래밍 언어활용/ 응용SW 기초기술 활용/ 
            화면 구현/ SQL활용/ 
          </p>
        </div>
        
      </div>
      <div class="about-content ">
        <div class="info-title back-to-position to-right">Career</div>
        <div class="info-content back-to-position to-right">
          <div>2016. 07. ~ 2020. 02.</div>
          <span>(주)아이시티 정보</span>
          <span>물류/생산팀</span>
          <ul class="career-info back-to-position to-right">
            <li>노트북 및 데스크탑 하드웨어 업그레이드</li>
            <li>중고제품 검수 및 간단한 수리</li>
            <li>소프트웨어 설치</li>
            <li>노트북 및 컴퓨터 유지보수</li>
            <li>제품 재고관리</li>
          </ul>
         
        </div>
       
      </div>
      <div class="about-content">
        <div class="info-title back-to-position to-left">Skills</div>
        <div class="info-content back-to-position to-left">
          <ul class="skill-info">
            <li>
              Vue
              <p>
                vue2,vue3를 써본 경험이 있습니다. 
                vue-router, vuex 사용할수있습니다.
              </p>
            </li>
            <li>
              JAVA SCRIPT
              <p>
                ES6+ 문법을 사용할수 있습니다.
                webpack, parcel등의 번들러 사용경험이 있습니다.
              </p>
            </li>
            <li>HTML5/CSS3
              <p>
                웹표준을 지키려 노력합니다. scss문법을 사용해본적이 있습니다.
                tailwind,bootstrap을 사용해본 경험이 있습니다.
                BEM 방법론을 적용할수 있습니다.
              </p>
            </li>
            
            <li>JAVA
              <p>
                java를 이용한 로직작성이 가능합니다.
              </p>
            </li>
            <li>JSP
              <p>
                model2 방식을 사용해 게시판, 쇼핑몰을 만들어본 경험이 있습니다.
              </p>
            </li>
            <li>SQL
              <p>
                DML, DDL, DCL문법과 기본함수를 사용할 수 있습니다.
              </p>
            </li>
          </ul>
        </div>
        
      </div>
      <div @click="goTop" class="go-top">Top</div>
    </div>
  </div>
</template>

<script>
import Scrollmagic from 'scrollmagic';

export default {
  mounted() {
    const el = document.querySelectorAll('.about-content');
    for(let i =0; i< el.length; i++){
      el.item(i).classList.remove('show');
    }
    this.$nextTick(function() {
      el.forEach(function(el) {
        new Scrollmagic.Scene({
          triggerElement: el,
          triggerHook: 0.55
        }).setClassToggle(el, 'show')
        .addTo(new Scrollmagic.Controller());
      });
      
    })
  },
  methods: {
    goTop() {
      window.scrollTo({top:0, behavior:'smooth'})
    }
  }
}
</script>

<style scoped>
  .about-section {
    width: 100%;
   
  }
  .about-content-wrap {
    width: 50vw;
    margin: 0 auto;
  }
  .about-content:first-child {
    margin-top: 200px;
  }
  .about-content {
    margin-bottom: 100px;
    width: 100%;
    
    font-family: 'Abril Fatface', Nanum Gothic;
    opacity: 0;
    transition: 0.5s;
  }
  .about-content.show {
    opacity: 1;
  }
  .back-to-position {
    opacity: 0;
    transition: 1s;
  }
  .back-to-position.to-right {
    transform: translateX(-150px);
  }
  .back-to-position.to-left {
    transform: translateX(150px);
  }
  .show .back-to-position {
    opacity: 1;
    transform: translateX(0);
  }
  


  .about-content .info-title {
    padding: 50px 0px;
    font-size: 3rem;
  }
  .info-content {
    line-height: 25px;
    font-size: 1rem;
    margin-bottom: 20px;
  }
  .career-info{
    margin-bottom: 30px;
  }
  .career-info li:first-child {
    margin-top: 10px;
  }
  .career-info li {
    line-height: 30px;

  }
  .skill-info li {
    
    font-size: 1.5rem;
    margin-bottom: 10px;
    
  }
  .skill-info li p {
    margin-left: 10px;
    font-size: 1.2rem;
  }
  .about-content:last-child {
    margin-bottom: 200px;
  }
  .go-top {
  position: fixed;
  width: 35px;
  height: 35px;
  border: 1px solid #384364;
  bottom: 20px;
  right: 50px;
  text-align: center;
  line-height: 35px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  opacity: .7;
}
@media (max-width: 650px) {
  .career-info li:first-child {
    margin-top: 10px;
  }
  .career-info li {
    margin-bottom: 10px;
  }
  .skill-info {
    display: block;
  }
  .skill-info li {
    text-align: start;  
  }
}
</style>