<template>
    <body>
        <div>
            <router-view />
            <button type="button" v-on:click="moveToHomePage()" v-if="playClicked">Play</button>
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


</style>