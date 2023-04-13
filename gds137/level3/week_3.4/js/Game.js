var canvas;
var context;
var interval = 1000/60;

var ballImg = document.getElementById("ric");

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

timer = setInterval(animate, interval);

var player1 = new GameObject();
player1.height = 220;
player1.width = 20;
player1.x = canvas.width/16
player1.y = canvas.height/2;
var player1Score = 0;

player1.drawRect();

var player2 = new GameObject();
player2.height = 220;
player2.width = 20;
player2.x = canvas.width* (15/16)
player2.y = canvas.height/2;
player2.color = '#00f';
var player2Score = 0;

player2.drawRect();

var ball = new GameObject();
ball.width = 40;
ball.height = 40;
ball.vx = 6;

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	context.save();
	context.strokeStyle = "#777";
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, canvas.height);
	context.closePath();
	context.lineWidth = 4; 
	context.stroke();
	context.restore();

	//ball movement

	ball.x += ball.vx;
	ball.y += ball.vy;

	if(ball.x < 0 || ball.x > canvas.width - ball.width/2)
	{
		if (ball.x < 0)
		{
			player2Score += 1;
		}
		else
		{
			player1Score += 1;
		}
		ball.x = canvas.width/2;
		ball.color = "#ff0000";
	}

	if(ball.y < 0 + ball.height/2 || ball.y > canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;
	}

	context.drawImage(ballImg, ball.x - ball.width/1.67, ball.y - ball.height/1.67, ball.width * 1.2, ball.height * 1.2);

	//player movement
	if(w) {
		if (player1.y > (player1.height/2)) {
			player1.y += -4;
		}
		else {
			player1.y = (player1.height/2)
		}
	}


	if(s) {
		if (player1.y < (canvas.height - player1.height/2)) {
			player1.y += 4;
		}
		else {
			player1.y = (canvas.height - player1.height/2)
		}
	}

	//player 2 movement
	if(up) {
		if (player2.y > (player2.height/2)) {
			player2.y += -4;
		}
		else {
			player2.y = (player2.height/2)
		}
	}


	if(down) {
		if (player2.y < (canvas.height - player2.height/2)) {
			player2.y += 4;
		}
		else {
			player2.y = (canvas.height - player2.height/2)
		}
	}


	player1.drawRect();
	player2.drawRect();
	
	context.font = "40px Verdana";
	context.fillText("Player 1  |  Player 2", canvas.width/3.28, 60);
	context.fillText(player1Score, canvas.width * (1.5/4), 120);
	context.fillText(player2Score, canvas.width * (2.4/4), 120);


	if(ball.left() < player1.right() && ball.right() > player1.left() && ball.top() < player1.bottom() && ball.bottom() > player1.top() )
	{
		collision = "true";
	}
	else
	{
		collision = "false";
	}

	if(ball.left() < player2.right() && ball.right() > player2.left() && ball.top() < player2.bottom() && ball.bottom() > player2.top() )
	{
		collision2 = "true";
	}
	else
	{
		collision2 = "false";
	}

	//Secetion Drawing
	context.strokeRect(player1.x- player1.width/2, player1.y - player1.height/2, player1.width, player1.height/3)
	context.strokeRect(player1.x- player1.width/2, player1.y - player1.height/6, player1.width, player1.height/3)
	context.strokeRect(player1.x- player1.width/2, player1.y + player1.height/6, player1.width, player1.height/3)

	context.strokeRect(player2.x- player2.width/2, player2.y - player2.height/2, player2.width, player2.height/3)
	context.strokeRect(player2.x- player2.width/2, player2.y - player2.height/6, player2.width, player2.height/3)
	context.strokeRect(player2.x- player2.width/2, player2.y + player2.height/6, player2.width, player2.height/3)


	if (collision == "true")
	{
		if (ball.y < player1.y - player1.height/6) 
		{
			ball.x += player1.width
			ball.vx = -ball.vx
			ball.vy = -6
			console.log("Collision Top");
		}
		else if (ball.y > player1.y + player1.height/6)
		{
			ball.x += player1.width
			ball.vx = -ball.vx
			ball.vy = 6
			console.log("Collision Bottom");
		}
		else
		{
			ball.x += player1.width
			ball.vx = -ball.vx
			console.log("Collision Middle");
		}
			ball.color = "#00ff55";
	}

	if (collision2 == "true")
	{
		if (ball.y < player2.y - player2.height/6) 
		{
			ball.x -= player2.width
			ball.vx = -ball.vx
			ball.vy = -6
			console.log("Collision 2 Top");
		}
		else if (ball.y > player2.y + player2.height/6)
		{
			ball.x -= player2.width
			ball.vx = -ball.vx
			ball.vy = 6
			console.log("Collision 2 Bottom");
		}
		else
		{
			ball.x -= player2.width
			ball.vx = -ball.vx
			console.log("Collision 2 Middle");
		}
			ball.color = "#00ff55";
	}

}