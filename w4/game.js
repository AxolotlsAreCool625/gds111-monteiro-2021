var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);
    
var x = 200;
var y = 200;
var w = 100;
var h = 50;
var speed = 5;

var timer = window.requestAnimationFrame(main);

function main()
{
    ctx.clearRect(0,0,c.width,c.height);
    x = x + speed;

    if(x > c.width - w - 60)
    {
        speed = speed*-1.1;
    }
    
    if(x < 0 + w - 100)
    {
        speed = speed*-1.1;
    }

    drawCar();

    timer = window.requestAnimationFrame(main);
}


function drawCar()
{
//draw body
ctx.fillStyle=`skyblue`;
        //x, y, width, height
ctx.fillRect(x,y,w,h);
ctx.strokeRect(x,y,w,h);

//draw tires
ctx.fillStyle=`black`;
//left tire
ctx.fillRect(x+5, y+h-10, 20, 20);
//right tire
ctx.fillRect(x+w-20-5, y+h-10, 20, 20);
}