<template>
  <div>
        <div id="Buttons">
            <button id="FourColorGameButton" v-on:click="moveToGamePage()">Game</button>
            <button id="EightColorGameButton" v-on:click="moveTo8GamePage()">8 Color Game</button>
            <button id="FourColorGameButton" v-on:click="moveToLevelsGamePage()">Levels Mode</button>
            <button id="Logout" v-on:click="logout()">Logout</button>
        </div>
        <div>
          <h1 id="username" v-on:click="moveToUserSettingsPage()">{{ currentUsername }}</h1>
          <button id="LeaderBoards" v-on:click="moveToLeaderBoardsPage()">LeaderBoards</button>
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
    moveToGamePage(){
      this.$router.push({name: 'GamePage'});
    },
    logout(){
      this.$router.push({name: 'UserLogin'});
    },
    moveToUserSettingsPage(){
      if(userId != 0){
        this.$router.push({name: 'UserSettings'});
      }
    },
    moveToLeaderBoardsPage(){
      if(userId != 0){
        this.$router.push({name: 'LeaderBoards'});
      }
    },
    moveToLevelsGamePage(){
      this.$router.push({name: 'LevelsMode'});
    },
    moveTo8GamePage(){
      this.$router.push({name: '8GamePage'});
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

#username{
  font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 150%;
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

#LeaderBoards{
  margin-left: 30%;
    width: 20%;
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 150%;
}

#EightColorGameButton{
    width: 20%;
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 150%;
}

</style>