<template>
    <body>
        <div>
            <router-view />
            <button id="mainPlayButton" type="button" v-on:click="moveToHomePage()" v-if="playClicked">Play</button>
        </div>
        
    </body>
</template>

<script>

export default {
    data(){
        return{
            playClicked: true,
        };
    },
    methods:{
        moveToHomePage(){
            this.playClicked = false;
            this.$router.push({name: 'UserLogin'});
        },
    }

}

console.log("App.vue run confirmed");

</script>

<style>

#mainPlayButton {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;

    padding: 20px 30px;
    border: 2px solid black;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 30px;
}

</style>