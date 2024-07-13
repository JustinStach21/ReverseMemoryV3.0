<template>
    <body>
        <div>
            <Button id="play" v-on:click="play">Play</Button>
            <button type="button" v-on:click="moveToHomePage()">Exit</button>
        </div>
        <div id="Score-Display">
            <h1 type="text" id="display" class="Game-Score">{{ display }}</h1>
            <h1 id="color_display"> </h1>
        </div>
        <div id="color_squares">
            <img id="Option1" src="" class="color" v-on:click="Option1Clicked(this.colorClicked)">
            <img id="Option2" src="" class="color" v-on:click="Option2Clicked(this.colorClicked)">
            <img id="Option3" src="" class="color" v-on:click="Option3Clicked(this.colorClicked)">
            <img id="Option4" src="" class="color" v-on:click="Option4Clicked(this.colorClicked)">
        </div>

    </body>
</template>

<script>

import { userId } from '../components/UserLogin.vue';
import UserDatabaseService from '../services/UserDatabaseService';
import ItemDatabaseService from '../services/itemsDatabaseService';

export default {
    data(){
        return{
            gameLoading: true,
            display: 0,
            colorsArray: [],
            colorClicked: "null",
            colorsArrayIntervel: 0,
            randomNumber: 0,
            intervalTime: 500,
            currentUser: {

            },
        }
    },
    methods: {

        //game methods
        play(){
        this.addToColorsArray(this.colorsArray, this.randomNumber)
        this.printNextColor(this.colorsArray);

        },

        addToColorsArray(colorsArray, randomNumber){
        randomNumber = Math.random() * 4;
        console.log(randomNumber);
        if(randomNumber <= 1){
        let Option1 = document.getElementById("Option1")
        colorsArray.push(Option1.name);
        }else if(randomNumber >= 1 && randomNumber <= 2){
        let Option2 = document.getElementById("Option2")
        colorsArray.push(Option2.name);
        }else if(randomNumber >= 2 && randomNumber <= 3){
        let Option3 = document.getElementById("Option3")
        colorsArray.push(Option3.name);;
        }else if(randomNumber >= 3 && randomNumber <= 4){
        let Option4 = document.getElementById("Option4")
        colorsArray.push(Option4.name);
        }
        console.log(colorsArray);
        },
        
        async printNextColor(colorsArray) {
            let index = -1;
            let displayNextColor = false;
            while(true){
                if(displayNextColor == true){
                    displayNextColor = false
                    if (++index === colorsArray.length) {
                        return;
                    }
                    const color_display = document.getElementById('color_display');
                    color_display.innerText = colorsArray[index];
                    await this.sleep(500);
                    console.log(index);
                }else {
                    displayNextColor = true
                    const color_display = document.getElementById('color_display');
                    color_display.innerText = ' '
                    await this.sleep(250);
                    console.log(index);

                }
            }
        },

        sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        },

        //await this.sleep(2000);

        isColorCorrect(colorClicked, colorsArrayIntervel, colorsArray){
        if(colorClicked == colorsArray[colorsArrayIntervel]){
            if(this.colorsArrayIntervel == 0){
                this.addScore();
                this.colorsArrayIntervel = colorsArray.length - 1;
            }else{
                this.colorsArrayIntervel -= 1;
            }
        }else{
            this.incorrect();
        }
        },

        Option1Clicked(colorClicked){
        let Option1 = document.getElementById("Option1")
        colorClicked = Option1.name
        this.isColorCorrect(colorClicked, this.colorsArrayIntervel, this.colorsArray);
        },

        Option2Clicked(colorClicked){
        let Option2 = document.getElementById("Option2")
        colorClicked = Option2.name
        this.isColorCorrect(colorClicked, this.colorsArrayIntervel, this.colorsArray);
        },

        Option3Clicked(colorClicked){
        let Option3 = document.getElementById("Option3")
        colorClicked = Option3.name
        this.isColorCorrect(colorClicked, this.colorsArrayIntervel, this.colorsArray);
        },

        Option4Clicked(colorClicked){
        let Option4 = document.getElementById("Option4")
        colorClicked = Option4.name
        this.isColorCorrect(colorClicked, this.colorsArrayIntervel, this.colorsArray);
        },

        addScore() {
        this.display += 1;
        this.play();
        },

        incorrect(){
        const color_display = document.getElementById('color_display');
        color_display.innerText = 'Game Over Final Score: ' + this.display;
        this.updateHighScore();
        this.clear();
        this.colorsArray = [];
        this.colorsArrayIntervel = 0;

        },

        clear() {
        this.display = 0;
        },

        //non game methods

        moveToHomePage(){
            this.$router.push({name: 'HomePage'});
        },
        
        updateHighScore(currentUser){
            let currentScore = this.display
            console.log(this.display)
            UserDatabaseService.get(userId).then(response => {
                currentUser = response.data;
                console.log(currentUser)
                console.log(currentUser.highScore)
                if(currentScore > currentUser.highScore && userId != 0){
                    console.log("Current Score is higher than high score")
                    const updatedUser = {
                        id: userId,
                        username: currentUser.username,
                        password: currentUser.password,
                        highScore: currentScore,
                        fourColorsPicked: currentUser.fourColorsPicked,
                        eightColorsPicked: currentUser.eightColorsPicked
                    }
                    console.log(updatedUser)
                    this.updateUser(updatedUser);
                    
                 }
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

        //game setup methods

        setOptions(){
            UserDatabaseService.get(userId).then(response => {
                let currentUser = response.data
                console.log(currentUser)
                let colorsNeeded = currentUser.fourColorsPicked
                console.log(colorsNeeded)
                let itemsNeeded = []
                ItemDatabaseService.list().then(response => {
                    let items = response.data
                    console.log(items)
                    for(let colorIteration = 0; colorIteration <= colorsNeeded.length; colorIteration++){
                        for(let itemIteration = 0; itemIteration < items.length; itemIteration++){
                            if(colorsNeeded[colorIteration] == items[itemIteration].id){
                                itemsNeeded.push(items[itemIteration])
                            }
                        }
                    }
                    console.log(itemsNeeded)
                    var image = document.getElementById("Option1")
                    image.src = itemsNeeded[0].src
                    image.setAttribute('name', itemsNeeded[0].itemName)
                    console.log(image)
                    var image2 = document.getElementById("Option2")
                    image2.src = itemsNeeded[1].src
                    image2.setAttribute('name', itemsNeeded[1].itemName)
                    console.log(image2)
                    var image3 = document.getElementById("Option3")
                    image3.src = itemsNeeded[2].src
                    image3.setAttribute('name', itemsNeeded[2].itemName)
                    console.log(image3)
                    var image4 = document.getElementById("Option4")
                    image4.src = itemsNeeded[3].src
                    image4.setAttribute('name', itemsNeeded[3].itemName)
                    console.log(image4)
                })
            })
        }
        
    },
    created(){
        this.setOptions();
    }
    
}

console.log("Gamepage.vue run confirmed");

</script>

<style>

#color_squares{
    display: grid;
    grid-template-columns: 225px 225px;
    row-gap: 20px;
    column-gap: 20px;
    justify-content: center;
    margin-top: 50px;
}

#Score-Display{
    display: grid;
    place-items: center;
}

#color_display{
    margin-top: 150px;
    position: fixed;
}


#display{
    background-color: white;
    font-size: 50px;
    text-align: center;
    border: 5px;
    width: 45px;
    color: black;
}

#Option1{
    height: 200px;
    width: 225px;
    border-radius: 25px;
}
#Option2{
    height: 200px;
    width: 225px;
    border-radius: 25px;
}
#Option3{
    height: 200px;
    width: 225px;
    border-radius: 25px;
}
#Option4{
    height: 200px;
    width: 225px;
    border-radius: 25px;
}

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