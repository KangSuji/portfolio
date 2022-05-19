<template>
  <div class="contact-section">
    <div class="contact-wrap">
      <div class="contact-left">
        <div class="title">Contact</div>
        <div>sukang0608@naver.com</div>
        <div>010-9660-5987</div>
      </div>
      <div class="contact-right">
        <form ref="form" @submit.prevent="sendEmail">
          <input type="text" name="to_name" placeholder="Name"/>
          <input type="text" name="email" placeholder="Email"/><br/>
          <p><textarea placeholder="Message" name="message"></textarea></p>
          <input type="submit"  value="SEND"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_ol3eup7',
      'template_wla1yqn', 
      this.$refs.form,
      'RLl_FT-quMydUh_Ve')
      .then( ()=> {
        alert('전송완료');
        this.$router.push('home')
      })
      .catch( (err) => console.log(err))
    }
  }
}
</script>

<style scoped>
  .contact-section {
    width: 100%;
    height: 100%;
    font-family: 'Libre Baskerville', sans-serif;
    color: #384364;
  }
  .contact-wrap {
    padding: 0px 50px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .contact-left {
    width: 50%;
  }
  .contact-left div {
    margin: 50px;
  }
  .contact-left .title {
    font-family: 'Abril Fatface', cursive;
    font-size: 2rem;
  }
  .contact-right{
    width: 50%;
  }
  .contact-right form {
    margin: 50px;
    height: 500px;
    box-sizing: border-box;
  }
  .contact-right form input[type=text] {
    font-family: 'Libre Baskerville', sans-serif;
    width: 100%;
    border: none;
    background: none;
    border-bottom: 1px solid #384364;
    margin-bottom: 50px;
    outline: none;
  }
  .contact-right form input[type=text]:first-child {
    margin-right: 20px;
    width: 50%;
  }
  .contact-right form textarea {
    width: 100%;
    height: 200px;
    background: none;
    border: 1px solid #384364;
    margin-bottom: 10px;
    outline: none;
    font-family: 'Libre Baskerville', sans-serif;
  }
  .contact-right form input[type=submit] {
    width: 60px;
    border: 1px solid #384364;
    background: none;
    border-radius: 10px;
    color: #384364;
    cursor: pointer;
  }
  .contact-right form input[type=submit]:hover {
    background-color: #384364;
    color: #FBF8F3;
  }
  @media (max-width: 650px) {
    .contact-wrap {
      display: block;
    }
    .contact-left {
      width: 100%;
      text-align: center;
    }
    .contact-left div {
      margin: 50px 0px;
    }
    .contact-right{
      width: 100%;
    }
    
  }
</style>