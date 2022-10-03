var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);
    
var x = 200;
var y = 200;
var w = 100;
var h = 50;
var speed = 5;

var timer = window.requestAnimationFrame(main);

class GameObject
{
    constructor()
    {
        this.x = c.width * .5;
        this.y = c.height * .5;
        this.w = 100;
        this.h = 100;
        this.vx = 0;
        this.vy = 0;
        this.color = `skyblue`;
        this.fuel = 800;
        this.angle = 0;
    }

    drawRect()
    {
        ctx.save();
            ctx.fillStyle = this.color;
            ctx.translate(this.x, this.y);
            ctx.fillRect(0-this.w/2, 0-this.h/2, this.w, this.h);
        ctx.restore();
    }

    drawCar()
    {
        ctx.save();

            ctx.fillStyle=this.color;
            this.drawRect();
            ctx.fillStyle = `dimgrey`;
            ctx.translate(this.x - this.w/3, this.y + this.h/2);
            ctx.rotate(this.angle*Math.PI/180);
            ctx.fillRect(0 - 10, 0 - 10, 20, 20);
            ctx.restore();
            ctx.save();
            ctx.fillStyle = `dimgrey`;
            ctx.translate(this.x + this.w/3, this.y + this.h/2);
            ctx.rotate(this.angle*Math.PI/180);
            ctx.fillRect(0 - 10, 0 - 10, 20, 20);

        ctx.restore();
    }
}

var startLine = new GameObject ();
    startLine.x = 100;
    startLine.h = c.height;
    startLine.w = 20;
    startLine.color = `whitesmoke`;

var finishLine = new GameObject ();
    finishLine.x = 850;
    finishLine.h = c.height;
    finishLine.w = 20;
    finishLine.color = `black`;

var car1 = new GameObject();
    car1.y = 300;
    car1.h  = 50;
    car1.w  = 180;
    car1.color = `limegreen`;
    car1.x = startLine.x - car1.w * .5;
    car1.vx = 8;

var car2 = new GameObject();
    car2.color = `#1e90ff`;
    car2.x = startLine.x - car2.w * .5;
    car2.y = 100;
    car2.vx = 3;
    car2.fuel = 1200;

var car3 = new GameObject();
    car3.h = 160;
    car3.w = 60;
    car3.color = `red`;
    car3.x = startLine.x - car2.w * .5;
    car3.y = 600;
    car3.vx = 5;
    car3.fuel = 2000;    

var bar1 = new GameObject();
    bar1.y = 200;
    bar1.w = 200;
    bar1.h = 20;
    bar1.color = `limegreen`;

var bar2 = new GameObject();
    bar2.y = 20;
    bar2.w = 200;
    bar2.h = 20;
    bar2.color = `#1e90ff`;

var bar3 = new GameObject();
    bar3.y = 450;
    bar3.w = 200;
    bar3.h = 20;
    bar3.color = `red`;

function main()
{
    ctx.clearRect(0,0,c.width,c.height);

    car1.x = car1.x + car1.vx;
    car1.fuel = car1.fuel - car1.vx;

    if(car1.x > finishLine.x - car1.w/2)
    {
        car1.vx = 0;
        car1.x = finishLine.x - car1.w/2;
        car1.angle = car1.angle + 10;
    }

    car2.x = car2.x + car2.vx;
    car2.fuel = car2.fuel - car2.vx;

    if(car2.x > finishLine.x - car2.w/2)
    {
        car2.vx = 0;
        car2.x = finishLine.x - car2.w/2;
        car2.angle = car2.angle + 10;
    }
    
    car3.x = car3.x + car3.vx;
    car3.fuel = car3.fuel - car3.vx;

    if(car3.x > finishLine.x - car3.w/2)
    {
        car3.vx = 0;
        car3.x = finishLine.x - car3.w/2;
        car3.angle = car3.angle + 10;
    }

    bar1.w = 200 * car1.fuel/800;
    bar2.w = 200 * car2.fuel/1200;
    bar3.w = 200 * car3.fuel/2000;

    bar1.drawRect();
    bar2.drawRect();
    bar3.drawRect();
    startLine.drawRect();
    finishLine.drawRect();
    car1.drawCar();
    car2.drawCar();
    car3.drawCar();

    timer = window.requestAnimationFrame(main);
}
