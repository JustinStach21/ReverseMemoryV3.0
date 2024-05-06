<template>
    <form v-on:submit.prevent>
        <div class="field">
        <label for="name">Username</label>
        <input id="name" name="name" type="text" v-model="document.username" />
        </div>
        <div class="field">
        <label for="author">Password</label>
        <input id="author" name="author" type="text" v-model="document.password" />
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
        id: Math.floor(Math.random() * (1000 - 100) + 100),
        username: " ",
        password: " "
      }
    };
  },
  methods: {
    saveUser() {
      UserDatabaseService
        .create(this.document)
        .then(response => {
          if (response.status === 201) {
            this.$router.push({name: 'HomePage'});
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    cancel() {
      this.$router.push({name: 'HomePage'});
    }
  }
};
</script>

<style scoped>
form {
  padding: 20px;
  font-size: 16px;
  width: 500px;
}
form * {
  box-sizing: border-box;
  line-height: 1.5;
}
.field {
  display: flex;
  flex-direction: column;
}
.field label {
  margin: 4px 0;
  font-weight: bold;
}
.field input,
.field textarea {
  padding: 8px;
}
.field textarea {
  height: 300px;
}
.actions {
  text-align: right;
  padding: 10px 0;
}
</style>