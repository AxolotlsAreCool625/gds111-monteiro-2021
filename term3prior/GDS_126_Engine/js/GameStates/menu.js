/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src= "images/button.png"
startButton.width=800;
startButton.height=200;
//startButton.hitBoxWidth=0;
console.log(startButton.collisionPoints.right)




var menuBackground = new GameObject();
menuBackground.img.src = "images/sky.png"
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
		startButton.img.src= "images/hoverbutton.png"
		var buttonPattern = context.createPattern(startButton.img, `repeat`);
		startButton.color = buttonPattern
	}
	else
	{
		//Default Button Graphic
		startButton.img.src= "images/button.png"
		var buttonPattern = context.createPattern(startButton.img, `repeat`);
		startButton.color = buttonPattern
	}

	menuBackground.drawStaticImage();
	startButton.render()
}
	
	
