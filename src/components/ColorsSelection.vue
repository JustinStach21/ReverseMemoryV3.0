<template>
    <body>

        <h2>Assortments of colors and objects component</h2>


    </body>
</template>

<script>

import { userId } from '../components/UserLogin.vue';
import UserDatabaseService from '../services/UserDatabaseService';
import itemsDatabaseService from '../services/itemsDatabaseService';

export default {
    data(){
        return{
            currentUsersValues: [

            ]
        }
    },
    methods: {
        moveToHomePage(){
            this.$router.push({name: 'UserSettings'});
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