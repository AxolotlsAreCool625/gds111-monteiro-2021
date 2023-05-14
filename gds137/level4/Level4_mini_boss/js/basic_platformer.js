//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var goalReached;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 200;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";

	platform1 = new GameObject();
		platform1.width = 200;
		platform1.height = 300;
		platform1.x = canvas.width - platform1.width/2;
		platform1.y = canvas.height - platform0.height/2;
		platform1.color = "#66ff33";

	boost0 = new GameObject();
		boost0.width = 60;
		boost0.height = 60;
		boost0.x = canvas.width/3;
		boost0.y = canvas.height * 3/4;
		boost0.color = "#0099ff";

	boost1 = new GameObject();
		boost1.width = 60;
		boost1.height = 60;
		boost1.x = canvas.width * 2/3;
		boost1.y = canvas.height * 3/4;
		boost1.color = "#0099ff";

	boost2 = new GameObject();
		boost2.width = 60;
		boost2.height = 60;
		boost2.x = canvas.width - platform1.width/2;
		boost2.y = canvas.height * 2/5;
		boost2.color = "#0099ff";
		
	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

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
	
	//---------Objective: Treasure!!!!!!!---------------------------------------------------------------------------------------------------- 
	//---------Run this program first.
	//---------Get Creative. Find a new way to get your player from the platform to the pearl. 
	//---------You can do anything you would like except break the following rules:
	//---------RULE1: You cannot spawn your player on the pearl!
	//---------RULE2: You cannot change the innitial locations of platform0 or the goal! 
		
	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		goalReached = true;
	}
	
	if(goalReached == true)
	{
		context.textAlign = "center";
		context.font = '60px Arial';
    	context.fillText("You Win!", canvas.width/2, canvas.height/2);
	}
	if(player.hitTestObject(boost0) || player.hitTestObject(boost1) || player.hitTestObject(boost2))
	{
		player.vy = player.jumpHeight;
	}
	
	platform0.drawRect();
	platform1.drawRect();

	boost0.drawTri();
	boost1.drawTri();
	boost2.drawTri();

	//Show hit points
	player.drawRect();
	goal.drawCircle();
}

