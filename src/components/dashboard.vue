<template>
  <div class="container-fluid">
    <router-link to="/">Logout</router-link>
    <h1>Hey! You have successfully logged in..</h1>
  </div>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {};
        }
    }
</script>

<style scoped>
h1 
{
    color:#111010;
    text-shadow: 0 0 10px rgba(0,0,0,0.3);
    letter-spacing:1px;
    text-align:center;
    margin: 4px;
    font-size: 35px;
    font-family: "Open Sans",Arial,sans-serif;
}
</style>