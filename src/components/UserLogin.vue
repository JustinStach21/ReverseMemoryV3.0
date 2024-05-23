<template>
    <div class="loading" v-if="isLoading">
      <h1>loading</h1>
    </div>
    <div v-else>
        <div>
            <div class="field">
            <label for="name">Username</label>
            <input id="name" name="name" type="text" v-model="document.username" />
            </div>
            <div class="field">
            <label for="author">Password</label>
            <input id="author" name="author" type="text" v-model="document.password" />
            </div>
            <button type="submit" v-on:click="userLogin()">Login</button>
        </div>
    <table>
      <tbody>
        <tr v-for="user in sortedDocs" v-bind:key="user.id">
          <td class="name">{{ user.username }}</td>
          <td> {{ user.password }} </td>
          <td> {{ user.highScore }} </td>
          <td>
            <button v-on:click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
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
      sortedDocs() {
        return this.users
      }
    },
    methods: {
      getUsers() {
        UserDatabaseService.list().then(response => {
          this.isLoading = false;
          this.users = response.data;
        });
      },
      userLogin(){
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
      deleteUser(id) {
        this.isLoading = true;
        UserDatabaseService.delete(id)
          .then(response => {
            this.isLoading = false;
            if (response.status === 200) {
              this.getUsers();
            }
          })
          .catch(error => {
            this.loading = false;
            if (error.response.status === 404) {
              this.$router.push({ name: 'NotFoundView' });
            } else {
              console.error(error);
            }
          });
      },
    },
    created() {
      this.getUsers();
    },
  };

  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
  }
  
  th {
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    text-align: left;
  }
  
  tr {
    margin: 20px;
    padding: 10px;
  }
  
  td {
    padding: 8px;
    font-family: "Work Sans", sans-serif;
  }
  
  td.name {
    font-weight: 400;
  }
  
  .docs-icon img {
    height: 32px;
  }
  
  .avatar {
    border-radius: 20px;
    width: 32px;
    vertical-align: middle;
    padding-right: 5px;
  }
  
  .ownedby {
    vertical-align: middle;
  }
  </style>
  