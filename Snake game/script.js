const container=document.getElementById("gamecontainer")
const gridSize=20
const containerSize=400
let snake=[{ x:200,y:200}]
// snake suruma coordinates 200,200 bata start huncha
let direction={x:0,y:0}
// direction le snake ko direction change garna use hunha
let food=generateFood()
let gameInterval=setInterval(gameloop,150)
// gameloop bhanni function harek 150 millisecond ma update bhawos bhanera
document.addEventListener('keydown',changeDirection)
function changeDirection(e){
    // e bhanesi event wala kam ho bhanera bujhcha automatically
    if(e.key=='ArrowUp' && direction.y==0){
        direction={x:0,y:-gridSize}
        //  arrow up press garda ani snake horizontally hidi racha bhane ie y=0 huda gridsize 1 le badcha - bhayeni tesko kam badhauni ho 
    }
    else if(e.key=='ArrowDown' && direction.y==0){
        direction={x:0,y:gridSize}
        // gridsize ko aghadi - rakhena bhane ghatcha 
    }
    else if(e.key=='ArrowLeft' && direction.x ==0){
        direction={x:-gridSize,y:0}
    }
    else if(e.key=='ArrowRight' && direction.x==0){
        direction={x:gridSize,y:0}
    }
}
function gameloop(){
    const head={x:snake[0].x+direction.x,y:snake[0].y+direction.y}
    // snake[0].x le snake ko current position  coordinate ma patta laucha ani snake[0] ma gayera bascha x: bhaneko x ko coordinate ho bhanera indicate garya ho same ani direction.x le chai tesko direction patta laucha ani add huncha same with y
    if(head.x<0 || head.x>=containerSize || head.y<0 ||head.y>=containerSize){
        // head.x<0 bhaneko left wall head.x>=containerSize == right wall head.y<o == top wall ani head.y>=containerSize== bottom wall 
        alert("Game Over")
        clearInterval(gameInterval)
        return
        // snake ko head le container ko boundary ma choyoo bhane game over bhanera alert aaucha ani onterval clear huncha
    }
    snake.unshift(head)
    // unshift rakhesi snake ko head ko respect ma body ni move garcha 
    if(head.x==food.x && head.y==food.y){
        food=generateFood()
        // snake ko head ko coordinate ra food ko coordinates match garyo bhane generatefood bhanni function chalcha ie naya food generate huncha
    }
    else{
        snake.pop()
        // yesle chai snake ko last part ie tail lai remove garcha ani head ma lyayera jodcha ie old tail becomes new head ani move gareko jasto dekhincha
        
        
        
    }
}
function draw(){
    container.innerHTML=''
    snake.forEach(segment=>{
        const snakePart=document.createElement("div")
        snakePart.classList.add('snake')
        // .classList.add le chai tyo dic ko name snake rakhcha js ma yesari garnu parcha
        snakePart.style.left=segment.x+"px"
        snakePart.style.top=segment.x+"px"
        // yesle aghadi snake bhanni section lai style garya cha internal css ma teslai implement garya ho snake part

        container.appendChild(snakePart)
        // snakePart lai container ma append garaucha ie same div bhitra halcha 

    })
}

