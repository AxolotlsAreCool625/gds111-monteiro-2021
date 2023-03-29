//Declare my variables

var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Ball
	ball = new Ball();
	ball.vx = 2;
	
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the ball
	ball.x += ball.vx;
	
	//Update the Screen
	ball.draw();

	if(ball.x > canvas.width + ball.width/2)
	{
		ball.x = 0 - ball.width/2
	}
}
