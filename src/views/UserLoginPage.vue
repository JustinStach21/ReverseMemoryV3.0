<template>
    <div>
          <nav>
              <router-link v-bind:to="{name: 'GamePage'}">Game</router-link>
              <router-link v-bind:to="{name: 'CreateNewUser'}">Sign Up</router-link>
          </nav>
          <div>
            <User-Login />
          </div>
          
      </div>
  </template>
  
  <script>
  import UserLogin from '../components/UserLogin.vue';
  
  export default {
    components: {
      UserLogin
    }
  
  }
  
  console.log("UserLogin.vue run confirmed");
  
  </script>
  
  <style>
  nav {
    padding: 30px;
    width: auto;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
    margin: 30px;
  }
  
  
  </style>