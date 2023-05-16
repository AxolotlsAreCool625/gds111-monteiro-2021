var canvas;
var context;
var interval = 1000/60;

var ballImg = document.getElementById("ric");

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

timer = setInterval(animate, interval);

var player = new GameObject();
player.height = 40;
player.width = 250;
player.x = canvas.width/2
player.y = canvas.height - 50;
player.color = "#00ffff";
player.drawRect();
var playerScore = 0;
player.ax = 1.5;
player.force = 1.5;
player.friction = .9;

var ball = new GameObject();
ball.width = 80;
ball.height = 80;
ball.vx = 0;
ball.vy = 0;
ball.force = 2;

gravity = 1;

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	//player movement
	if(a && (player.x > (player.width/2))) {
			player.vx += player.ax * -player.force;
			player.vx *= player.friction;
			player.x += player.vx;
		}

	if(d && (player.x < (canvas.width - player.width/2))) {
			player.vx += player.ax * player.force;
			player.vx *= player.friction;
			player.x += player.vx;
		}

	if (player.x < (player.width/2)) {
		player.x = 0 + player.width/2;
		player.vx = 0;
	}

	if (player.x > (canvas.width - player.width/2)) {
		player.x = canvas.width - player.width/2;
		player.vx = 0;
	}

	player.vx *= player.friction;
	player.x += player.vx;

	// console.log(player.vx); was using this to check if acceleration occured.


	//ball movement

	ball.vy += gravity
	ball.x += ball.vx;
	ball.y += ball.vy;

	/*if(ball.x < 0 + ball.width/2 || ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx;
	}*/

	if (ball.x < 0 + ball.width/2) {
		ball.vx = -ball.vx;
		ball.x = 0 + ball.width/2;
	}
	if (ball.x > canvas.width - ball.width/2) {
		ball.vx = -ball.vx;
		ball.x = canvas.width - ball.width/2;
	}

	if(ball.y < 0 + ball.height/2)
	{
		ball.vy = -ball.vy;
	}

	if ( ball.y > canvas.height - ball.height/2)
		{
			ball.vy = -ball.vy * .67;
			ball.y = canvas.height - ball.height/2;
			playerScore = 0;
		}

	
	if(ball.left() < player.right() && ball.right() > player.left() && ball.top() < player.bottom() && ball.bottom() > player.top() )
	{
		collision = "true";
	}
	else
	{
		collision = "false";
	}

	
	if (collision == "true")
	{
		playerScore += 1;

		ball.y -= player.height;
		ball.vy = -35;

		if (ball.x < player.x - player.width/3) 
		{
			ball.vx = -ball.force * 5;
			console.log("Collision Far Left");
		}
		else if (ball.x < player.x - player.width/6) 
		{
			ball.vx = -ball.force;
			console.log("Collision Left");
		}
		else if (ball.x > player.x + player.width/3)
		{
			ball.vx = ball.force * 5;
			console.log("Collision Far Right");
		}
		else if (ball.x > player.x + player.width/6)
		{
			ball.vx = ball.force;
			console.log("Collision Right");
		}
		else
		{
			console.log("Collision Middle");
		}
	}

	//draw score
	context.font = "16px Arial";
	context.color = '#555';
	context.fillText("Score: ", 80, 25);
	context.fillText(playerScore, 130, 25);


	//draw objects
	player.drawRect();
	ball.drawCircle();

	//Secetion Drawing
	context.strokeRect(player.x - player.width/6, player.y - player.height/2, player.width/3, player.height)
	context.strokeRect(player.x - player.width/3, player.y - player.height/2, player.width/6, player.height)
	context.strokeRect(player.x - player.width/2, player.y - player.height/2, player.width/6, player.height)
	context.strokeRect(player.x + player.width/3, player.y - player.height/2, player.width/6, player.height)
	context.strokeRect(player.x + player.width/6, player.y - player.height/2, player.width/6, player.height)

	context.beginPath();
	context.arc(ball.x, ball.y, 40, 0, 360);
	context.stroke();

	context.save();
	context.beginPath();
	context.moveTo(player.x, player.y);
	context.lineTo(ball.x, ball.y);
	context.closePath();
	context.stroke();
	context.restore();
}