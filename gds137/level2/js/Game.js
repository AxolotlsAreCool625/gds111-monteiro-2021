var canvas;
var context;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

var player1 = new GameObject();
player1.height = 220;
player1.width = 40;
player1.x = canvas.width/16
player1.y = canvas.height/2;

player1.drawRect();

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);	
}
