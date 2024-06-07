<template>
    <div>
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