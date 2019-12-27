<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6" id="leftdiv">
                <div class="centered">
                    <img :src="image" class=".daddyologo" alt="Daddyo_Logo"/>
                    <div id="wrapper">
                        <form name="login" class="logfm" @submit="login" v-on:submit.prevent="onSubmit">
                            <div id="status" class="alert alert-danger feedback" style="display:none;">
                                Please enter valid credentials
                            </div>
                            <div class="username un">
                                <input type="email" name="email" placeholder="Email" v-model="input.email" required />
                            </div>
                            <div class="password">
                                <input type="password" name="password" placeholder="Password" v-model="input.password" required/>
                            </div>
                            <div class="log_button">
                                <button type="submit" class="btn_custom btn-primary btn-block btn-large">Log In</button>
                            </div>
                            <div class="routelink">
                                <router-link id="fr" to="/signup">New User?</router-link>
                                <router-link id="fl" to="/forgot">Forgot Password?</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6" id="rightdiv">
                <div class="centered">
                    <div class="content">
                        <h1>
                            About Daddyo
                        </h1>
                        <p>
                            Biopsies analysis can be performed instantly, either in the field or in the lab, with rapid results for both the doctor and the patient.
                        </p>
                        <p>
                            Sperm cell count, morphology and motility can be measured from anywhere, including comfort and privacy of the patient’s home.
                        </p>
                        <p>
                            Any test traditionally performed at the point of care (POC) and that are also provider-performed microscopy (PPM) can also be analyzed by Daddyo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import dashboard from '@/components/dashboard'
import signup from '@/components/signup'
import axios from 'axios'
import image from '@/components/daddyo_logo.png'

Vue.use(BootstrapVue)

export default {
  name: 'login',
  data () {
    return {
      image: image,
      input:
      {
        email: '',
        password: ''  
      }
    }
  },
  mounted()
  {},
  methods: 
  {
      login(e) 
      {
          if(this.input.email != "" && this.input.password != "") 
          {
              if(this.input.email == this.$parent.mockAccount.email && this.input.password == this.$parent.mockAccount.password) 
              {
                  this.$router.replace({ name: "dashboard" });
              } 
              else 
              {
                  document.getElementById('status').style.display = '';
              }
          } 
      }
    }
}
</script>

<style scoped>
#status
{
    font-family: "Open Sans",Arial,sans-serif;
    font-size: 13px;
}

#fr
{
    float: right;
    margin-right: 34px;
    padding-top: 16px;
}

#fl
{
    float: left;
    margin-left: 34px;
    padding-top: 16px;
}

#leftdiv
{
    height: 789px;
    overflow: hidden;
}
#rightdiv
{
    height: 789px;
    overflow: hidden;
    background-color: rgb(143, 177, 207);
}


.daddyologo
{
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
    max-width: 180px;
    max-height: 113px;
}

.avatar
{
    width: 100%;
    height: 100%;
}

.btn_custom
{
    display: inline-block;
    font-family: "Open Sans",Arial,sans-serif;
    padding: 4px 10px 4px;
    margin-bottom: 4px;
    font-size: 13px;
    line-height: 18px;
    color: #333333;
    text-align: center;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    vertical-align: middle;
    background-color: #f5f5f5;
    background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));
    background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: linear-gradient(top, #ffffff, #e6e6e6);
    background-repeat: repeat-x;
    filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0);
    border-color: #e6e6e6 #e6e6e6 #e6e6e6;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border: 1px solid #e6e6e6;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 6px;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    *margin-left: .3em;
}

.btn:hover, .btn:active, .btn.active, .btn.disabled, .btn[disabled] 
{
    background-color: #e6e6e6;
}

.btn-large 
{
    padding: 8px;
    font-size: 13px;
    line-height: normal;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 6px;
    max-width: 100%;
    height: auto;
}
.btn:hover 
{
    color: #333333;
    text-decoration: none;
    background-color: #e6e6e6;
    background-position: 0 -15px;
    -webkit-transition: background-position 0.1s linear;
    -moz-transition: background-position 0.1s linear;
    -ms-transition: background-position 0.1s linear;
    -o-transition: background-position 0.1s linear;
    transition: background-position 0.1s linear;
}
.btn-primary, .btn-primary:hover 
{
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    color: #ffffff;
}
.btn-primary.active 
{
    color: rgba(255, 255, 255, 0.75);
}
.btn-primary 
{
    background-color: #5b9cda;
    background-image: -moz-linear-gradient(top, #6eb6de, #5b9cda);
    background-image: -ms-linear-gradient(top, #6eb6de, #5b9cda);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#5b9cda));
    background-image: -webkit-linear-gradient(top, #6eb6de, #5b9cda);
    background-image: -o-linear-gradient(top, #6eb6de, #5b9cda);
    background-image: linear-gradient(top, #6eb6de, #5b9cda);
    background-repeat: repeat-x;
    filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#5b9cda, GradientType=0);
    border: 1px solid #3762bc;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5);
}
.btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] 
{
    filter: none;
    background-color: #5b9cda;
}
.btn-block 
{
    width: 80%;
    margin: 8px;
}

* {
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -ms-box-sizing:border-box;
    -o-box-sizing:border-box;
    box-sizing:border-box;
}

.logfm 
{
    width: 350px;
    height:300px;
    margin:4px;
    min-height: 230px;
    font-family: "Open Sans",Arial,sans-serif;
    background: #ffffff;
    color: black;
    margin: 0px auto;
    border-radius: 6px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(216, 221, 230);
    border-image: initial;
}

.centered {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.un
{
    margin-top: 8px;
}

.centered img {
  width: 150px;
}

h1 
{
    color:#111010;
    text-shadow: 0 0 10px rgba(0,0,0,0.3);
    letter-spacing:1px;
    text-align:center;
    margin: 4px;
    font-size: 35px;
    font-family: "Open Sans",Arial,sans-serif;
    max-width: 100%;
    height: auto;
}

a
{
    color: #0070D2 !important;
    font-family: "Open Sans",Arial,sans-serif;
    text-decoration: none;
    margin-top: 10px;
    font-size: 13px;
}

html
{
    font-family: "Open Sans",Arial,sans-serif;
    margin-bottom: 10px;
    padding: 0px;
}

img 
{
    font-family: "Open Sans",Arial,sans-serif;
    width: 100%;
    margin: 8px;
    height: auto;
    border: none;
    outline: none;
    padding: 8px;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.3);

}

input:focus 
{
    box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2);
}
input
{
    font-family: "Open Sans",Arial,sans-serif;
    width: 80%;
    margin: 8px;
    /* background: rgba(0,0,0,0.3); */
    border: none;
    outline: none;
    padding: 8px;
    font-size: 13px;
    color: black;
    /* text-shadow: 1px 1px 1px rgba(0,0,0,0.3); */
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 6px;
    /* box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2); */
    /* -webkit-transition: box-shadow .5s ease;
    -moz-transition: box-shadow .5s ease;
    -o-transition: box-shadow .5s ease;
    -ms-transition: box-shadow .5s ease;
    transition: box-shadow .5s ease; */
    max-width: 100%;
    height: auto;
}
</style>