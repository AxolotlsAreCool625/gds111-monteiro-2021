//This is the Object Template
class GameObject
{
    constructor()
    {
        //x, y are position
        this.x = c.width * .5;
        this.y = c.height * .5;

        //w, h are width and height
        this.w = 100;
        this.h = 100;

        //vx, vy are speeds
        this.vx = 0;
        this.vy = 0;

        //this is the color
        this.color = `hotpink`;

        this.fuel = 100;

        this.angle = 0;

        this.force = 1;

        //can be used to set a maximum value on something.
        this.max = 1000;

        this.img;
    }

    drawImg()
    {
        ctx.save();
            ctx.fillStyle=this.color;
            ctx.translate(this.x, this.y);
            ctx.drawImage(this.img, 0-this.w/2,0-this.h/2,this.w, this.h);
        ctx.restore();
    }

    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
    //draws a rectangle
    drawRect()
    {
        ctx.save();
            ctx.fillStyle=this.color;
            ctx.translate(this.x, this.y);
            ctx.fillRect(0-this.w/2,0-this.h/2,this.w, this.h);
        ctx.restore();
    }

    //draws a car
    drawCar()
    {   
        ctx.save();
            ctx.fillStyle=this.color;
            this.drawRect();
            ctx.fillStyle = `black`;
            ctx.translate(this.x-this.w/3, this.y+this.h/2);
            ctx.fillRect(0-10,0-10,20,20);
        ctx.restore();
        ctx.save();
            ctx.translate(this.x+this.w/3, this.y+this.h/2);
            ctx.fillRect(0-10,0-10,20,20);
        ctx.restore();
    }

    //Gets the x coordinate of the left and right
    left(){return this.x - this.w/2;}
    right(){return this.x + this.w/2;}

    //Gets the y coordinate of the top and bottom
    top(){return this.y - this.h/2;}
    bottom(){return this.y + this.h/2;}

    //Is used to detect collision
    hit(_obj)
    {
        if(
            this.left() < _obj.right() &&
            this.right() > _obj.left() &&
            this.top() < _obj.bottom() &&
            this.bottom() > _obj.top()
        )
        {
            return true;
        }
        return false;
    }
}