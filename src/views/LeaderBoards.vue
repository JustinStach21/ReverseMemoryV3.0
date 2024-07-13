<template>
    <div class="loading" v-if="isLoading">
      <h1>loading</h1>
    </div>
    <div v-else>
        <button id="HomePage" v-on:click="moveToHomePage()">Back to home</button>
    <div id="LeaderBoardFourColorsTableHolder">
      <table id="LeaderBoardFourColorsTable">
        <tbody id="LeaderBoardFourColorsTableBody">
          <h3 id="LeaderBoardFourColorsTableHeader">Four Colors LeaderBoard</h3>
          <tr v-for="user in sortedUsers" v-bind:key="user.id">
            <td id="LeaderBoardUserNames" class="name">{{ user.username }}</td>
            <td id="LeaderBoardHighScores"> {{ user.highScore }} </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>
  
  <script>
  import UserDatabaseService from '../services/UserDatabaseService';

  export default {

    data() {
    return {
        isLoading: true,
        users: []
    };
    },
    computed: {
    sortedUsers() {
        return this.users.sort((a, b) => b.highScore - a.highScore)
    }
    },
    methods: {
        getUsers() {
            UserDatabaseService.list().then(response => {
            this.isLoading = false;
            this.users = response.data;
            console.log(this.users)
            });
        },
        moveToHomePage(){
            this.$router.push({name: 'HomePage'});
        }
    },
    created() {
      this.getUsers();
    }
  }
  
  </script>

  <style>
  #LeaderBoardFourColorsTable{
    width: 10%;
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 100%;
  }

  #LeaderBoardUserNames{
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    text-align: center;
  }

  #LeaderBoardHighScores{
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    text-align: center;
  }

  #LeaderBoardFourColorsTableHeader{
    font-size: 200%;
  }

  #HomePage{
    margin-left: 70%;
      width: 20%;
      padding: 20px 30px;
      border: 2px solid black;
      border-radius: 5px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      font-size: 150%;
  }

  </style>