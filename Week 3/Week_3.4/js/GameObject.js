// JavaScript Document
function GameObject()
{
	//Object's location
	this.x = 0;
	this.y = 0;

	//Object's dimensions
	this.width = 20;
	this.height = 160;
	
	//Object's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//Object's force
	this.force = 0;

	//Object's color
	this.color = "#00ff55";
	
	//This draws the Object to the screen
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

	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect(-this.width/2, -this.height/2, this.width, this.height);
			
		context.restore();
		
	}	

	//this outputs the left, right, top, and bottom sides of an object
	this.left = function()
	{
		return this.x - this.width/2;
	}

	this.right = function()
	{
		return this.x + this.width/2;
	}

	this.top = function()
	{
		return this.y - this.height/2;
	}

	this.bottom = function()
	{
		return this.y + this.height/2;
	}

	//This changes the Object's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}
