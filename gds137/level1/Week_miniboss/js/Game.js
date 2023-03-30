//Declare my variables

var canvas;
var ctx;
var c;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;
var counter = 0;
var message;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	c = document.querySelector(`canvas`);
	ctx = c.getContext(`2d`);

	//Instantiate the Ball
	ball = new Ball();
	ball.vx = 4;
	ball.vy = 4;

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	message = `Collisions ${counter}`;
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the ball
	ball.x += ball.vx;
	ball.y += ball.vy;
	
	//Update the Screen
	ball.draw();

	ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `32px Arial`;
            ctx.fillText(message, c.width/2, 100);
    ctx.restore();

	if(ball.x > canvas.width - ball.width/2 || ball.x < 0 + ball.width/2)
	{
		ball.vx = -ball.vx;
		counter += 1;
		ball.color = "#00ff55"
	}

	if(ball.y < 0 + ball.height/2 || ball.y > canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;
		counter += 1;
		ball.color = "#ff0000"
	}

	
}
