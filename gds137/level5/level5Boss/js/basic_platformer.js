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
		platform1.width = canvas.width/2;
		platform1.x = platform1.width/2;
		platform1.y = canvas.height/2;
		platform1.color = "#66ff33";

	platform2 = new GameObject();
		platform2.width = canvas.width * 1/2;
		platform2.x = canvas.width * 7/8;
		platform2.y = canvas.height/2;
		platform2.color = "#66ff33";

	ladder0 = new GameObject();
		ladder0.x = canvas.width * 4.5/8;
		ladder0.height = 250;
		ladder0.y = canvas.height - platform0.height*2.25;


	goal = new GameObject({width:24, height:50, x:canvas.width/8, y:100, color:"#00ffff"});
	
	var img = document.getElementById("Ladder");


	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

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

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	

	while(platform0.hitTestPoint(player.bottom(player.y-1)) && player.vy >=0)
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
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
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
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	if(ladder0.hitTestPoint(player.bottom()))
	{
		player.canJump = false;
		player.vy = 0;
		player.y--;

		if(w == true)
		{
			player.y -= 5;
		}
		if(s == true)
		{
			player.y += 5;

			if(player.y >= platform0.y - platform0.height/1.25)
				player.y = platform0.y - 1 - platform0.height/1.25;
		}
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

	//ladder0.drawRect();
	context.drawImage(img, ladder0.x - ladder0.width/1.8, ladder0.y - ladder0.height/1.83, ladder0.width * 1.1 , ladder0.height * 1.08);

	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();

	//Show hit points
	player.drawRect();
	goal.drawCircle();
}

