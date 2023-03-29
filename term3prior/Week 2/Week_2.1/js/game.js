var canvas;
var context;
var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

timer = setInterval(animate, interval);

var player1 = new GameObject();
player1.x = canvas.width/16;
player1.y = canvas.height/2;

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);

    player1.drawRect();
}
