/*----------------------------------------INSTRUCTIONS-------------------------------------
In this assignment, you will stop the ship from leaving the screen. 
NOTE: Control the ship with w,a,s and d on your keyboard.
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


//------------------------------------------------------------------------------------------------

//Create the ship
var ship = new GameObject();
ship.color = `cyan`

//set the ship's size
ship.w = 64;
ship.h = 32;

//set the ships velocities
ship.vx = 4;
ship.vy = 4;

/*-------------------------------------------------------------------------------------------------
--------------------------------------------THE GAMES ANIMATION LOOP-------------------------------
-------------------------------------------------------------------------------------------------*/

function main()
{
    //erase the screen
    ctx.clearRect(0,0,c.width,c.height)

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
   }

   //if the ship goes off the left side of the screen,
   //stop it from moving and put it back on the screen.
   if(ship.x < 0 + ship.w/2)
   {
       ship.x = 0 + ship.w/2
   }

   /*-----------ADD YOUR CODE HERE---------------*/

   if(ship.x > c.width - ship.w/2)
   {
       ship.x = c.width - ship.w/2
   }

   if(ship.y > c.height - ship.h/2)
   {
       ship.y = c.height - ship.h/2
   }

   if(ship.y < 0 + ship.h/2)
   {
       ship.y = 0 + ship.h/2
   }
  
   /*--------------------------------------------*/

   ship.drawTriangle();
    //Calls the next frame of animation
    timer=window.requestAnimationFrame(main);
}

//--------------------------------------------------------------------------------------------------


//Random number generator function.
function rand(_low, _high)
{
    return Math.random()*(_high-_low)+_low;
}
