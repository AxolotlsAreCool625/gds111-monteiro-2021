//sets up the canvas and timer
var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);
var timer = window.requestAnimationFrame(main);

//set friction for the y axis
var fy = .85;
var fx = .85;

var amt = 7;

var roadX = 0;

//locations for the vet (...and maybe the powerup ;-) to go to
var locations = [];
for(var i=0; i<amt; i++)
{
    locations[i] = 64 + c.height * i/8 ;
    console.log(locations[i]*2);
}

//Creates instances of my GameObject class
var car1 = new GameObject();


var vet = [];
for(var i=0; i<amt; i++)
{
    vet[i] = new GameObject();
}

var bar = new GameObject();
//This is to draw the container fuel bar, as without it, drawing it as a part of the normal bar will shrink it alongside the bar normally.
var fuelBar = new GameObject();
var fuelText = new GameObject();
var finishLine = new GameObject();
var powerup = new GameObject();


//Stores the name of the function I want to execute.
var play = menu;

//Starts the game and sets up each object's starting values
function menu()
{
    ctx.save();
        ctx.textAlign = `center`;
        ctx.fillText(`Press Space to Start`, c.width*.5, c.height*.5)
    ctx.restore();

    roadX = 0;

    //Car's innitial values
    car1.h = 32;
    car1.w = 64;
    car1.color = `cyan`
    car1.x = 100;
    car1.img = document.querySelector(`#car`);
    
    //The maximum amount of fuel your car can have
    car1.max = 1500;
    car1.fuel = car1.max;
    car1.force = 2;
    car1.vx = 5;
    
    //Vet's innitial values
    for(var i=0; i<amt; i++)
    {
        vet[i].x = rand(c.width, c.width*2);
        vet[i].y = locations[i];
        vet[i].vx = Math.floor(rand(-10,-3));
        vet[i].w = 64;
        vet[i].h = 32;   
        vet[i].img = document.querySelector(`#car`);
    }
    
    //Powerups innitial value;
    powerup.x = c.width + powerup.w*.5;
    powerup.y = locations[Math.floor(rand(0,locations.length-.1))];
    powerup.vx = -10;//Math.floor(rand(-10,-3));
    powerup.w = 20;
    powerup.h = powerup.w;
    powerup.color = `orange`;
    //amount of fuel to add when collected.
    powerup.fuel = car1.max;
    powerup.img = document.querySelector(`#gas`);

    //Fuel Bar's innitial values
    bar.y = 25;

    //The maximum size of the fuel bar
    bar.max = 200;
    bar.w = bar.max;
    bar.h = 20;
    bar.color = `limegreen`;
    
    //Fuel bar container's values
    fuelBar.x = bar.x
    fuelBar.y = bar.y;
    fuelBar.w = 200;
    fuelBar.h = 20;
    fuelBar.color = `black`;
    fuelBar.img = document.querySelector(`#fuelBar`);

    fuelText.x = c.width - 105;
    fuelText.y = 24;
    fuelText.h = 34;
    fuelText.w = 200;
    fuelText.img = document.querySelector(`#fuelText`)
    //Finish line's innitial values
    finishLine.w = 20;
    finishLine.h = c.height;
    finishLine.x = 9000;
    finishLine.img = document.querySelector(`#finishLine`);

    //If the spacebar is pressed use the game function to run the program
    if(space == true)
    {
        play = game;
    }
}


//Is used when you lose
function lose()
{
    drawImg();
    ctx.save();
        ctx.textAlign = `center`;
        ctx.fillText(`You Lose!`, c.width*.5, c.height*.5)
    ctx.restore();

     //If the spacebar is pressed use the menu function to run the program
     //Makes sure that space is false as true when the menu starts
     //If you don't do this the program will skip the menu and go straight to the game.
    if(space == true)
    {
        play = menu;
        space = false;
    }
}

