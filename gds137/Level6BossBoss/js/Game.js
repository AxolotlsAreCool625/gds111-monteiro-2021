var canvas;
var context;
var interval = 1000/60;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");	

timer = setInterval(animate, interval);

var player = new GameObject();
player.height = 50;
player.width = 50;
player.x = canvas.width/2;
player.y = canvas.height - 25;
player.vx = 5;
player.color = "#ff0";

var playerScore = 0;

var hazard0 = new GameObject();
hazard0.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
hazard0.y = Math.floor(Math.random() * -300 - 40);
hazard0.width = 20;
hazard0.height = 20;
hazard0.vy = 5;
hazard0.color = "#aa00ff";

var hazard1 = new GameObject();
hazard1.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
hazard1.y = Math.floor(Math.random() * -300 - 40);
hazard1.width = 20;
hazard1.height = 20;
hazard1.vy = 5;
hazard1.color = "#aa00ff";

var hazard2 = new GameObject();
hazard2.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
hazard2.y = Math.floor(Math.random() * -300 - 40);
hazard2.width = 20;
hazard2.height = 20;
hazard2.vy = 5;
hazard2.color = "#aa00ff";

var hazard3 = new GameObject();
hazard3.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
hazard3.y = Math.floor(Math.random() * -300 - 40);
hazard3.width = 20;
hazard3.height = 20;
hazard3.vy = 5;
hazard3.color = "#aa00ff";

var hazard4 = new GameObject();
hazard4.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
hazard4.y = Math.floor(Math.random() * -300 - 40);
hazard4.width = 20;
hazard4.height = 20;
hazard4.vy = 5;
hazard4.color = "#aa00ff";

var item0 = new GameObject();
item0.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
item0.y = Math.floor(Math.random() * -300 - 40);
item0.width = 20;
item0.height = 20;
item0.vy = 5;
item0.color = "#0f5";

var item1 = new GameObject();
item1.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
item1.y = Math.floor(Math.random() * -300 - 40);
item1.width = 20;
item1.height = 20;
item1.vy = 5;
item1.color = "#00ff55";

var item2 = new GameObject();
item2.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
item2.y = Math.floor(Math.random() * -300 - 40);
item2.width = 20;
item2.height = 20;
item2.vy = 5;
item2.color = "#00ff55";

var item3 = new GameObject();
item3.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
item3.y = Math.floor(Math.random() * -300 - 40);
item3.width = 20;
item3.height = 20;
item3.vy = 5;
item3.color = "#00ff55";

var item4 = new GameObject();
item4.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
item4.y = Math.floor(Math.random() * -300 - 40);
item4.width = 20;
item4.height = 20;
item4.vy = 5;
item4.color = "#00ff55";


