var canvas;
var context;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

timer = setInterval(animate, interval);

var player1 = new GameObject();
player1.height = 220;
player1.width = 40;
player1.x = canvas.width/16
player1.y = canvas.height/2;

player1.drawRect();

var ball = new GameObject();
ball.vx = 4;
ball.vy = 4;

ball.drawCircle();

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	//ball movement

	ball.x += ball.vx;
	ball.y += ball.vy;

	if(ball.x > canvas.width - ball.width/2 || ball.x < 0 + ball.width/2)
	{
		ball.vx = -ball.vx;
		ball.color = "#00ff55"
	}

	if(ball.y < 0 + ball.height/2 || ball.y > canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;
		ball.color = "#ff0000"
	}

	ball.drawCircle();
	context.strokeRect(ball.x- ball.width/2, ball.y - ball.height/2, ball.width, ball.height)

	//player movement
	if(w) {
		if (player1.y > (player1.height/2)) {
			player1.y += -2;
		}
		else {
			player1.y = (player1.height/2)
		}
	}


	if(s) {
		if (player1.y < (canvas.height - player1.height/2)) {
			player1.y += 2;
		}
		else {
			player1.y = (canvas.height - player1.height/2)
		}
	}


	player1.drawRect();

	if(ball.left() < player1.right() && ball.right() > player1.left() && ball.top() < player1.bottom() && ball.bottom() > player1.top() )
	{
		collision = "true";
	}
	else
	{
		collision = "false";
	}

	if (collision == "true")
	{
			console.log("Collision");
			ball.x = 0 + ball.width + player1.width
			ball.vx = -ball.vx
			ball.color = "#000000";
	}
}