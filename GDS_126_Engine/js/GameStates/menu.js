/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src= "images/skull.png"
startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)




var menuBackground = new GameObject();
menuBackground.img.src = "images/nightsky.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			sounds.play(`music`, 0, true);
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.img.src= "images/skull.png"
		var buttonPattern = context.createPattern(startButton.img, `repeat`);
		startButton.color = buttonPattern
	}
	else
	{
		//Default Button Graphic
		startButton.img.src= "images/skull_01.png"
		var buttonPattern = context.createPattern(startButton.img, `repeat`);
		startButton.color = buttonPattern
	}
	
	menuBackground.drawStaticImage();
	startButton.render()
}
	
	