gravity = 1;

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	//player movement
	if(a) {
			player.x -= player.vx;
		}

	if(d) {
			player.x += player.vx;
		}

	if (player.x < (player.width/2)) {
		player.x = 0 + player.width/2;
	}

	if (player.x > (canvas.width - player.width/2)) {
		player.x = canvas.width - player.width/2;
	}

	if ((player.x < hazard0.x + 35)  && (player.x > hazard0.x - 35) && (player.y < hazard0.y + 35))
	{
		hazard0.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard0.y = Math.floor(Math.random() * -300 - 40);
		hazard0.vy = Math.floor(Math.random() * 5 + 3);

		playerScore = 0;	

		player.color = "#f00";
		setTimeout(playerReset, 500);
		resetAll();
	}

	if ((player.x < hazard1.x + 35)  && (player.x > hazard1.x - 35) && (player.y < hazard1.y + 35))
	{
		hazard1.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard1.y = Math.floor(Math.random() * -300 - 40);
		hazard1.vy = Math.floor(Math.random() * 5 + 3);

		playerScore = 0;	

		player.color = "#f00";
		setTimeout(playerReset, 500);
		resetAll();
	}

	if ((player.x < hazard2.x + 35)  && (player.x > hazard2.x - 35) && (player.y < hazard2.y + 35))
	{
		hazard2.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard2.y = Math.floor(Math.random() * -300 - 40);
		hazard2.vy = Math.floor(Math.random() * 5 + 3);

		playerScore = 0;	

		player.color = "#f00";
		setTimeout(playerReset, 500);
		resetAll();
	}

	if ((player.x < hazard3.x + 35)  && (player.x > hazard3.x - 35) && (player.y < hazard3.y + 35))
	{
		hazard3.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard3.y = Math.floor(Math.random() * -300 - 40);
		hazard3.vy = Math.floor(Math.random() * 5 + 3);

		playerScore = 0;	

		player.color = "#f00";
		setTimeout(playerReset, 500);
		resetAll();
	}

	if ((player.x < hazard4.x + 35)  && (player.x > hazard4.x - 35) && (player.y < hazard4.y + 35))
	{
		hazard4.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard4.y = Math.floor(Math.random() * -300 - 40);
		hazard4.vy = Math.floor(Math.random() * 5 + 3);

		playerScore = 0;	

		player.color = "#f00";
		setTimeout(playerReset, 500);
		resetAll();
	}


	if ((player.x < item0.x + 35)  && (player.x > item0.x - 35) && (player.y < item0.y + 35))
	{
		item0.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item0.y = Math.floor(Math.random() * -300 - 40);
		item0.vy = Math.floor(Math.random() * 5 + 3);

		playerScore++;	

		player.color = "#5f5";
		setTimeout(playerReset, 500)
	}

	if ((player.x < item1.x + 35)  && (player.x > item1.x - 35) && (player.y < item1.y + 35))
	{
		item1.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item1.y = Math.floor(Math.random() * -300 - 40);
		item1.vy = Math.floor(Math.random() * 5 + 3);

		playerScore++;

		player.color = "#5f5";
		setTimeout(playerReset, 500)
	}

	if ((player.x < item2.x + 35)  && (player.x > item2.x - 35) && (player.y < item2.y + 35))
	{
		item2.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item2.y = Math.floor(Math.random() * -300 - 40);
		item2.vy = Math.floor(Math.random() * 5 + 3);

		playerScore++;

		player.color = "#5f5";
		setTimeout(playerReset, 500)
	}
	
	if ((player.x < item3.x + 35)  && (player.x > item3.x - 35) && (player.y < item3.y + 35))
	{
		item3.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item3.y = Math.floor(Math.random() * -300 - 40);
		item3.vy = Math.floor(Math.random() * 5 + 3);

		playerScore++;

		player.color = "#5f5";
		setTimeout(playerReset, 500)
	}
	
	if ((player.x < item4.x + 35)  && (player.x > item4.x - 35) && (player.y < item4.y + 35))
	{
		item4.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item4.y = Math.floor(Math.random() * -300 - 40);
		item4.vy = Math.floor(Math.random() * 5 + 3);

		playerScore++;

		player.color = "#5f5";
		setTimeout(playerReset, 500)
	}

	playerReset = function()
 	{
		player.color = "#ff0";
	}

	resetAll = function()
	{
		item0.y = Math.floor(Math.random() * -300 - 40);
		item0.vy = Math.floor(Math.random() * 5 + 3);
		item0.x = Math.floor(Math.random() * (canvas.width - 20) + 20);

		item1.y = Math.floor(Math.random() * -300 - 40);
		item1.vy = Math.floor(Math.random() * 5 + 3);
		item1.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		
		item2.y = Math.floor(Math.random() * -300 - 40);
		item2.vy = Math.floor(Math.random() * 5 + 3);
		item2.x = Math.floor(Math.random() * (canvas.width - 20) + 20);

		item3.y = Math.floor(Math.random() * -300 - 40);
		item3.vy = Math.floor(Math.random() * 5 + 3);
		item3.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		
		item4.y = Math.floor(Math.random() * -300 - 40);
		item4.vy = Math.floor(Math.random() * 5 + 3);
		item4.x = Math.floor(Math.random() * (canvas.width - 20) + 20);

		hazard0.y = Math.floor(Math.random() * -300 - 40);
		hazard0.vy = Math.floor(Math.random() * 5 + 3);
		hazard0.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		
		hazard1.y = Math.floor(Math.random() * -300 - 40);
		hazard1.vy = Math.floor(Math.random() * 5 + 3);
		hazard1.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		
		hazard2.y = Math.floor(Math.random() * -300 - 40);
		hazard2.vy = Math.floor(Math.random() * 5 + 3);
		hazard2.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		
		hazard3.y = Math.floor(Math.random() * -300 - 40);
		hazard3.vy = Math.floor(Math.random() * 5 + 3);
		hazard3.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		
		hazard4.y = Math.floor(Math.random() * -300 - 40);
		hazard4.vy = Math.floor(Math.random() * 5 + 3);
		hazard4.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
	}

	item0.y += item0.vy;
	item1.y += item1.vy;
	item2.y += item2.vy;
	item3.y += item3.vy;
	item4.y += item4.vy;

	hazard0.y += hazard0.vy;
	hazard1.y += hazard1.vy;
	hazard2.y += hazard2.vy;
	hazard3.y += hazard3.vy;
	hazard4.y += hazard4.vy;



	if(hazard0.y > canvas.height + hazard0.height)
	{
		hazard0.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard0.y = Math.floor(Math.random() * -300 - 40);
	}

	if(hazard1.y > canvas.height + hazard1.height)
	{
		hazard1.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard1.y = Math.floor(Math.random() * -300 - 40);
	}

	if(hazard2.y > canvas.height + hazard2.height)
	{
		hazard2.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard2.y = Math.floor(Math.random() * -300 - 40);
	}

	if(hazard3.y > canvas.height + hazard3.height)
	{
		hazard3.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard3.y = Math.floor(Math.random() * -300 - 40);
	}

	if(hazard4.y > canvas.height + hazard4.height)
	{
		hazard4.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		hazard4.y = Math.floor(Math.random() * -300 - 40);
	}


	if(item0.y > canvas.height + item0.height)
	{
		item0.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item0.y = Math.floor(Math.random() * -300 - 40);
		item0.vy = Math.floor(Math.random() * 5 + 3);
	}

	if(item1.y > canvas.height + item1.height)
	{
		item1.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item1.y = Math.floor(Math.random() * -300 - 40);
		item1.vy = Math.floor(Math.random() * 5 + 3);
	}

	if(item2.y > canvas.height + item2.height)
	{
		item2.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item2.y = Math.floor(Math.random() * -300 - 40);
		item2.vy = Math.floor(Math.random() * 5 + 3);
	}

	if(item3.y > canvas.height + item3.height)
	{
		item3.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item3.y = Math.floor(Math.random() * -300 - 40);
		item3.vy = Math.floor(Math.random() * 5 + 3);
	}

	if(item4.y > canvas.height + item4.height)
	{
		item4.x = Math.floor(Math.random() * (canvas.width - 20) + 20);
		item4.y = Math.floor(Math.random() * -200 - 40);
		item4.vy = Math.floor(Math.random() * 5 + 3);
	}

	//draw objects
	player.drawRect();
	hazard0.drawCircle();
	hazard1.drawCircle();
	hazard2.drawCircle();
	hazard3.drawCircle();
	hazard4.drawCircle();
	item0.drawRect();
	item1.drawRect();
	item2.drawRect();
	item3.drawRect();
	item4.drawRect();

	//draw score
	context.font = "30px Arial Bold";
	context.color = '#555';
	context.fillText("Score: ", 80, 75);
	context.fillText(playerScore, 160, 75);
}