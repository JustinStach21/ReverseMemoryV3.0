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
            <button type="button" class="color" value="red" id="red" v-on:click="redClicked(this.colorClicked)"></button>
            <button type="button" class="color" value="yellow" id="yellow" v-on:click="yellowClicked(this.colorClicked)"></button>
            <button type="button" class="color" value="blue" id="blue" v-on:click="blueClicked(this.colorClicked)"></button>
            <button type="button" class="color" value="green" id="green" v-on:click="greenClicked(this.colorClicked)"></button>
        </div>

    </body>
</template>

<script>

import { userId } from '../components/UserLogin.vue';
import UserDatabaseService from '../services/UserDatabaseService';

export default {
    data(){
        return{
            display: 0,
            colorsArray: [],
            colorClicked: "null",
            colorsArrayIntervel: 0,
            randomNumber: 0,
            intervalTime: 500
        }
    },
    methods: {
        play(){
        this.addToColorsArray(this.colorsArray, this.randomNumber)
        this.printNextColor(this.colorsArray);

        },

        addToColorsArray(colorsArray, randomNumber){
        randomNumber = Math.random() * 4;
        console.log(randomNumber);
        if(randomNumber <= 1){
        colorsArray.push("red");
        }else if(randomNumber >= 1 && randomNumber <= 2){
        colorsArray.push("yellow");
        }else if(randomNumber >= 2 && randomNumber <= 3){
        colorsArray.push("blue");
        }else if(randomNumber >= 3 && randomNumber <= 4){
        colorsArray.push("green");
        }
        console.log(colorsArray);
        },
        
        printNextColor(colorsArray) {
            let index = 0;
            let displayNextColor = false;
            const color_display = document.getElementById('color_display');
            color_display.innerText = colorsArray[index]
            console.log(this.intervalTime)
            const interval = setInterval(function () {
                if(displayNextColor == true){
                    displayNextColor = false
                    if (++index === colorsArray.length) {
                    clearInterval(interval);
                    return;
                    }

                    const color_display = document.getElementById('color_display');
                    color_display.innerText = colorsArray[index]
                    console.log(color_display)
                }else {
                    displayNextColor = true
                    const color_display = document.getElementById('color_display');
                    color_display.innerText = ' '

                }
            }, this.intervalTime);
        },


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

        redClicked(colorClicked){
        colorClicked = 'red'
        this.isColorCorrect(colorClicked, this.colorsArrayIntervel, this.colorsArray);
        },

        yellowClicked(colorClicked){
        colorClicked = 'yellow'
        this.isColorCorrect(colorClicked, this.colorsArrayIntervel, this.colorsArray);
        },

        blueClicked(colorClicked){
        colorClicked = 'blue'
        this.isColorCorrect(colorClicked, this.colorsArrayIntervel, this.colorsArray);
        },

        greenClicked(colorClicked){
        colorClicked = 'green'
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
        
        updateHighScore(){
            let currentUser = UserDatabaseService.get(userId);
            console.log(currentUser)
            if(this.display > currentUser.highScore){
                const user = {
                    id: currentUser.id,
                    username: currentUser.username,
                    password: currentUser.password,
                    highScore: this.display
                    }
                console.log(UserDatabaseService.get(userId));
                user.highScore = this.display;
                console.log(user);
                UserDatabaseService
                .update(user.id, user)
                .then(response => {
                if (response.status === 200) {
                    this.$router.push({name: 'HomeView'});
                }
                })
                .catch(error => {
                console.error(error);
                });
                }
        }
        
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

#red{
    background-color: red;
    height: 200px;
    width: 225px;
    border-radius: 25px;
}

#yellow{
    background-color: yellow;
    height: 200px;
    width: 225px;
    border-radius: 25px;
}

#blue{
    background-color: blue;
    height: 200px;
    width: 225px;
    border-radius: 25px;
}

#green{
    background-color: green;
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