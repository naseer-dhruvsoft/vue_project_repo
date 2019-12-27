<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() 
  {
     return {
              authenticated: false,
              mockAccount: 
              {
                  email: "naseer@n",
                  password: "123"
              }
            }
    }
}
</script>

<style>
#app {
  font-family: "Open Sans",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
