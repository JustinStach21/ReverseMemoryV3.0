<template>
    <div class="loading" v-if="isLoading">
      <h1>loading</h1>
    </div>
    <div v-else>
        <div id="main-Div">
          <div id="userInteractionFields">
            <div class="field">
              <label for="name">Username </label>
              <input id="name" name="name" type="text" v-model="document.username" value=""/>
            </div>
            <div class="field">
              <label for="author">Password </label>
              <input id="author" name="author" type="text" v-model="document.password" value=""/>
            </div>
          </div>
          <div id="userInteractionButtons">
            <button id="userLoginButton" type="submit" v-on:click="userLogin()">Login</button>
            <button id="guestLoginButton" v-on:click="guestLogin()">Guest Login</button>
            <button id="userSignUpButton" v-on:click="signUp()">Sign Up</button>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import UserDatabaseService from '../services/UserDatabaseService';
  
  let currentUserId = 0;

  let currentUsername = ' ';

  export let userId = currentUserId;

  export let activeUsername = currentUsername;

  function setCurrentUserId(id){
    currentUserId = id;
    console.log(currentUserId)
    userId = currentUserId
    console.log(userId)
  }

  function setCurrentUsername(username){
    currentUsername = username;
    console.log(currentUsername)
    activeUsername = currentUsername
    console.log(activeUsername)
  }



  export default {

    data() {
      return {
        isLoading: true,
        users: [],
        document: {
        username: " ",
        password: " "
        },
      };
    },
    computed: {
      sortedUsers() {
        return this.users
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
      userLogin(){
        console.log("login clicked");
        for(let i = 0; i < this.users.length; i++){
            if(this.document.username === this.users[i].username && this.document.password === this.users[i].password){
                console.log("log in successful")
                console.log(this.users[i].id)
                setCurrentUserId(this.users[i].id)
                setCurrentUsername(this.users[i].username)
                this.$router.push({name: 'HomePage'});
                break;
            }
        }
      },
      guestLogin(){
        console.log("Guest Login CLicked")
        console.log("log in successful")
        setCurrentUserId(0)
        setCurrentUsername("Guest")
        this.$router.push({name: 'HomePage'});
      },
      signUp(){
        this.$router.push({name: 'CreateNewUser'});

      },
    },
    created() {
      this.getUsers();
    },
  };

  </script>
  
  <style scoped>
  #main-Div{
    margin-top: 5%;
  }

  #userInteractionFields{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  .field{
    margin: 2%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 235%;
    text-align: center;
  }

  #userInteractionButtons{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    gap: 10px;

  }

  #userLoginButton{
    margin-left: 30%;
    width: 20%;
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 150%;
  }

  #guestLoginButton{
    margin: 10px;
    width: 20%;
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 150%;
  }

  #userSignUpButton{
    margin-left: 40%;
    width: 20%;
    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 150%;
  }

  label{
    display: flex;
  }

  </style>
  