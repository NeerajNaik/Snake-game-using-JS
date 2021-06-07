import { getInputDirection } from "./input.js";

export const Snake_Speed = 5;

const snakeBody = [{x:11,y:11}]
let newSegments = 0
export function update(){

    addSegments()
    const inputDirection = getInputDirection()
    console.log(snakeBody)
    for(let i = snakeBody.length-2; i>=0 ;i--)
    {
        snakeBody[i+1] = {...snakeBody[i]}
        // console.log(snakeBody[i+1])
    }
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;

    

}

export function draw(gameBoard){
    snakeBody.forEach((segment,index)=>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        if(index===0){
        // const snakeEyes = document.createElement('div')  
        // snakeEyes.classList.add('dot')
        // snakeElement.append(snakeEyes)  
        snakeElement.classList.add('snakehead')
        
        }
        else{
        snakeElement.classList.add('snake')
        }
        gameBoard.append(snakeElement)
    })

}

export function expandSnake(amount){
    newSegments+=amount
}

export function onSnake(position,{ignoreHead=false}={}){
   return snakeBody.some((segment,index)=>{
        if (ignoreHead && index === 0) return false
        return equalPositions(segment,position)
    })

}

export function getSnakeHead(){
    
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0],{ignoreHead:true})
}

function equalPositions(pos1,pos2){
    return pos1.x===pos2.x && pos1.y===pos2.y
}


function addSegments(){
    for(let i=0;i<newSegments;i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})

    }

    newSegments = 0
}