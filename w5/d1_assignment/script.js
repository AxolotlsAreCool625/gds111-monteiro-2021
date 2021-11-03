var c=document.querySelector('canvas');
var ctx=c.getContext('2d');

ctx.save();
    ctx.fillStyle='yellow';
    ctx.strokeStyle='black';
    ctx.lineWidth=4;

    ctx.beginPath();
    ctx.moveTo(84,301);
    ctx.lineTo(84,403);
    ctx.lineTo(186,403);
    ctx.lineTo(186,301);
    ctx.closePath();
    ctx.fill()
    ctx.stroke();

ctx.restore();

ctx.save();
    ctx.strokeStyle="rgb(255,0,0)";
    //rgb(255,0,0);
    ctx.lineWidth=5;

    ctx.beginPath();
    ctx.moveTo(85,683);
    ctx.lineTo(279,549);
    ctx.stroke();

ctx.restore();

ctx.save();
    ctx.fillStyle='#ffff00';
    ctx.strokeStyle='red';
    ctx.lineWidth=5;

    ctx.beginPath();
    //x, y, radius, start angle, end angle, clockwise, angles are in radians;
    ctx.arc(385,441,69,0*Math.PI/180, 360*Math.PI/180,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

ctx.restore();

ctx.save();
    ctx.fillStyle='#ff00ff';
    ctx.strokeStyle='#00ffff';
    ctx.lineWidth=5;

    ctx.beginPath();
    ctx.moveTo(557,307);
    ctx.lineTo(668,282);
    ctx.lineTo(727,381);
    ctx.lineTo(651,467);
    ctx.lineTo(546,422);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

ctx.restore();

ctx.save();
    ctx.fillStyle='#ffff00';
    ctx.strokeStyle='rgb(32,32,32)';
    ctx.lineWidth=5;

    ctx.beginPath();
    //Top point of the star
    ctx.moveTo(636,494);
    //second point of the star, to the right of the first one
    ctx.lineTo(669,553);
    ctx.lineTo(737,566);
    ctx.lineTo(690,616);
    ctx.lineTo(698,684);
    ctx.lineTo(636,655);
    ctx.lineTo(574,684);
    ctx.lineTo(582,616);
    ctx.lineTo(535,566);
    ctx.lineTo(603,553);
    ctx.closePath();

    ctx.fill();
    ctx.stroke();

ctx.restore();