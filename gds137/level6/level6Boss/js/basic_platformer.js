//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:(canvas.height * 3/4), height:60, width:60 });

	platform0 = new GameObject();
		platform0.width = canvas.width;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

	platform1 = new GameObject();
		platform1.height = 50;
		platform1.width = canvas.width/4;
		platform1.x = platform0.width * 1/4;
		platform1.y = canvas.height/2 + platform0.height/2;
		platform1.color = "#a0f";

	platform2 = new GameObject();
		platform2.height = 50;
		platform2.width = canvas.width/4;
		platform2.x = platform0.width * 1/4;
		platform2.y = canvas.height * 1/4 + platform0.height/2;
		platform2.color = "#a0f";

	box0 = new GameObject();
		box0.x = canvas.width * 2/4;
		box0.y = canvas.height - canvas.height * 2/8;
		box0.color = "#964B00";

	box1 = new GameObject();
		box1.x = canvas.width * 3/4;
		box1.y = canvas.height - canvas.height * 2/8 - box1.height;
		box1.color = "#964B00";

	box2 = new GameObject();
		box2.x = canvas.width * 3/4;
		box2.y = canvas.height - canvas.height * 2/8;
		box2.color = "#964B00";

	
	var img = document.getElementById("Ladder");

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	var groundSlam = false;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(player.vx >= 0)
	{
		groundSlam = false;
	}
	if(space && player.canJump && player.vy == 0)
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
	if(s)
	{
		if (player.canJump != true || player.vy > 0)
		{
			player.vx = 0;
			player.vy += 1.8;
			groundSlam = true;
		}
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

	while(box0.hitTestPoint(player.bottom()) && (groundSlam == true))
	{
		box0.y = 10000;
	}
	while(box0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(box0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(box0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(box0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(box1.hitTestPoint(player.bottom()) && (groundSlam == true))
	{
		box1.y = 10000;
	}
	while(box1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(box1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(box1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(box1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	while(box2.hitTestPoint(player.bottom()) && (groundSlam == true))
	{
		box2.y = 10000;
	}
	while(box2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(box2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(box2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(box2.hitTestPoint(player.top()) && player.vy <=0)
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

	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
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
	box0.drawRect();
	box1.drawRect();
	box2.drawRect();


	//Show hit points
	player.drawRect();
}

