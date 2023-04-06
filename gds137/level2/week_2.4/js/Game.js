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

	//player movement
	if(w && player1.y != player1.height/2)
	{
		player1.y += -2;
	}
	if(s && player1.y != (canvas.height - player1.height/2))
	{
		player1.y += 2;
	}

	player1.drawRect();
}
