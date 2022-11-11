<template>
  <section class="home-main-section02">
    <div class="skil-list-wrap">
      <p class="sec-title">Project</p>
      <ul>
        <li>
          <p class="project-name">NCS</p>
        </li>
        <li>
          <p class="project-name">KIADA</p>
        </li>
        <li>
          <p class="project-name">태성건설</p>
        </li>

        <li>
          <p class="project-name">아맘때</p>
        </li>
        <li>
          <p class="project-name">HK news</p>
        </li>
        <li>
          <p class="project-name">omdb api</p>
        </li>
        <li>
          <p class="project-name">starbucks</p>
        </li>
        <li>
          <p class="project-name">kakao talk</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap");
.home-main-section02 {
  width: 100%;
  margin-top: 80px;
  background-color: #151515;
  padding: 50px 0;
}
.skil-list-wrap {
  width: 80%;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
}
.sec-title {
  font-family: "Raleway", sans-serif;
  font-size: 5rem;
  color: #fff;
}
.skil-list-wrap ul {
  display: flex;
  margin-top: 20px;
  color: #fff;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}
.skil-list-wrap ul li p {
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-name {
  font-size: 2rem;
  display: block;
  width: 350px;
  height: 250px;
  border-radius: 20px;
  border: 1px solid #fff;
}
</style>
