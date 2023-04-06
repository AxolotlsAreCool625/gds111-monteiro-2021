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

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player1.y != 110)
	{
		player1.y += -2;
	}
	if(s && player1.y != 690)
	{
		player1.y += 2;
	}

	player1.drawRect();
}
