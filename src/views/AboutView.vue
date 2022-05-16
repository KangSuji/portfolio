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
            [과정평가형]정보처리산업기사(JAVA, 자바프로그래밍, 백엔드 웹개발자) B
          </p>
        </div>
        <div class="info-content back-to-position to-left">
          <div>2015. 08. ~ 2016. 05.</div>
          <div>Flapjack Pantry</div>
          <p>아르바이트</p>
        </div>
        <div class="info-content back-to-position to-left">
          <div>2014. 03. ~ 2015. 07.</div>
          <div>Bistro Re-</div>
          <p>아르바이트</p>
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
            <li>Vue</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JAVA SCRIPT</li>
            <li>JAVA</li>
            <li>JSP</li>
            <li>SQL</li>
          </ul>
        </div>
        
      </div>
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
  
}
</script>

<style scoped>
  .about-section {
    width: 100%;
    overflow: hidden;
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
    height: 400px;
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
    font-size: 1.2rem;
  }
  .career-info{
    margin-bottom: 30px;
  }
  .career-info li {
    line-height: 30px;

  }
  .skill-info {
    display: flex;
    
  }
  .skill-info li {
    font-size: 1.5rem;
    margin-right: 20px;
  }
  .about-content:last-child {
    margin-bottom: 200px;
  }
</style>