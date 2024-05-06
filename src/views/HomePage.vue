<template>
    <div>
        <nav>
            <router-link v-bind:to="{name: 'GamePage'}">Game</router-link>
            <router-link v-bind:to="{name: 'CreateNewUser'}">Sign Up</router-link>
        </nav>
        <div>
          <label>Username</label><input type="text" id="username">
          <label>Password</label><input type="text" id="password">
          <button id="LoginInButton">Login In</button>
        </div>
        
    </div>
</template>

<script>
import UserDatabaseService from '../services/UserDatabaseService';


export default {
    data(){
      return{
        users: []
      }
    },
    methods: {
      listUsers(){
        UserDatabaseService.list().then(response => {
          this.users = response.data;
        })
      }
    }

}

console.log("Homeview.vue run confirmed");

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