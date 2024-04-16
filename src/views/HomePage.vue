<template>
    <div>
        <nav>
            <router-link v-bind:to="{name: 'GamePage'}">Game</router-link>
            <h1>{{ query }}</h1>
        </nav>
        
    </div>
</template>

<script>

export default {
    data(){

    }

}

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