//Declare my variables

var canvas;
var context;
var ball;

//Set Up the Canvas
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	
	
//Instantiate the Ball
ball = new Ball();
		
//Update the Screen
ball.draw();