// JavaScript Document
function GameObject()
{
	//Object's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//Object's dimensions
	this.width = 100;
	this.height = 100;
	
	//Object's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//Object's force
	this.force = 0;

	//Object's color
	this.color = "#00ff55";
	
	//This draws a circle to the screen
	this.drawCircle = function()
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

	//This draws a rectangle to the screen
	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect(-this.width/2, -this.height/2, this.width, this.height);
			
		context.restore();
	}	

	//This changes the Object's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}

	
}
