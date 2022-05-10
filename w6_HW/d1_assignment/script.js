var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

//square top left
ctx.save();
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.fillStyle = `yellow`;
ctx.fillRect(85, 302, 100, 100);
ctx.strokeRect(85, 302, 100, 100);
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
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.fillStyle = `#ffff00`;
ctx.beginPath();
ctx.arc(385, 441, 66, 0, 2 * Math.PI, false);
ctx.fill();
ctx.stroke();
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
ctx.lineWidth = 5;
ctx.strokeStyle = `rgb(32,32,32)`;
ctx.fillStyle = `#ffff00`;
ctx.beginPath();
ctx.moveTo(636, 497);
ctx.lineTo(669, 554);
ctx.lineTo(734, 567);
ctx.lineTo(689, 616);
ctx.lineTo(696, 682);
ctx.lineTo(636, 654);
ctx.lineTo(576, 682);
ctx.lineTo(583, 616);
ctx.lineTo(538, 567);
ctx.lineTo(603, 554);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();



