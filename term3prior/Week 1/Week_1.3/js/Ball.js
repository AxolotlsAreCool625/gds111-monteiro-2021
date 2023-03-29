// JavaScript Document
function Ball()
{
	//Ball's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//Ball's dimensions
	this.width = 100;
	this.height = 100;
	
	//Ball's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//Ball's force
	this.force = 0;

	//Ball's color
	this.color = "#00ff55";
	
	//This draws the Ball to the screen
	this.draw = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);

			context.beginPath();
			context.arc(0, 0, this.width/2 , 0 , 360*Math.PI/180, true)
			context.closePath();
			context.fill();
			
		context.restore();
		
	}	
	
	//This changes the Ball's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}
