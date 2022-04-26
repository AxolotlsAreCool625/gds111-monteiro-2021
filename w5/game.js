var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

var timer = window.requestAnimationFrame(main);

var fy = .85;
var fx = .85;

var locations = [];
locations [0] = c.height * .5 - 200;
locations [1] = c.height * .5;
locations [2] = c.height * .5 + 200;

var car1 = new GameObject();
    car1.y = c.height * .5;
    car1.h  = 50;
    car1.w  = 120;
    car1.color = `crimson`;
    car1.x = 0 + 100;
    car1.vy = 0;
    car1.vx = 0;
    car1.force = 2;

var truck1 = new GameObject();
    truck1.x = c.width + 200;
    truck1.y = locations[1];
    truck1.vx = -5;

function main()
{
    ctx.clearRect(0,0,c.width,c.height);

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

//makes car drift slightly
    car1.vy *= fy;
    car1.y += car1.vy;
    car1.vx *= fx;
    car1.x += car1.vx;

//enemy car
    truck1.x += truck1.vx;

//colision 
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
//draw
    car1.drawCar();
    truck1.drawCar();
    timer = window.requestAnimationFrame(main);
}
