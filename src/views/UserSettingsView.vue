<template>
    <body>

        <h1>This is the user settings page of {{ currentUsername }}</h1>

        <h1 v-on:click="moveToHomePage()">Back to home page</h1>

        <h2 v-on:click="openFourColorSelectionSetting()">Assortments of Four colors and objects</h2>

        <h2 v-on:click="openEightColorSelectionSetting()">Assortments of Eight colors and objects</h2>
        <label>Delete Account</label>
        <button v-on:click="deleteUser(currentUserId)"></button>
        <div>
            <div id="currentSelectionFour">
                
            </div>
            <div id="selectionOptionsFour">
                <table>
                    <tbody>
                        <tr v-for="itemArraysFour in sortedItemsFour" v-bind:key="itemArraysFour">
                            <td id="Item1">
                                <img id="itemObjects" v-bind:src="itemArraysFour[0].src">
                                <h2 id="itemObjectNames"> {{ itemArraysFour[0].itemName }} </h2>
                            </td>
                            <td id="Item2">
                                <img id="itemObjects" v-bind:src="itemArraysFour[1].src">
                                <h2 id="itemObjectNames"> {{ itemArraysFour[1].itemName }} </h2>
                            </td>
                            <td id="Item3">
                                <img id="itemObjects" v-bind:src="itemArraysFour[2].src">
                                <h2 id="itemObjectNames"> {{ itemArraysFour[2].itemName }} </h2>
                            </td>
                            <td id="Item4">
                                <img id="itemObjects" v-bind:src="itemArraysFour[3].src">
                                <h2 id="itemObjectNames"> {{ itemArraysFour[3].itemName }} </h2>
                            </td>
                            <tr>
                                <td>
                                    <button v-on:click="updateUsersColorSelectionFour(itemArraysFour[0].id, itemArraysFour[1].id, itemArraysFour[2].id, itemArraysFour[3].id)">Select Colors</button>
                                </td>
                            </tr>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="currentSelectionEight">
                
            </div>
            <div id="selectionOptionsEight">
                <table>
                    <tbody>
                        <tr v-for="itemArraysEight in sortedItemsEight" v-bind:key="itemArraysEight">
                            <td id="Item1">
                                <img id="itemObjects" v-bind:src="itemArraysEight[0].src">
                                <h2 id="itemObjectNames"> {{ itemArraysEight[0].itemName }} </h2>
                            </td>
                            <td id="Item2">
                                <img id="itemObjects" v-bind:src="itemArraysEight[1].src">
                                <h2 id="itemObjectNames"> {{ itemArraysEight[1].itemName }} </h2>
                            </td>
                            <td id="Item3">
                                <img id="itemObjects" v-bind:src="itemArraysEight[2].src">
                                <h2 id="itemObjectNames"> {{ itemArraysEight[2].itemName }} </h2>
                            </td>
                            <td id="Item4">
                                <img id="itemObjects" v-bind:src="itemArraysEight[3].src">
                                <h2 id="itemObjectNames"> {{ itemArraysEight[3].itemName }} </h2>
                            </td>
                            <td id="Item4">
                                <img id="itemObjects" v-bind:src="itemArraysEight[4].src">
                                <h2 id="itemObjectNames"> {{ itemArraysEight[4].itemName }} </h2>
                            </td>
                            <td id="Item4">
                                <img id="itemObjects" v-bind:src="itemArraysEight[5].src">
                                <h2 id="itemObjectNames"> {{ itemArraysEight[5].itemName }} </h2>
                            </td>
                            <td id="Item4">
                                <img id="itemObjects" v-bind:src="itemArraysEight[6].src">
                                <h2 id="itemObjectNames"> {{ itemArraysEight[6].itemName }} </h2>
                            </td>
                            <td id="Item4">
                                <img id="itemObjects" v-bind:src="itemArraysEight[7].src">
                                <h2 id="itemObjectNames"> {{ itemArraysEight[7].itemName }} </h2>
                            </td>
                            <tr>
                                <td>
                                    <button v-on:click="updateUsersColorSelectionEight(itemArraysEight[0].id, itemArraysEight[1].id, itemArraysEight[2].id, itemArraysEight[3].id, itemArraysEight[4].id, itemArraysEight[5].id, itemArraysEight[6].id, itemArraysEight[7].id)">Select Colors</button>
                                </td>
                            </tr>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </body>
</template>

<script>

import { userId } from '../components/UserLogin.vue';
import { activeUsername } from '../components/UserLogin.vue';
import UserDatabaseService from '../services/UserDatabaseService';
import ColorsSelection from '../components/ColorsSelection.vue';
import ItemDatabaseService from '../services/itemsDatabaseService';

