var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var collision1;
var collision2;
var score1 = 0;
var score2 = 0;
var message;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

timer = setInterval(animate, interval);

var player1 = new GameObject();
player1.y = canvas.height - player1.height*2;
player1.x = canvas.width/2;
player1.color = 'red';

var ball = new GameObject();
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.vx = -8;
ball.vy = 8;
ball.width = 30;
ball.height = 30;

var img = document.getElementById("Ric");


//ball bouncing code
function ballBounce()
{
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width -ball.width/2;
		ball.vx = -ball.vx
		//ball.color = "#000000";
		score1 += 1;
	}

	if(ball.x < 0 - ball.width)
	{
		ball.x = 0 + ball.width/2;
		ball.vx = -ball.vx
		//ball.color = "#000000";
		score2 += 1;
	}

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy
		//ball.color = "#0000ff";
	}

	if(ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2
		ball.vy = -ball.vy
		//ball.color = "#0000ff";
	}
}

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

	context.save();
		context.strokeStyle = 'orange';
		context.beginPath();
		context.moveTo(canvas.width/2, 0);
		context.lineTo(canvas.width/2, canvas.height);
		context.closePath();
		context.lineWidth = 5; 
		context.stroke();
	context.restore();

	if(a)
	{
		
		console.log("Moving Left");
		if (player1.x > 0 + player1.width/2)
		{
			player1.x += -4;
		}
		else 
		{
			player1.x = 0 + player1.width/2
		}
	}
	if(d)
	{
		console.log("Moving Right");
		if (player1.x < canvas.width - player1.width/2)
		{
			player1.x += 4;
		}
		else 
		{
			player1.x = canvas.width - player1.width/2
		}
	}

    player1.drawRect();


	//ball related
	ball.x += ball.vx;
	ball.y += ball.vy;
	
	//Update the Screen
	//ball.drawCircle();

	ballBounce();

	if(ball.left() < player1.right() && ball.right() > player1.left() && ball.top() < player1.bottom() && ball.bottom() > player1.top() )
	{
		collision1 = "true";
	}
	else
	{
		collision1 = "false";
	}

	if (collision1 == "true")
	{

		if (ball.y < player1.y - player1.height/6) 
		{
			ball.x = 0 + ball.width/2 + player1.width/2
			ball.vx = -ball.vx
			ball.vy = -8
			console.log("Collision Top");
		}
		else if (ball.y < player1.y + player1.height/6)
		{
			ball.x = 0 + ball.width/2 + player1.width/2
			ball.vx = -ball.vx
			ball.vy = 8
			console.log("Collision Middle");
		}
		else
		{
			ball.vy = -8
			ball.x = 0 + ball.width/2 + player1.width/2
			ball.vx = -ball.vx
			console.log("Collision Bottom");
		}
			//ball.color = "#00ff55";
	}

	context.drawImage(img, ball.x - ball.width/1.33, ball.y - ball.height/1.33, ball.width*1.5, ball.height*1.5);

	

}
