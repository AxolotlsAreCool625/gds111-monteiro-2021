var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

//square top left
ctx.save();
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.fillStyle = `yellow`;
ctx.strokeRect(85, 302, 100, 100);
ctx.fillRect(85, 302, 100, 100);
ctx.restore();

//line bottom left
ctx.save();
ctx.lineWidth = 5;
ctx.strokeStyle = `#ff0000`;
ctx.beginPath();
ctx.moveTo(85, 683);
ctx.lineTo(279, 550);
ctx.closePath();
ctx.stroke();
ctx.restore();

//circle middle 
ctx.save();

ctx.restore();

//pentagon top right
ctx.save();
ctx.lineWidth = 5;
ctx.strokeStyle = `#00ffff`;
ctx.fillStyle = `#ff00ff`;
ctx.beginPath();
ctx.moveTo(557, 309);
ctx.lineTo(668, 284);
ctx.lineTo(725, 381);
ctx.lineTo(651, 465);
ctx.lineTo(548, 421);
ctx.lineTo(557,309);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();

//star bottom right
ctx.save();

ctx.restore();