export default {
    components: {
      ColorsSelection
    },
    data(){
        return{
            currentUserId: userId,
            currentUsername: activeUsername,
            itemArraysFour: [],
            itemArraysEight: [],

        }
    },
    computed: {
      sortedItemsFour() {
        return this.itemArraysFour
      },
      sortedItemsEight() {
        return this.itemArraysEight
      }
    },
    methods: {
        changeImage(item){
            const newImage = document.getElementById("ItemOneImage")
            newImage.src = item.src
        },
        moveToHomePage(){
            this.$router.push({name: 'HomePage'});
        },
        openFourColorSelectionSetting(){
            ItemDatabaseService.list().then(response => {
                let items = response.data
                let previousGroups = []
                console.log(items)
                const table = document.createElement('table');
                table.id = 'ItemTable';
                for(let itemIteration = 0; itemIteration < items.length; itemIteration = itemIteration + 4){
                    let itemRow = []
                    let item = items[itemIteration]
                    if(!previousGroups.includes(item.groupName)){
                        itemRow.push(item)
                        let item2 = items[itemIteration + 1]
                        itemRow.push(item2)
                        let item3 = items[itemIteration + 2]
                        itemRow.push(item3)
                        let item4 = items[itemIteration + 3]
                        itemRow.push(item4)
                        this.itemArraysFour.push(itemRow)
                        console.log(this.itemArraysFour)
                        previousGroups.push(item.groupName)
                    }
                }
            })
        },
        
        updateUsersColorSelectionFour(selectionValueOne, selectionValueTwo, selectionValueThree, selectionValueFour){
            let fourColorsPicked = []
            fourColorsPicked.push(selectionValueOne)
            fourColorsPicked.push(selectionValueTwo)
            fourColorsPicked.push(selectionValueThree)
            fourColorsPicked.push(selectionValueFour)
            console.log(fourColorsPicked)
            UserDatabaseService.get(userId).then(response => {
                let currentUser = response.data;
                const updatedUser = {
                    id: userId,
                    username: currentUser.username,
                    password: currentUser.password,
                    highScore: currentUser.highScore,
                    fourColorsPicked: fourColorsPicked,
                    eightColorsPicked: currentUser.eightColorsPicked
                }
                this.updateUser(updatedUser);
           })
        },

        openEightColorSelectionSetting(){
            ItemDatabaseService.list().then(response => {
                let items = response.data
                let previousGroups = []
                console.log(items)
                const table = document.createElement('table');
                table.id = 'ItemEightTable';
                for(let itemIteration = 0; itemIteration < items.length; itemIteration = itemIteration + 8){
                    let itemRow = []
                    let item = items[itemIteration]
                    if(!previousGroups.includes(item.groupName)){
                        itemRow.push(item)
                        let item2 = items[itemIteration + 1]
                        itemRow.push(item2)
                        let item3 = items[itemIteration + 2]
                        itemRow.push(item3)
                        let item4 = items[itemIteration + 3]
                        itemRow.push(item4)
                        let item5 = items[itemIteration + 4]
                        itemRow.push(item5)
                        let item6 = items[itemIteration + 5]
                        itemRow.push(item6)
                        let item7 = items[itemIteration + 6]
                        itemRow.push(item7)
                        let item8 = items[itemIteration + 7]
                        itemRow.push(item8)
                        this.itemArraysEight.push(itemRow)
                        console.log(this.itemArraysEight)
                        previousGroups.push(item.groupName)
                    }
                }
            })
        },

        updateUsersColorSelectionEight(selectionValueOne, selectionValueTwo, selectionValueThree, selectionValueFour, selectionValueFive, selectionValueSix, selectionValueSeven, selectionValueEight){
            let eightColorsPicked = []
            eightColorsPicked.push(selectionValueOne)
            eightColorsPicked.push(selectionValueTwo)
            eightColorsPicked.push(selectionValueThree)
            eightColorsPicked.push(selectionValueFour)
            eightColorsPicked.push(selectionValueFive)
            eightColorsPicked.push(selectionValueSix)
            eightColorsPicked.push(selectionValueSeven)
            eightColorsPicked.push(selectionValueEight)
            console.log(eightColorsPicked)
            UserDatabaseService.get(userId).then(response => {
                let currentUser = response.data;
                const updatedUser = {
                    id: userId,
                    username: currentUser.username,
                    password: currentUser.password,
                    highScore: currentUser.highScore,
                    fourColorsPicked: currentUser.fourColorsPicked,
                    eightColorsPicked: eightColorsPicked
                }
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
        },
        deleteUser(id) {
        this.isLoading = true;
        UserDatabaseService.delete(id)
          .then(response => {
            this.isLoading = false;
            if (response.status === 200) {
                this.$router.push({ name: 'UserLogin' });
            }
          })
          .catch(error => {
            this.loading = false;
            if (error.response.status === 404) {
              console.log("user not found")
            } else {
              console.error(error);
            }
          });
      }


    }

}

</script>

<style>

#itemObjects{
    height: 100px;
    width: 125px;
    border-radius: 25px;
    margin: 20px;
}

#itemObjectNames{
    height: 100px;
    width: 125px;
    border-radius: 25px;
    margin: 20px;
    text-align: center;
}

</style>