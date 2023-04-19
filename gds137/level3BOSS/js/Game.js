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
var playerScore = 10;

var ball = new GameObject();
ball.width = 80;
ball.height = 80;
ball.vx = 5;
ball.vy = 0;

gravity = 1;

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	//player movement
	if(a) {
		if (player.x > (player.width/2)) {
			player.vx += player.ax * player.force;
			player.x -= player.vx;
		}
		else {
			player.x = (player.width/2)
		}
	}
	
	if(d) {
		if (player.x < (canvas.width - player.width/2)) {
			player.vx += player.ax * player.force;
			player.x += player.vx
		}
		else {
			player.x = (canvas.width - player.width/2)
		}
	}
	

	//ball movement

	ball.vy += gravity
	ball.x += ball.vx;
	ball.y += ball.vy;

	if(ball.x < 0 + ball.width/2 || ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx;
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

		if (ball.x < player.x - player.width/6) 
		{
			ball.y -= player.height
			ball.vy = -35;
			ball.vx = -ball.force;
			console.log("Collision Left");
		}
		else if (ball.x > player.x + player.width/6)
		{
			ball.y -= player.height;
			ball.vy = -35;
			ball.vx = ball.force;
			console.log("Collision Right");
		}
		else
		{
			ball.y -= player.height;
			ball.vy = -35;
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
	context.strokeRect(player.x- player.width/2, player.y - player.height/2, player.width/3, player.height)
	context.strokeRect(player.x- player.width/6, player.y - player.height/2, player.width/3, player.height)
	context.strokeRect(player.x+ player.width/6, player.y - player.height/2, player.width/3, player.height)

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