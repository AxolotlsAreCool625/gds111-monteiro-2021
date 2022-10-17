var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var collision;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

timer = setInterval(animate, interval);

var player1 = new GameObject();
player1.x = 0;
player1.y = canvas.height/2;

var ball = new GameObject();
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.vx = 4;
ball.vy = 4;
ball.width = 30;


//ball bouncing code, it took a ching of space in the animate function so I compliled it into its own function
function ballBounce()
{
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width - ball.width/2
		ball.vx = -ball.vx
		ball.color = "#5500ff";
	}

	if(ball.x < 0 - ball.width)
	{
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		ball.color = "#000000";
	}

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy
		ball.color = "#5500ff";
	}

	if(ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2
		ball.vy = -ball.vy
		ball.color = "#00ff55";
	}
}

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

	ballBounce();

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
			ball.x = 0 + ball.width/2 + player1.width/2
			ball.vx = -ball.vx
			ball.color = "#00ff55";
	}

	

}
