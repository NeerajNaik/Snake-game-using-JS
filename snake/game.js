import {update as updateSnake,Snake_Speed,draw as drawSnake,
    getSnakeHead,snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime=0
let gameOver=false
let gameBoard=document.getElementById('gameboard')    

function main(currentTime){

    if(gameOver){
        if(confirm('You Loose \n Press Ok to Restart   ')){
            window.location = '/'
        }
        return
    }


window.requestAnimationFrame(main);
// console.log('hi')
const secondsSinceLastRender = (currentTime -lastRenderTime)/1000;
// console.log(secondsSinceLastRender);

if(secondsSinceLastRender < 1/Snake_Speed) return
console.log('render');
lastRenderTime=currentTime;

update();
draw();
}


window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
    
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}