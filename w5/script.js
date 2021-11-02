
var c=document.querySelector('canvas');
var ctx=c.getContext('2d');

ctx.save();
    ctx.fillStyle='lime';
    ctx.strokeStyle='orange';
    ctx.lineWidth=4;

    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(100,200);
    ctx.lineTo(200,200)
    ctx.closePath();
    ctx.fill()
    ctx.stroke();
ctx.restore();

ctx.save();
    ctx.fillStyle='lime';
    ctx.strokeStyle='orange';
    ctx.lineWidth=4;

    ctx.beginPath();
    //x, y, radius, start angle, end angle, clockwise, angles are in radians
    ctx.arc(400,400,50,0*Math.PI/180, 360*Math,PI/180,false)
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

ctx.restore();