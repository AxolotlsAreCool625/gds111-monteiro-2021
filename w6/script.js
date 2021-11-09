var c=document.querySelector('canvas');
var ctx=c.getContext('2d');

class GameObject
{
    constructor()
    {
        this.x = c.width/2;
        this.y = c.height/2;
        this.w = 100;
        this.h = 100;
        this.color = 'red';
    }


    drawRect()
    {
        ctx.save();
            ctx.translate(this.x, this.y)
            ctx.filStyle = this.color
            ctx=fillRect(-50, -50, this.w, this.h)
        ctx.restore();
    }

    drawCircle()
    {
        ctx.save();
            ctx.filStyle = this.color
            ctx.translate(this.x, this.y)
            ctx.beginPath()
            ctx=arc(0, 0, this.w/2, 0, 360*Math.PI, true)
            ctx.closePath()
            ctx.fill()
        ctx.restore();
    }


}

var jay = new GameObject();
jay.color = 'blue'
jay.drawRect();

var bill = new GameObject();
bill.color = 'green'
bill.x = 200
bill.drawRect();