var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);
var timer = window.requestAnimationFrame(main);

var amt = 50;
var dots = [];

var colors = [];
colors[0] = `#00ffff`;
colors[1] = `#ffff00`;
colors[2] = `#ff00ff`;

for(var i=0; i<amt; i++)
{
    dots[i] = new GameObject();
    dots[i].x = c.width/2;
    dots[i].y = c.height/2;
    dots[i].vx = rand(-15, 15);
    dots[i].vy = rand(-15, 15);
    dots[i].w = rand(10, 30);
    dots[i].h = dots[i].w;
    dots[i].color = colors[Math.floor(rand(0,2.9))];
}

function main()
{
    ctx.clearRect(0,0,c.width,c.height);

    for(var i=0; i<amt; i++)
    {
        dots[i].move();
        dots[i].vx = rand(-15, 15);
        dots[i].vy = rand(-15, 15);
        if(dots[i].y > c.height + 50)
        {
            dots[i].y = -50;
        }
        //if(dots[i].x > c.width + 50)
        //{
        //    dots[i].x = -50;
        //}
        dots[i].drawRect();
    }

    timer = window.requestAnimationFrame(main);
}

function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}