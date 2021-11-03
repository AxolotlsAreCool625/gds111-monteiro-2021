
var c=document.querySelector('canvas');
var ctx=c.getContext('2d');

var x=100;
var y=100;
var w=100;
var h=100;
var color='blue';
var spd=5;
var frame=window.requestAnimationFrame(main)

function main()
{
    ctx.clearRect(0,0,c.width,c.height)
    x=x+spd;
    ctx.fillStyle=color;
    ctx.fillRect(x,y,w,h);

    if(x > c.width-w)
    {
        spd=-spd
        spd=spd-5
        color='red'
    }
    if(x < 0)
    {
        spd=-spd
        spd=spd+5
        color='blue'
    }
    if(spd > 150)
    {
        spd=5
    }


    frame=window.requestAnimationFrame(main)
}

