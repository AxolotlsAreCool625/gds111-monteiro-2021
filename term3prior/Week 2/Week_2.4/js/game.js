var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;

var ball;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

timer = setInterval(animate, interval);

var player1 = new GameObject();
player1.x = 0;
player1.y = canvas.height/2;

ball = new GameObject();
ball.vx = 2;
ball.vy = 2;
ball.width = 60;
ball.height = 60;


function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

	if(w)
	{
		
		console.log("Moving Up");
		if (player1.y > 0 + player1.height/2)
		{
			player1.y += -4;
		}
		else 
		{
			player1.y = 0 + player1.height/2
		}
	}
	if(s)
	{
		console.log("Moving Down");
		if (player1.y < canvas.height - player1.height/2)
		{
			player1.y += 4;
		}
		else 
		{
			player1.y = canvas.height - player1.height/2
		}
	}

    player1.drawRect();


	//ball related

	ball.x += ball.vx;
	ball.y += ball.vy;
	
	//Update the Screen
	ball.drawCircle();

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx / 2

		ball.color = "#5500ff";
	}

	if(ball.x < 0 + ball.width/2)
	{
		ball.x = 0 + ball.width/2
		ball.vx = -ball.vx * 2

		ball.color = "#00ff55";
	}

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy / 2

		ball.color = "#5500ff";
	}

	if(ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2
		ball.vy = -ball.vy * 2

		ball.color = "#00ff55";
	}
}
