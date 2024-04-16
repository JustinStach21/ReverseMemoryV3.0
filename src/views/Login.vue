<template>
    <div>
        <h1>{{ users }}</h1>
    </div>
</template>

<script>

import usersService from '../services/UsersService';

export default {
    data(){
        return {
            isLoading: true,
            users: ["no"]
        }
    },
    methods: {
        getUsers(){
            this.users = usersService.getUsers();
        }
    }

}

</script>

<style>

</style>