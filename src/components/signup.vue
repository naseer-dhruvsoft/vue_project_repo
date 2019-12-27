<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6" id="leftdiv">
                <div class="centered">
                    <img :src="image" class=".daddyologo" alt="Daddyo_Logo"/>
                    <form name="login" class="signfm" @submit="checkform">
                        <div class="firstname topmargin">
                            <input type="text" name="firstname" placeholder="First Name" v-model="input.firstname" required/>
                        </div>
                        <div class="lastname">
                            <input type="text" name="lastname" placeholder="Last Name" v-model="input.lastname" required/>
                        </div>
                        <div class="email">
                            <input type="email" name="email" placeholder="Email" v-model="input.email" required/>
                        </div>
                        <div class="create">
                            <input type="password" name="create" placeholder="Create Password" v-model="input.createPassword" required/>
                        </div>
                        <div class="confirm">
                            <input type="password" name="confirm" placeholder="Confirm Password" v-model="input.confirmPassword" required/>
                        </div>
                        <div class="signup_button">
                            <button type="submit" class="btn_custom btn-primary btn-block btn-large">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-6" id="rightdiv">
                <div class="centered">
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
  name: 'signup',
  data () {
    return {
      image: image,
      input:
      {
        firstname: '',
        lastname:'',
        email:'',
        createPassword:'',
        confirmPassword:''
      }
    }
  },
  mounted()
  {},
  methods:
  {
    checkform() 
    {
        this.$router.push({ path: '/'});
    }
  }
}
</script>

<style scoped>

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

.topmargin
{
    margin-top: 8px;
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
    *display: inline;
    font-family: "Open Sans",Arial,sans-serif;
    *zoom: 1;
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
    border: 1px solid #e6e6e6; -webkit-border-radius: 4px;
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
    filter: progid:dximagetransform.microsoft.gradient(startColorstr=#020202, endColorstr=#5b9cda, GradientType=0);
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

.signfm 
{
    width: 350px;
    height:350px;
    margin:4px;
    font-family: "Open Sans",Arial,sans-serif;
    background-color: #092756;
    /*background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
    background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
    background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
    background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 ); */
    background: #ffffff;
    color: black;
    margin: 0px auto;
    border-radius: 6px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(216, 221, 230);
    border-image: initial;
}

.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
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

.left {
  left: 0;
  background-color: #ffffff;
}

.right {
  right: 0;
  /* background-color: rgb(193, 211, 235); */
  background-color: rgb(143, 177, 207);
}

.centered {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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

/* h2 
{
    color:#ffffff;
    text-shadow: 0 0 10px rgba(0,0,0,0.3);
    letter-spacing:1px;
    text-align:center;
    margin: 4px;
    font-size: 35px;
    font-family: "Open Sans",Arial,sans-serif;
    max-width: 100%;
    height: auto;
} */

a
{
    color: #0070D2 !important;
    text-decoration: none;
    margin-top: 10px;
    font-size: 13px;
}

html
{
    font-family: "Open Sans", Arial, sans-serif;
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