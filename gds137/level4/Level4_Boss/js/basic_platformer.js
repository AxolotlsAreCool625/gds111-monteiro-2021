//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var fired = false;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:350, height:60, width:60 });

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

	goal = new GameObject({width:24, height:50, x:canvas.width/2, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
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

	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
	}

	if(player.hitTestObject(cannon0))
	{
		if(fired == false) {
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
		}

		if (space == true) {
			fired = true;
			
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
	player.drawRect();
	goal.drawCircle();
}

