<template>
  <div>
        <nav>
            <router-link v-bind:to="{name: 'GamePage'}">Game</router-link>
            <router-link v-bind:to="{name: 'UserLogin'}">Logout</router-link>
        </nav>
        <div>
          <h1>{{ currentUsername }}</h1>
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