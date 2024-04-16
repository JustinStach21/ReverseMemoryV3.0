<template>
    <body>
        <div>
            <nav>
                <router-link v-bind:to="{name: 'HomePage'}">Home</router-link>
            </nav>
            <Button id="play" v-on:click="play">Play</Button>
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

export default {
    data(){
        return{
            display: 0,
            colorsArray: [],
            colorClicked: "null",
            colorsArrayIntervel: 0,
            randomNumber: 0
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
        colorsArray.push(' ');
        },
        
        printNextColor(colorsArray) {
            let index = 0;
            const color_display = document.getElementById('color_display');
            color_display.innerText = colorsArray[index]
            const interval = setInterval(function () {
                if (++index === colorsArray.length) {
                    clearInterval(interval);
                    return;
                }

                const color_display = document.getElementById('color_display');
                color_display.innerText = colorsArray[index]
                console.log(colorsArray[index]);
            }, 1000);
        },


        isColorCorrect(colorClicked, colorsArrayIntervel, colorsArray){
        if(colorClicked == colorsArray[colorsArrayIntervel]){
            if(this.colorsArrayIntervel == 0){
                this.addScore();
                this.colorsArrayIntervel = colorsArray.length - 2;
            }else{
                this.colorsArrayIntervel -= 2;
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
        this.clear();
        this.colorsArray = [];
        this.colorsArrayIntervel = 0;

        },

        clear() {
        this.display = 0;
        }
    }
    
}

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