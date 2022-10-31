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
player1.x = 0;
player1.y = canvas.height/2;
player1.color = 'red';

var player2 = new GameObject();
player2.x = canvas.width;
player2.y = canvas.height/2;
player2.color = 'green';

var ball = new GameObject();
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.vx = -8;
ball.vy = 8;
ball.width = 30;

//ball bouncing code
function ballBounce()
{
	if(ball.x > canvas.width - ball.width/2)
	{
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		ball.color = "#000000";
		score1 += 1;
	}

	if(ball.x < 0 - ball.width)
	{
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		ball.color = "#000000";
		score2 += 1;
	}

	if(ball.y > canvas.height - ball.height/2)
	{
		ball.y = canvas.height - ball.height/2
		ball.vy = -ball.vy
		ball.color = "#0000ff";
	}

	if(ball.y < 0 + ball.height/2)
	{
		ball.y = 0 + ball.height/2
		ball.vy = -ball.vy
		ball.color = "#0000ff";
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


	var message = `Player 1 | Player 2`;

	ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `25px Arial`;
            ctx.fillText(message, c.width/2, 25);
    ctx.restore();

	ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `20px Arial`;
            ctx.fillText(score1, c.width/2 - 10, 52);
    ctx.restore();

	var message = `-`;

	ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `20px Arial`;
            ctx.fillText(message, c.width/2, 50);
    ctx.restore();

	ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `20px Arial`;
            ctx.fillText(score2, c.width/2 + 10, 52);
    ctx.restore();

	var message = `Player 1 | Player 2`;

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

	if(upKey)
	{
		
		console.log("Moving Up");
		if (player2.y > 0 + player2.height/2)
		{
			player2.y += -4;
		}
		else 
		{
			player2.y = 0 + player2.height/2
		}
	}
	if(downKey)
	{
		console.log("Moving Down");
		if (player2.y < canvas.height - player2.height/2)
		{
			player2.y += 4;
		}
		else 
		{
			player2.y = canvas.height - player2.height/2
		}
	}

	player2.drawRect();


	//ball related
	ball.x += ball.vx;
	ball.y += ball.vy;
	
	//Update the Screen
	ball.drawCircle();

	ballBounce();

	if(ball.left() < player1.right() && ball.right() > player1.left() && ball.top() < player1.bottom() && ball.bottom() > player1.top() )
	{
		collision1 = "true";
	}
	else
	{
		collision1 = "false";
	}

	if(ball.left() < player2.right() && ball.right() > player2.left() && ball.top() < player2.bottom() && ball.bottom() > player2.top())
	{
		collision2 = "true";
	}
	else
	{
		collision2 = "false";
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
			ball.color = "#00ff55";
	}

	if (collision2 == "true")
	{

		if (ball.y < player2.y - player2.height/6) 
		{
			ball.x = canvas.width - ball.width/2 - player2.width/2
			ball.vx = -ball.vx
			ball.vy = -8
			console.log("Collision Top");
		}
		else if (ball.y < player2.y + player2.height/6)
		{
			ball.x = canvas.width - ball.width/2 - player2.width/2
			ball.vx = -ball.vx
			ball.vy = 8
			console.log("Collision Middle");
		}
		else
		{
			ball.x = canvas.width - ball.width/2 - player2.width/2
			ball.vx = -ball.vx
			ball.vy = -8
			console.log("Collision Bottom");
		}
			ball.color = "#00ff55";
	}

	

}
