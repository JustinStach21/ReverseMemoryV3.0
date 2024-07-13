<template>
    <form v-on:submit.prevent>
        <div class="field">
        <label for="name">Username</label>
        <input id="name" name="name" type="text" v-model="document.username" value=""/>
        </div>
        <div class="field">
        <label for="author">Password</label>
        <input id="author" name="author" type="text" v-model="document.password" value=""/>
        </div>
        <div class="actions">
        <button type="button" v-on:click="cancel()">Cancel</button>&nbsp;
        <button type="submit" v-on:click="saveUser()">Save User</button>
        </div>
    </form>
</template>

<script>
import UserDatabaseService from '../services/UserDatabaseService';

export default {
  data() {
    return {
      document: {
        id: Math.floor(Math.random() * (10000 - 1000) + 1000),
        username: " ",
        password: " ",
        highScore: 0,
        fourColorsPicked: [1, 2, 3, 4],
        eightColorsPicked: [1, 2, 3, 4, 5, 6, 7, 8]
      }
    };
  },
  methods: {
    saveUser() {
      UserDatabaseService
        .create(this.document)
        .then(response => {
          if (response.status === 201) {
            this.$router.push({name: 'UserLogin'});
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    cancel() {
      this.$router.push({name: 'UserLogin'});
    }
  }
};
</script>

<style scoped>
  label{
      display: flex;
  }

  .field{
    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 150%;
  }
</style>