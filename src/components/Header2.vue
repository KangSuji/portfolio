<template>
  <div>
    <header>
      <div class="gnb-wrap">
        <div class="gnb">
          <div class="logo-wrap">
            <a class="logo">KANG SUJI</a>
          </div>

          <ul class="dep1">
            <li><a>about</a></li>
            <li><a>project</a></li>
            <li><a>contact</a></li>
          </ul>

          <div class="github-wrap">
            <a href=""><img src="../assets/imgs/githubLogo.png" /></a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
header {
  padding: 0;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
.gnb-wrap {
  width: 100%;
}
.gnb {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 80px;
  box-sizing: border-box;
}
.logo-wrap {
  width: 33%;
}
.logo-wrap .logo {
  display: block;
  text-decoration: none;
  color: #000;
  font-size: 2.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  text-align: start;
}

.dep1 {
  text-align: center;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dep1 li {
  padding: 0 20px;
  box-sizing: border-box;
}
.dep1 li a {
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  font-size: 1rem;
  transition: all 0.1s ease-in;
  cursor: pointer;
}
.dep1 li a::after {
  content: "";
  width: 0%;
  height: 2px;
  display: block;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}
/* .dep1 li a:hover {
  font-weight: 900;
} */
.dep1 li:hover a::after {
  width: 100%;
}
.github-wrap {
  width: 33%;
  text-align: end;
}
.github-wrap img {
  width: 100%;
  max-width: 50px;
  transition: all 0.2s ease-in;
}
.github-wrap img:hover {
  transform: translateY(-5px);
}
</style>
