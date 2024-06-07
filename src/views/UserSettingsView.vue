<template>
    <body>

        <h1>This is the user settings page of {{ currentUsername }}</h1>

        <h1 v-on:click="moveToHomePage()">Back to home page</h1>

        <h2>Assortments of colors and objects</h2>
        <div>
            <ColorsSelection />
        </div>

    </body>
</template>

<script>

import { userId } from '../components/UserLogin.vue';
import { activeUsername } from '../components/UserLogin.vue';
import UserDatabaseService from '../services/UserDatabaseService';
import ColorsSelection from '../components/ColorsSelection.vue';

export default {
    components: {
      ColorsSelection
    },
    data(){
        return{
            currentUsername: activeUsername,
            currentUsersValues: [

            ]
        }
    },
    methods: {
        moveToHomePage(){
            this.$router.push({name: 'HomePage'});
        },
        getCurrentUsersValues(){
            UserDatabaseService.get(userId).then(response => {
                this.currentUsersValues = response
                console.log(this.currentUsersValues)
            })
        },
        updateHighScore(currentUser){
            UserDatabaseService.get(userId).then(response => {
                currentUser = response.data;
                console.log(currentUser)
                console.log(currentUser.highScore)
                const updatedUser = {
                    id: userId,
                    username: currentUser.username,
                    password: currentUser.password,
                    highScore: currentScore
                }
                console.log(updatedUser)
                this.updateUser(updatedUser);
           })
        },
        updateUser(updatedUser){
            console.log(updatedUser)
            UserDatabaseService.update(updatedUser.id, updatedUser).then(response => {
            if (response.status === 200) {
                console.log("updated user")
            }
            })
            .catch(error => {
            console.error(error);
            });
        }


    }

}

</script>

<style>



</style>