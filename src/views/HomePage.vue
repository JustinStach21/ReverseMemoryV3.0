<template>
  <div>
        <div id="Buttons">
            <button id="FourColorGameButton" v-bind:to="{name: 'GamePage'}">Game</button>
            <button id="Logout" v-bind:to="{name: 'UserLogin'}">Logout</button>
        </div>
        <div>
          <h1 v-on:click="moveToUserSettingsPage()">{{ currentUsername }}</h1>
        </div>

        
    </div>
</template>

<script>

import { userId } from '../components/UserLogin.vue';
import { activeUsername } from '../components/UserLogin.vue';

export default {
  data(){
    return{
      currentUser: userId,
      currentUsername: activeUsername

    }
  },
  computed:{

  },
  methods: {
    moveToUserSettingsPage(){
      if(userId != 0){
        this.$router.push({name: 'UserSettings'});
      }
    }

  }
}

console.log("Homeview.vue run confirmed");

</script>

<style>
#buttons {
  border: 3px solid red;
  margin-top: 5%;
  padding: 30px;
  width: auto;
}

#FourColorGameButton{
  margin-left: 30%;
    width: 20%;
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 150%;
}

#Logout{
  margin-left: 30%;
    width: 20%;
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 150%;
}


</style>