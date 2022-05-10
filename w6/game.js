var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

var timer = window.requestAnimationFrame(main);

var fy = .85;
var fx = .85;

var locations = [];
locations [0] = c.height * .5 - 200;
locations [1] = c.height * .5;
locations [2] = c.height * .5 + 200;

var amt = 8;
var truck = [];
for(var i=0; i<amt; i++)
    {
        truck[i] = new GameObject();
    }
    
var car1 = new GameObject();
    car1.x = 0 + 100;
    car1.y = c.height * .5;
    car1.h  = 50;
    car1.w  = 100;
    car1.color = `LightSalmon`;
    car1.vx = 0;
    car1.vy = 0;
    car1.force = 2;
    car1.fuel = car1.max;

for(var i=0; i<amt; i++)
{
    truck.x = c.width + 200;
    truck.y = locations[1];
    truck.vx = -5;
}

var finishLine = new GameObject();
    finishLine.w = 20;
    finishLine.h = c.height;
    finishLine.x = 9000;

var bar1 = new GameObject();
    bar1.y = 100;
    bar1.w = 400;
    bar1.h = 20;
    bar1.color = `limegreen`;

var gas = new GameObject();
    gas.color = `red`;
    gas.x = c.width - 200;
    gas.y = locations[Math.floor(Math.random()*2.9)];
    gas.vx = -5;
    gas.h = 30;
    gas.w = 30;


var play = menu;

function menu()
{
    reset();
    ctx.save();
    ctx.textAlign = `center`;
    ctx.fillText(`Press Space to Start`, c.width * .5, c.height * .5)
    ctx.restore();

    if(space == true)
    {
        play = game;
    }
}
function lose()
{
    ctx.save();
    ctx.textAlign = `center`;
    ctx.fillText(`You Lose`, c.width * .5, c.height * .5)
    ctx.restore();

    if(space == true)
    {
        play = menu;
        space = false;
    }
}
function win()
{
    ctx.save();
    ctx.textAlign = `center`;
    ctx.fillText(`You Win!`, c.width * .5, c.height * .5)
    ctx.restore();

    if(space == true)
    {
        play = menu;
        space = false;
    }
}

function game()
{
    //key presses and speed
    if (w == true)
    {
        car1.vy += -car1.force;
    }

    if (s == true)
    {
        car1.vy += car1.force;
    }

    if (a == true)
    {
        car1.vx += -car1.force;
    }

    if (d == true)
    {
        car1.vx += car1.force;
    }

//fuel should decrease
if(car1.fuel >= 0)
    {
        car1.fuel = car1.fuel - ((Math.abs(car1.vx) + Math.abs(car1.vy) + 5)/1.5);
    }
bar1.w = 400 * car1.fuel/car1.max;
    
//move gas 
    gas.x += gas.vx;

    if (gas.x < 0 - gas.w * .5)
    {
        gas.x = c.width + 200;
        gas.y = locations[Math.floor(Math.random()*2.9)];
    }

//makes car drift slightly
    car1.vy *= fy;
    car1.y += car1.vy;
    car1.vx *= fx;
    car1.x += car1.vx;

//enemy car
    truck1.x += truck1.vx;

//finish line moving to player
    finishLine.x += -5;

//running out of fuel, game over
if( car1.fuel < 0)
{
    play = lose;
}

//colision with borders
    if(car1.y < 0 + 25)
    {
        car1.y = 0 + 25;
        car1.vy = -car1.vy;
    }

    if(car1.y > c.height - 40)
    {
        car1.y = c.height - 40;
        car1.vy = -car1.vy;
    }

    if(car1.x < 0 + car1.w * .5)
    {
        car1.x = 0 + car1.w * .5;
        car1.vx = 0;
    }

    if(car1.x > c.width - car1.w * .5 - 65)
    {
        car1.x = c.width - car1.w * .5 - 65;
        car1.vx = 0;
    }

    if (truck1.x < 0 - truck1.w * .5)
    {
        truck1.x = c.width + 200;
        truck1.y = locations[Math.floor(Math.random()*2.9)];
        truck1.vx = Math.floor(Math.random()*(-3 - -10) + -10);
        truck1.h = Math.floor(Math.random()*150 + 30);
    }




    //collision with objects

    if (car1.hit(truck1))
    {
        play = lose;
    }

    if(car1.hit(finishLine))
    {
        play = win;
    }

    if (car1.hit(gas))
    {
        if (car1.fuel <= car1.max*2/3)
        {
        car1.fuel += car1.max/3;
        }
        else
        {
        car1.fuel = car1.max;
        }


        gas.x = c.width + 200;
        gas.y = locations[Math.floor(Math.random()*2.9)];
    }

//draw
    finishLine.drawRect();
    car1.drawCar();
    truck1.drawCar();
    bar1.drawRect();
    gas.drawRect();
}

function reset()
{
    finishLine.x = 9000;
    truck1.x = c.width + 200;
    truck1.y = locations[Math.floor(Math.random()*2.9)];
    truck1.vx = Math.floor(Math.random()*(-3 - -10) + -10);
    truck1.h = Math.floor(Math.random()*150 + 30);
    car1.x = 0 + 100;
    car1.y = c.height * .5;
    car1.fuel = 1500;
}

function main()
{
    ctx.clearRect(0,0,c.width,c.height);

    play()

    timer = window.requestAnimationFrame(main);
}
