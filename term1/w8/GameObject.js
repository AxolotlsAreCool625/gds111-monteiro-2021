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
        this.color = `red`;

        //can be used to set a maximum value on something.
        this.hp = 100;

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

    //Gets the x coordinate of the left and right
    left(){return this.x - this.w/2;}
    right(){return this.x + this.w/2;}

    //Gets the y coordinate of the top and bottom
    top(){return this.y - this.h/2;}
    bottom(){return this.y + this.h/2;}

    //Is used to detect collision
    hitBox(_obj)
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

     //Is used to detect collision
     hitPoint(_obj)
     {
         if(
             this.left() < _obj.x &&
             this.right() > _obj.x &&
             this.top() < _obj.y &&
             this.bottom() > _obj.y
         )
         {
             return true;
         }
         return false;
     }
}