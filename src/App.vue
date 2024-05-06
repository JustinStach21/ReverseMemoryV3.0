<template>
    <body>
        <div>
            <router-view />
            <button type="button" v-on:click="moveToHomePage()">Play</button>
        </div>

    </body>
</template>

<script>

export default {
    methods:{
        moveToHomePage(){
            this.$router.push({name: 'HomePage'});
        }
    }

}

console.log("App.vue run confirmed");

</script>

<style>


</style>