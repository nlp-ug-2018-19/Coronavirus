var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

for(var i = 0; i< squares.length; i++) {
    //add initial colors to square
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again"
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        }

    });
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
    
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add random colors to array
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push inot arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
     //pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
      //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," +" " + g + "," + " " + b + ")";
}

resetButton.addEventListener("click", function() {
    messageDisplay.textContent ="";
    h1.style.backgroundColor = "steelblue";
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Color";
    //change colors of the squares on the page
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
})

easyButton.addEventListener("click", function(){
    numSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i< squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }else {squares[i].style.display = "none"}
    }
});

hardButton.addEventListener("click", function(){
    numSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0; i< squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    };
 
});