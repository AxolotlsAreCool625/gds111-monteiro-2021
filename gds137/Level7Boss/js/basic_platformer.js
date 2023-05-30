//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var jumpRight
var jumpLeft


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:(canvas.width * 6/8), y:(canvas.height * 3/4), height:60, width:60 });

	platform0 = new GameObject();
		platform0.width = canvas.width;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

	platform1 = new GameObject();
		platform1.height = 180;
		platform1.width = 260;
		platform1.x = platform0.width * 3/8 + platform1.width/2 - 25;
		platform1.y = canvas.height - platform1.height/2 - platform0.height;
		platform1.color = "#a0f";

	platform2 = new GameObject();
		platform2.height = canvas.height - platform0.height * 2;
		platform2.width = 50;
		platform2.x = platform0.width * 5/8;
		platform2.y = canvas.height - platform2.height/2 - platform0.height;
		platform2.color = "#a0f";

	platform3 = new GameObject();
		platform3.height = canvas.height - platform0.height;
		platform3.width = 50;
		platform3.x = platform0.width * 7/8;
		platform3.y = canvas.height - platform3.height/2 - platform0.height;
		platform3.color = "#a0f";
	
	platform4 = new GameObject();
		platform4.height = 180;
		platform4.width = 50;
		platform4.x = platform0.width * 3/8;
		platform4.y = platform4.height/2;
		platform4.color = "#a0f";

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	var groundSlam = false;

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
	if(w && jumpRight == true)
	{
		jumpRight = false;
		player.vy = player.jumpHeight/2;
		player.vx = -player.jumpHeight;
		player.x++;
	}
	if(w && jumpLeft == true)
	{
		jumpLeft = false;
		player.vy = player.jumpHeight/2;
		player.vx = player.jumpHeight;
		player.x--;
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
		jumpLeft = false;
		jumpRight = false;
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

	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
		jumpRight = true;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
		jumpLeft = true;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
		jumpRight = true;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
		jumpLeft = true;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
		jumpRight = true;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
		jumpLeft = true;
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(platform4.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform4.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
		jumpRight = true;
	}
	while(platform4.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
		jumpLeft = true;
	}
	while(platform4.hitTestPoint(player.top()) && player.vy <=0)
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

	platform0.drawRect();	
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	
	//Show hit points
	player.drawRect();
}

