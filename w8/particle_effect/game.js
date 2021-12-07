/*----------------------------------------INSTRUCTIONS-------------------------------------
In this assignment, you will make the asteroids move from right to left <--.
The asteroids will start off the screen on the right and reset themselves back to the right when they leave 
left hand side of the screen.
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


/*--------------------------------------------
amount = the amount of asteroids
asteroids = an array of GameObjects
--------------------------------------------*/
var amount=20;
var asteroids=[]

//This is a for loop. It makes something happen a fixed number of times in a row. 
//This for loop loops 20 times because amount is equal to 20.
//It adds 20 game objects into the asteroid array

for(var i=0; i<amount; i++)
{
    //Add the object into the array
    asteroids[i]=new GameObject();

    //Change the object's color
    asteroids[i].color=`blue`;

    //Set the starting position of the object
    asteroids[i].x=rand(c.width+100, 2*c.width)
    asteroids[i].y=rand(0, c.height)

    //Set the velocities of the object
    asteroids[i].vx=rand(-6, -2)
    asteroids[i].vy=0

    //Set the size of the object. Notice that the width is based on the speed of the asteroid and that the h is equal to the width.
    asteroids[i].w=asteroids[i].vx * -10
    asteroids[i].h=asteroids[i].w;
}

//------------------------------------------------------------------------------------------------



/*-------------------------------------------------------------------------------------------------
--------------------------------------------THE GAMES ANIMATION LOOP-------------------------------
-------------------------------------------------------------------------------------------------*/

function main()
{
    //erase the screen
    ctx.clearRect(0,0,c.width,c.height)

    /*
    We can use a for loop to move each object in the asteroid array
    If we didn't use a loop we would have to write the code in the for loop's {} 20 times in a row! 
    Loops make redundant tasks easy to code */
    for(var i=0; i<asteroids.length; i++)
    {

        //move the asteroids
        asteroids[i].move();

        //check if they are off the screen then reset their position
        if(asteroids[i].x < 0 - asteroids[i].w/2)
        {
            asteroids[i].x=rand(c.width+100, 2*c.width)
            asteroids[i].y=rand(0, c.height)
            
            if(asteroids[i].vx < -5 )
            {
                asteroids[i].color = 'lime';
            }
            else if (asteroids[i].vx < -3.5 )
            {
                asteroids[i].color = 'green';
            }
            else
            {
                asteroids[i].color = 'black';
            }
        }

        //draw the asteroid on the canvas
        asteroids[i].drawCircle();
    }

    //Calls the next frame of animation
    timer=window.requestAnimationFrame(main);
}

//--------------------------------------------------------------------------------------------------


//Random number generator function.
function rand(_low, _high)
{
    return Math.random()*(_high-_low)+_low;
}
