/*----------------------------------------INSTRUCTIONS-------------------------------------
In this assignment, you will skin the game
-----------------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------------------
--------------------------DECLARE ALL OF THE VARIABLES AND OBJECTS--------------------------
------------------------------------------------------------------------------------------*/
//The beginning of the file sets up the objects and variables and values used in the program.

//Store the canvas and context objects in variables
var c=document.querySelector(`canvas`);
var ctx=c.getContext(`2d`)

//Makes the animation loop start
var timer=window.requestAnimationFrame(main);

//Create the ship
var ship = new GameObject();
var flame = new GameObject();

//create the score
var score = 0;

/*--------------------------------------------
amount = the amount of asteroids
asteroids = an array of GameObjects
--------------------------------------------*/
//More asteroids means harder game
var amount=20;
var asteroids=[]

//create the asteroids
for(var i=0; i<amount; i++)
{
    //Add the object into the array
    asteroids[i]=new GameObject();
}

//timer for color change
var colorTimer;

//Set up game states
var currentState = 0;
var gameStates = [];

//The menu state sets all initial game settings 
gameStates[0] = function(){
    
    //set the ship's position
    ship.x = c.width/2;
    ship.y = c.height/2;

    //set the ship's size
    ship.w = 64;
    ship.h = 32;

    //set the ships velocities
    ship.vx = 4;
    ship.vy = 4;

    ship.color = `cyan`

    //set up the ships thruster flame
    flame.angle = 180;
    flame.w = ship.w/2;
    flame.h = ship.h/2;
    flame.x = ship.x - ship.w/2
    flame.y = ship.y
    flame.color = `red`
    
    for(var i=0; i<amount; i++)
    {
        //Change the asteroid's color
        asteroids[i].color=`red`;

        //Set the starting position of the asteroid
        asteroids[i].x=rand(c.width, c.width*2)
        asteroids[i].y=rand(0, c.height)

        //Set the velocities (speed) of the asteroid
        asteroids[i].vx=rand(3, 1)
        asteroids[i].vy=0

        //Set the size of the asteroid. 
        asteroids[i].w=asteroids[i].vx * 10
        asteroids[i].h=asteroids[i].w;
    }

    //set the innitial score
    score = 0;

    //Draw the graphics
    ctx.save();
    
    ctx.fillStyle=`black`;
    ctx.font =`32px Arial`;
    ctx.textAlign =`center`;

    ctx.fillText(`Press Space to Start`, c.width/2, c.height/2 - 64); 
    ctx.fillText(`Use WASD To Move`, c.width/2, c.height/2);
    ctx.fillText(`Avoid Asteroids and Don't Leave the Screen Left`, c.width/2, c.height/2 + 64);
    
    ctx.restore();

    //Check for input
    if(space == true)
    {
        currentState = 1;
    }
}

//The Game state is the playable part of the game
gameStates[1] = function(){
   
    //If you are not hitting a key move to the left 2px/frame
    if(w===false && a===false && s===false && d===false)
    {
        ship.x += -2;
    }
   
    //Move the ship if a key (w,a,s,d) is pressed
    if(w===true)
   {
    ship.y += -ship.vy;
   }
   if(s===true)
   {
    ship.y += ship.vy;
   }
   if(a===true)
   {
    ship.x += -ship.vx;
   }
   if(d===true)
   {
    ship.x += ship.vx;

    //draw the flame if d is pressed
    //position the flame behind the ship before drawing
    flame.x = ship.x - ship.w/2
    flame.y = ship.y
    flame.drawTriangle();
   }
    
    

   //if the ship goes off the left side of the screen you lose
   if(ship.x < 0 + ship.w/2)
   {
        //Go back to main after 3 seconds
        setTimeout(function(){currentState =0;}, 3000)

        //Jump to lose state
        currentState = 2
   }

   //Keep the ship from leaving the screen
   //Note:this will look different on the students od assignment.
   if(ship.x > c.width - ship.w/2)
   {
       //put the shipi back on the screen
       ship.x = c.width - ship.w/2

       //delete any running colorTimers, change color, setTimer for 1/4 second
       clearTimeout(colorTimer)
       ship.color = `orange`
       colorTimer = setTimeout(resetColor, 250)
   }
   if(ship.y < 0 + ship.h/2)
   {
       ship.y = 0 + ship.h/2

       //delete any running timers, change color, setTimer for 1/4 second
       clearTimeout(colorTimer)
       ship.color = `orange`
       colorTimer = setTimeout(resetColor, 250)
   }
   if(ship.y > c.height - ship.h/2)
   {
       ship.y = c.height - ship.h/2
       
        //delete any running timers, change color, setTimer for 1/4 second
       clearTimeout(colorTimer)
       ship.color = `orange`
       colorTimer = setTimeout(resetColor, 250)
   }


   //Move the asteroids and check for collision
    for(var i=0; i<asteroids.length; i++)
    {
        //move the asteroids
        asteroids[i].x -= asteroids[i].vx;

        //check if they are off the screen 
        if(asteroids[i].x < 0 - asteroids[i].w/2)
        {
            //reset the position of the asteroid
            asteroids[i].x=c.width + asteroids[i].w/2;
            asteroids[i].y=rand(0, c.height)

            //reset the velocities of the asteroid
            asteroids[i].vx=rand(3, 1)
            asteroids[i].vy=0

            //reset the size of the asteroid. 
            asteroids[i].w=asteroids[i].vx * 10
            asteroids[i].h=asteroids[i].w;
        }

        //Check for collision with the ship
        //The number on the right of the < is the size of the hit radius
        if(asteroids[i].distanceFrom(ship) < asteroids[i].w)
        {
            //Reset the asteroid's position to stop collision
            asteroids[i].x=rand(c.width, c.width*2)
            asteroids[i].y=rand(0, c.height)

            //Go back to main after 3 seconds
            setTimeout(function(){currentState =0;}, 3000)

            //Jump to lose
            clearTimeout(colorTimer)
            currentState = 2
        }
        //draw the asteroid on the canvas 
        asteroids[i].drawCircle();
    }

    //Increase the score
   score++;
    
   //Show the score based on 1pt/60 frames of animation
   ctx.save();
   ctx.fillStyle = `black`;
   ctx.alignText = `center`
   ctx.font ="16px Arial"
   ctx.fillText(`SCORE: ${Math.floor(score/60)}`, c.width/2, 25)
   ctx.restore()

   //draw the ship
   ship.drawTriangle();
}

//The lose state
gameStates[2] = function()
{
    //Notify player that they lost
    //Show the final score
    ctx.font =`32px Arial`;
    ctx.textAlign =`center`;
    ctx.fillText(`----------You Lose!----------`, c.width/2, c.height/2-32);
    ctx.fillText(`FINAL SCORE: ${Math.floor(score/60)}`, c.width/2, c.height/2+32);
}

/*-------------------------------------------------------------------------------------------------
--------------------------------------------THE GAMES ANIMATION LOOP-------------------------------
-------------------------------------------------------------------------------------------------*/

function main()
{
    //erase the screen
    ctx.clearRect(0,0,c.width,c.height)

    //Call the game state function
    gameStates[currentState]();
    
    //Calls the next frame of animation
    timer=window.requestAnimationFrame(main);
}

//--------------------------------------------------------------------------------------------------


//Random number generator function.
function rand(_low, _high)
{
    return Math.random()*(_high-_low)+_low;
}

function resetColor()
{
    ship.color = `cyan`
}


