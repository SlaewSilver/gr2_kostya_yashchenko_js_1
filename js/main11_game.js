$(document).ready(function () {

const GAME_STEP_DELAY = 0;

let currentGameStep = 0;
  

  /*
  угол столкновения
  var x = 150 - 100;
var y = 150 - 100;
var angleDegrees = Math.atan2(x, y) * 180 / Math.PI;

if (angleDegrees < 0) angleDegrees += 360;  // force positive value
  console.log(angleDegrees);*/
  
  

function getGameStepTime () {
    let dateNow = new Date();
    return `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}.${dateNow.getMilliseconds()}`;
}
//-----------
function Ball (options) {
    this.id = generate_Id();
    this.diametr = options.diametr;
    this.color = options.color;
    this.x = options.x;
    this.y = options.y;
    this.directionX = options.startDirectionX || 1;
    this.directionY = 1;

    //console.log('ball', this.id, this.directionX);
    this.createView = function () {
		let result = document.createElement('div');
		result.style.cssText = `
		display: inline-block;
		position: absolute;
		border-radius: 50%;
		left: ${this.x}px;
		top: ${this.y}px;
		width: ${this.diametr}px;
		height: ${this.diametr}px;
		background: ${this.color}`;
		//result.innerText = this.id;
		document.documentElement.append(result);
		return result;
    }

    this.div = this.createView();

    this.renderState = function () {
		this.x = this.x + this.directionX;
		this.y = this.y + this.directionY;
    }

    this.renderView = function () {
		this.div.style.left = this.x + 'px';
		this.div.style.top = this.y + 'px';
    }

    this.live = function () {
		this.renderState();
		this.renderView();  
    }

    this.invertDirectionX = function () {
		this.directionX = this.directionX * -1;
    }

    this.invertDirectionY = function () {
		this.directionY = this.directionY * -1;
    }
}
  //----------------
function Block (options) {
    this.id = generate_Id();
    this.diametr = options.diametr;
	this.width = options.diametr * 2;
	this.height = options.diametr;
    this.color = options.color;
    this.x = options.x;
    this.y = options.y;

    this.createView = function () {
		let result = document.createElement('div');
		result.id = this.id;
		result.style.cssText = `
		display: inline-block;
		border-radius: 5px;
		position: absolute;
		left: ${this.x}px;
		top: ${this.y}px;
		width: ${this.width}px;
		height: ${this.height}px;
		background-color: ${this.color}`;
		//result.innerText = this.id;
		document.documentElement.append(result);
		return result;
    }

    this.div = this.createView();

    this.renderState = function () {

    }

    this.renderView = function () {

    }

    this.live = function () {
		this.renderState();
		this.renderView();  
    }

    this.invertDirectionX = function () {

    }

    this.invertDirectionY = function () {
		
    }
}
//---------------
  function Wall (options) {
    this.id = generate_Id();
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    
    this.createView = function () {
		let result = document.createElement('div');
		result.style.cssText = `
		position: absolute;
		left: ${this.x}px;
		top: ${this.y}px;
		width: ${this.width}px;
		height: ${this.height}px;
		background: green;
		`;
		document.documentElement.append(result);
		return result;
    }

    this.div = this.createView();

    this.renderState = function () {
		
    }

    this.renderView = function () {
		
    }

    this.live = function () {
		this.renderState();
		this.renderView();
    }
}
//--------------
function Racket (options) {
    this.id = generate_Id();
    this.x = options.x;
    this.y = options.y;
    this.width = Math.min(options.width, 100);
    this.height = Math.min(options.height, 100);
    this.width = Math.max(this.width, 10);
    this.height = Math.max(this.height, 10);

    this.createView = function () {
		let result = document.createElement('div');
		result.style.cssText = `
		position: absolute;
		border-radius: 15px;
		left: ${this.x}px;
		top: ${this.y}px;
		width: ${this.width}px;
		height: ${this.height}px;
		background: red;
		`;
		document.documentElement.append(result);
		return result;
    }

    this.div = this.createView();

    this.renderState = function () {
      
    }

    this.renderView = function () {
		this.div.style.left = this.x + 'px';
    }

    this.doMove = function (event) {
		if ((event.x < objects[2].x - (this.width / 2))
		&& event.x > objects[2].width + (this.width / 2))
		this.x = event.x - (this.width / 2);
    }
	
    this.live = function () {
		this.renderState();
		this.renderView();
    }
}
/*
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // стрелка вверх
		console.log('стрелка вверх');
    }
    else if (e.keyCode == '40') {
        // стрелка вниз
		console.log('стрелка вниз');
    }
    else if (e.keyCode == '37') {
       // стрелка влево
	   console.log('стрелка влево');
    }
    else if (e.keyCode == '39') {
       // стрелка вправо
	   console.log('стрелка вправо');
    }
}
*/
let objects = [];
let box_id = [];
let box_id_ind = -1;
let value_end = 0;
let result_end = 0;

objects.push( new Wall({
	x: 0,
	y: 0,
	//width: document.documentElement.clientWidth,
	width: 965,
	height: 10,
}));

objects.push( new Wall({
	x: 0,
	y: 0,
	width: 10,
	height: document.documentElement.clientHeight,
}));

objects.push( new Wall({
	//x: document.documentElement.clientWidth - 10,
	x: 955,
	y: 0,
	width: 10,
	height: document.documentElement.clientHeight,
}));
/*
objects.push( new Ball({
	diametr: 50,
	color: 'blue',
	x: 50,
	y: 50,
	startDirectionX: -0.8,
}));

objects.push( new Ball({
	diametr: 40,
	color: 'orange',
	x: 200,
	y: 200,
}));

objects.push( new Ball({
	diametr: 60,
	color: 'purple',
	x: 300,
	y: 300,
	startDirectionX: 0.8,
}));
*/
objects.push( new Ball({
	diametr: 30,
	color: random_color(),
	x: 450,
	y: 450,
	startDirectionX: -1,
}));
  
generate_Block()

let r = new Racket({
	x: 10,
	y: document.documentElement.clientHeight - 40,
	width: 90,
	height: 20,
});
  
	document.documentElement.onmousemove = r.doMove.bind(r);
	objects.push(r);
  
function generate_Block() {
	let n=20;
	let k=9;
	let array_x=Array.from({length:12},(v,k)=>k*75);
	let array_y=Array.from({length:4},(v,k)=>k*100);
	let shuffled_x = array_x.sort(function(){return .5 - Math.random()});
	let shuffled_y = array_y.sort(function(){return .5 - Math.random()});
	let selected_x=shuffled_x.slice(0,n);
	let selected_y=shuffled_y.slice(0,n);
	
	result_end = k * selected_y.length;
	for (let i=0; i<k; i++) {
		for (let j=0; j<selected_y.length; j++)
			objects.push( new Block({
				diametr: 25,
				color: random_color(),
				x: selected_x[i] + 20,
				y: selected_y[j] + 20,
			}));
	}
}

function generate_Id() {
	box_id_ind++;
	box_id[box_id_ind] = Math.trunc(Math.random() * 1000);
	if (box_id.includes(box_id[box_id_ind]) == true) {
		return box_id[box_id_ind];
	} else {
		generate_Id()
	}
}

function random_color() {
	let value = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
	return value;
}
  
function checkCollision (objectA, objectB) {
	  
    if (objectA !== objectB) {
		let ball = null;
		let ball2 = null;
		let wall = null;
		let racket = null;
		let block = null;

		if (objectA instanceof Ball) {
			ball = objectA;
		} else if (objectA instanceof Wall) {
			wall = objectA;
		}

		if (objectB instanceof Ball) {
			ball = objectB;
		} else if (objectB instanceof Wall) {
			wall = objectB;
		}

		if (objectA instanceof Racket) {
			racket = objectA;
		} else if (objectB instanceof Racket) {
			racket = objectB;
		}

		if (objectA instanceof Block) {
			block = objectA;
		} else if (objectB instanceof Block) {
			block = objectB;
		}

		if (objectA instanceof Ball) {
			ball = objectA;
		} else if (objectA instanceof Wall) {
			wall = objectA;
		}

		if (objectB instanceof Ball) {
			ball2 = objectB;
		} else if (objectB instanceof Wall) {
			wall2 = objectB;
		}
	  
		if (ball && wall) {
			if ((ball.x + ball.diametr <= wall.x 
				|| ball.x >= wall.x + wall.width)
				&& (ball.y >= wall.y) && (ball.y <= wall.y + wall.height)
			) {
				ball.invertDirectionX();
			}

			if (ball.x >= wall.x 
				&& ball.x <= wall.x + wall.width 
				&& ball.y <= wall.y + objects[0].height
			) {
				ball.invertDirectionY();
			}
		}
	
		if (ball && racket) {
			if (ball.y + ball.diametr >= racket.y) {
				for (let i=Math.round(racket.x); i<Math.round(racket.x) + racket.width; i++) {
					for (let j=Math.round(ball.x); j<Math.round(ball.x) + ball.diametr; j++) {
						if (i == j) {
							ball.invertDirectionY();
							return;
						}
					}
				}
			}
				
			if (ball.x + ball.diametr >= racket.x 
				&& ball.x <= racket.x + racket.width
				&& ball.y + ball.diametr >= racket.y 
				&& ball.y  <= racket.y + racket.height
			) {
				for (let i=Math.round(racket.y); i<Math.round(racket.y) + racket.height; i++) {
					for (let j=Math.round(ball.y); j<Math.round(ball.y) + ball.diametr; j++) {
						if (i == j) {
							ball.invertDirectionX();
							return;
						}
					}
				}
			}
		}
	
		if (ball && block) {
			if (ball.x + ball.diametr >= block.x 
				&& ball.x <= block.x + block.width
				&& ball.y + ball.diametr >= block.y 
				&& ball.y  <= block.y + block.height
			) {
				for (let i=Math.round(block.y); i<Math.round(block.y) + block.height; i++) {
					for (let j=Math.round(ball.y); j<Math.round(ball.y) + ball.diametr; j++) {
						if (i == j)	{
							ball.invertDirectionX();
							if (document.getElementById(block.id) != null) 
								document.getElementById(block.id).remove();
							for (let k=0; k<objects.length; k++) {
								if (objects[k] != undefined 
									&& block.id != undefined 
									&& objects[k].id != undefined )
								if (block.id == objects[k].id) {
									value_end++;
									delete objects[k];
								}
							}
							return;
						}
					}
				}
			}
			
			if (ball.y + ball.diametr >= block.y
				&& ball.y <= block.y + block.height 
				&& (((ball.x + ball.diametr) >= block.x)
				&& (ball.x <= block.x + block.width))
			) {
				for (let i=Math.round(block.x); i<Math.round(block.x) + block.width; i++) {
					for (let j=Math.round(ball.x); j<Math.round(ball.x) + ball.diametr; j++) {
						if (i == j) {
							ball.invertDirectionY();
							if (document.getElementById(block.id) != null) 
								document.getElementById(block.id).remove();
							for (let k=0; k<objects.length; k++) {
									if (objects[k] != undefined 
										&& objects[k].id != undefined 
										&& block.id != undefined )
									if (block.id == objects[k].id) {	
										value_end++;
										delete objects[k];
									}
							}
							return;
						}
					}
				}
			}
		}
	/*if (ball && ball2) {
		dx = bal2.x - ball.x;
		dy = bal2.y - ball.y;
		dist = Math.sqrt(dx * dx + dy * dy);
		if (dist < ((ball.x / 2)+(ball2.x / 2)) {
			var angle = Math.atan2(dy, dx),
			sin = Math.sin(angle),
			cos = Math.cos(angle),	
			
		}
	}*/
	}
}

var rotate = function (x, y, sin, cos, reverse) {
	return {
		x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
		y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
	};
}

function isGameOver () {
	let balls = objects.filter(item => item instanceof Ball);
	let racket = objects.find(item => item instanceof Racket);
	if (result_end <= value_end) return true;
	return !!balls.find(ball => ball.y > racket.y + racket.height);
}

function doGameStep () {
	let currentGameStepTime = getGameStepTime();

    // console.log('doGameStep', currentGameStep, currentGameStepTime);

    for(let i=0; i < objects.length; i++) {
		if (objects[i] != undefined )
			objects[i].live();
    }

    for(let i=0; i < objects.length; i++) {
		let objectA = objects[i];
		for (let j= i + 1; j < objects.length; j++ ) {
			let objectB = objects[j];
			checkCollision(objectA, objectB);
		}
    }

		let gameOver = isGameOver();

		currentGameStep++;
		if (!gameOver) {
			setTimeout(doGameStep, GAME_STEP_DELAY);
		} else {
			alert('Игра закончена');
		}
	}
  
	//document.body.style.overflow = 'hidden';
	setTimeout(doGameStep, GAME_STEP_DELAY);
});