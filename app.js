let canvas = document.querySelector('.canvas');
console.log(canvas);
let ctx = canvas.getContext('2d');
console.log(ctx);
let snake = [{x:5,y:5}];
let food = {x:10,y:4};
let dx=1,dy=0;
function drawfood(){
	ctx.fillStyle="red";
	ctx.fillRect(food.x*20,food.y*20,20,20);
}
function drawSnake(snakeEl){
	snakeEl.forEach(segment=>{
		ctx.fillStyle="green";
		ctx.fillRect(segment.x*20,segment.y*20,20,20);
	});
}
var pChoice = document.querySelector('.pChoice');
let onoo =0;
function moveSnake(){
	let head = {x:snake[0].x+dx, y:snake[0].y+dy}
	snake.unshift(head);
	if(head.x==food.x && head.y==food.y){
		food = {
			x:Math.floor(Math.random()*20),
			y:Math.floor(Math.random()*20),
		}
		onoo++;
		pChoice.innerText="snake point:"+onoo;
	}else{
		snake.pop();
	}
	if(head.y==20 || head.x==20 || head.y<0 || head.x<0){
		alert("GAME OVER");
		snake = [{x:5,y:5}]
	}
	ctx.clearRect(0,0,canvas.width, canvas.height);
	drawfood();
	drawSnake(snake);
}
setInterval(moveSnake,200);
// object ruu . ashiglaj handana
document.addEventListener('keydown',(e)=>{
	console.log(e.key);
	if(e.key=="ArrowDown"){
		if(dy!==-1){
			dx=0;
			dy=1;
		}
	}else if(e.key=="ArrowUp"){
		if(dy!==-1){
			dx=0;
			dy=-1;
		}
	}else if(e.key=="ArrowLeft"){
		if(dx!==1){
			dx=-1;
			dy=0;
		}
	}else if(e.key=="ArrowRight"){
		if(dx!==-1){
			dx=1;
			dy=0;
		}
	}
});