//Is used when you lose
function win()
{
    ctx.save();
        ctx.textAlign = `center`;
        ctx.fillText(`You Win!`, c.width*.5, c.height*.5)
    ctx.restore();

     //If the spacebar is pressed use the menu function to run the program
     //Makes sure that space is false as true when the menu starts
     //If you don't do this the program will skip the menu and go straight to the game.
    if(space == true)
    {
        play = menu;
        space = false;
    }
}


//This function is the actual playable part of the game.
function game()
{
    /*---------This section is the input------------------*/

    //accellerates the car upwards by decreasing its velocity on the y axis
    if(w == true)
    {
        car1.vy += -car1.force;
    }

    //accellerates the car downward by increasing its velocity on the y axis
    if(s == true)
    {
        car1.vy += car1.force;
    }
  
    /*--------------This section is the movement-----------*/

    /*
        1. Makes fuel work by subtracting the car's velocity from the fuel    
        2. Makes the bar display at the correct size. 
        3. The first number is how wide you want the bar to be.
        4. The second number is the total amount of fuel your car can have.
        IMPORTANT! Don't let your fuel go over car.max!
    */
    if(car1.fuel > 0)
    {
        car1.fuel += -car1.vx;
    }   
    bar.w = bar.max * car1.fuel/car1.max;

    //applies friction to the car
    car1.vy *= fy;

    //Moves the car (and the finish line)
    car1.y += car1.vy;
    finishLine.x += -car1.vx;
    powerup.move();
    
    /*---------------This section is Collision Detection-------------*/

    //If your fuel becomes lower than 1 switch to the lose function.
    if(car1.fuel <=0)
    {
        play = lose;
    }
    
    //if your car's x becomes lower than 100pixels from the top make it bounce
    if(car1.y < locations[0])
    {
        car1.y = locations[0];
        car1.vy = 0;//-car1.vy;
       
    }

     //if your car's x becomes higher than 100 pixels from the bottom make it bounce
    if(car1.y > locations[amt-1])
    {
        car1.y = locations[amt-1];
        car1.vy = 0;//-car1.vy;
    }

   
    //If the car hit's the finishLine play the WIN function
    if(car1.hit(finishLine))
    {
        play = win
    }
    

    if(powerup.x < 0 - powerup.w * .5)
    {
        powerup.x = c.width + powerup.w*.5;
        powerup.y = locations[Math.floor(rand(0,locations.length-.1))];
        
    }

    if(powerup.hit(car1))
    {
       car1.fuel+=powerup.fuel;
       if(car1.fuel > car1.max)
       {
        car1.fuel = car1.max;
       }
       powerup.x = c.width + powerup.w*.5;
       powerup.y = locations[Math.floor(rand(0,locations.length-.1))];
    }

    //This is all the vet stuff.
    for(let i=0; i<amt; i++)
    {
        //Moves the vet by adding it's vx to its x position
        vet[i].move();
        //If the vet goes off the left of the canvas randomize it's values
        if(vet[i].x < 0 - vet[i].w * .5)
        {
            vet[i].x = c.width + 200;
            vet[i].vx = Math.floor(rand(-10,-3));
        }
        //If the car hit's the vet switch to the LOSE function
        if(car1.hit(vet[i]))
        {
            play = lose
        }

        //draws the vet on the screen
        vet[i].drawImg();
    }

    roadX+=-5;
    c.style.backgroundPositionX = `${roadX}px`
    
    //Draw the objects on the screen
    finishLine.drawImg();
    //Two rects, one for the background so the guard railing doesnt mess with the fuel bar graphic
    fuelBar.drawRect();
    bar.drawRect();
    fuelBar.drawImg();
    //car1.drawCar();
    car1.drawImg();
    powerup.drawImg();
    //Draw the Fuel Amount on the screen
    fuelText.drawImg();
    ctx.save();
        ctx.font = `30px Arial black`;
        ctx.textAlign = `left`;
        ctx.fillText(`FUEL: ${car1.fuel}`,c.width - 200,35)
    ctx.restore();
}

//Makes the game work
function main()
{
    ctx.clearRect(0,0,c.width,c.height);

    play()

    timer = window.requestAnimationFrame(main);
}

//returns a random number between a low and high range
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}



           





