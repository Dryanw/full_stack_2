var numSquares = 6;
var pickedColor;
const modes = {hard: 6, easy: 3};


var colors = [];
var squares = document.querySelector('#container');
var display_msg = document.querySelector('#message');

function random_int(range){
    return Math.floor(Math.random() * range);
}


function start(){
    colors = [];
    while (squares.hasChildNodes()){
        squares.removeChild(squares.lastChild);
    }
    for (var i = 0; i<numSquares; i++){
        var random_color = 'rgb(' + random_int(255) + ', ' + random_int(255) + ', ' + random_int(255) + ')';
        if (random_color in colors){
            i--;
            console.log(random_color + ' is already in colors');
            continue;
        }
        colors.push('rgb(' + random_int(255) + ', ' + random_int(255) + ', ' + random_int(255) + ')');
        let new_square = document.createElement('div');
        new_square.className = 'square';
        new_square.style.backgroundColor = colors[i];
        new_square.addEventListener('click', check_color);
        squares.appendChild(new_square);
    }
    pick_color();
    message.innerText = '';
}

function check_color(){
    if (this.style.backgroundColor === pickedColor){
        for (i=0; i<squares.childElementCount; i++){
            squares.childNodes[i].style.backgroundColor = pickedColor;
        }
        display_msg.innerText = "You are good at guessing!";
    } else {
        this.style.backgroundColor = '#232323';
    }
}

function pick_color(){
    pickedColor = colors[Math.floor(Math.random() * numSquares)];
}

function change_mode(mode){
    if (numSquares != modes[mode]){
        numSquares = modes[mode];
        start();
    } else {
        message.innerText = 'Already in ' + mode + ' mode';
    }
}

let reset_button = document.querySelector('#reset');
reset_button.addEventListener('click', start);

let easy_mode = document.querySelector('#easy_mode');
easy_mode.addEventListener('click', function(){change_mode('easy')});

let hard_mode = document.querySelector('#hard_mode');
hard_mode.addEventListener('click', function(){change_mode('hard')});

start();