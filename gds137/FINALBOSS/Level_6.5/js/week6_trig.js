var canvas = document.getElementById("canvas");
	canvas.addEventListener("mousemove", track);
	canvas.addEventListener("click", startGame);
	canvas.addEventListener("click", details);
	canvas.addEventListener("click", back);

var image = new Image();
	image.src = "images/FirstMechanicPrototype - Jonathan Monteiro.png";
	
var context = canvas.getContext("2d");

var interval = 1000/60;
var timer = setInterval(animate, interval);

var mouse = {x:0,y:0};

var currentState ="loading";
var states = [];

var dot = new GameObject({x:canvas.width* 3/4, y:canvas.height * 7/8, width:100, height:100, color:"blue"})
var dot2 = new GameObject({x:canvas.width/4, y:canvas.height * 7/8, width:100, height:100, color:"orange"})	
var dot3 = new GameObject({x:30, y:30, width:50, height:50, color:"red"})	
var player = new GameObject({x:100, y:350, height:60, width:60 });

platform0 = new GameObject();
platform0.width = canvas.width;
platform0.x = platform0.width/2;
platform0.y = canvas.height - platform0.height/2;
platform0.color = "#66ff33";

cannon0 = new GameObject();
cannon0.width = 100;
cannon0.height = 100;
cannon0.x = canvas.width * 1/2;
cannon0.y = canvas.height * 1/2;
cannon0.color = "#0099ff";


function startGame()
{
	var dx = dot.x - mouse.x;
	var dy = dot.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);
	if(dist < dot.radius())
	{
		changeStates("play");
	}
}

function details()
{
	var dx = dot2.x - mouse.x;
	var dy = dot2.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);
	if(dist < dot2.radius())
	{
		changeStates("instructions");
	}
}

function back()
{
	var dx = dot3.x - mouse.x;
	var dy = dot3.y - mouse.y;
	var dist = Math.sqrt(dx*dx + dy * dy);
	if(dist < dot3.radius())
	{
		changeStates("loading");
	}
}

function track(e)
{
	var rect = canvas.getBoundingClientRect();
	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;
}
	
function changeStates(stateName)
{
	currentState = stateName;
}

states["loading"] = function()
{
	
	context.save();
		context.fillStyle = "black";
		context.font = "bold 78px Arial"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "white";
		context.fillText("Loading", canvas.width/2, canvas.height/2+78/4)
	context.restore();

	currentState = "startMenu";
}

states["startMenu"] = function()
{
	context.save();
		context.fillStyle = "black";
		context.font = "bold 58px Arial"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "white";
		context.fillText("Click the blue dot to play!", canvas.width/2, canvas.height/2-78/4)
		context.fillText("Click the orange dot for details!", canvas.width/2, canvas.height/2+(64))
	context.restore();
	
	player.x = 100;
	player.y = 350;
	dot.drawCircle();	
	dot2.drawCircle();	
}

states["play"] = function()
{  
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	


	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy == 0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
		fired = false;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	if(player.x <= (0 + player.width/2))
	{
		player.x++;
		player.vx = 0;
	}
	if(player.x >= (canvas.width - player.width/2))
	{
		player.x--;
		player.vx = 0;
	}

	if(player.hitTestObject(cannon0))
	{
			player.x = cannon0.x;
			player.y = cannon0.y;

			if (w == true){
				cannon0.direction = 0;
			}
			if (d == true){
				cannon0.direction = 1;
			}
			if (a == true){
				cannon0.direction = 2;
			}

		if (space == true) {
			
			if (cannon0.direction == 0){
				player.y -= cannon0.height;
				player.vy = player.jumpHeight;
			}
			if (cannon0.direction == 1){
				player.x += cannon0.width;
				player.vx = -player.jumpHeight*2;
				player.vy = -1;
			}
			if (cannon0.direction == 2){
				player.x -= cannon0.width;
				player.vx = player.jumpHeight*2;
				player.vy = -1;

			}
			
			}
	}
	
	platform0.drawRect();

	if(cannon0.direction == 1)
	{
		cannon0.drawRightCannon();
	}
	else if (cannon0.direction == 2)
	{
		cannon0.drawLeftCannon();
	}
	else
	{
		cannon0.drawCannon();
	}
	//Show hit points

	context.save();
		context.font = "bold 32px Arial"
		context.textAlign = "center";
		context.fillText("Click Here to go Back", canvas.width/4.2, canvas.height/15)
	context.restore();

	player.drawRect();
	dot3.drawCircle();	
}

states["instructions"] = function()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	context.drawImage(image,0,0, canvas.width, canvas.height);

	
	context.save();
		context.font = "bold 28px Arial"
		context.textAlign = "center";
		context.fillText("Click Here to go Back", canvas.width/4.7, canvas.height/22)
	context.restore();

	dot3.drawCircle();
}


states["message"] = function()
{
	player.x = startX;
	player.y = startY;
	
	dot.drawCircle();
	dot2.drawCircle();	

	player.drawTriangle();	
	
	context.save();
		context.fillStyle = "black";
		context.font = "bold 78px Arial"
		context.textAlign = "center";
		context.fillRect(0, canvas.height/2-100,canvas.width, 200);
		context.fillStyle = "white";
		context.fillText("Congratulations", canvas.width/2, canvas.height/2+(78/4))
	context.restore();
	
	setTimeout(changeStates, 2000, "startMenu")
}



//--------------------------------------------Animation Loop-------------------------------------------
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	states[currentState]();
}



