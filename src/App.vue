<template>
  <div id="nav">
    <HelloWorld msg="Welcome to Vue"/>  
<h3>{{ count }}</h3>
    <router-link to="/home">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">SignUp</router-link>    
</div>
<router-view />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed:{
   ...mapState([
     'count',
     'employee'
  ])
}
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
