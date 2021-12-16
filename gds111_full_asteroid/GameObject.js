class GameObject
{
    constructor()
    {
        //Position of Object
        this.x = c.width/2;
        this.y = c.height/2;

        //Size of Object
        this.w = 100;
        this.h = 100;

        //Color of Object
        this.color = `black`;

        //Velocity of Object. Its the number of pixels the object moves during each frame of animation
        this.vx = 0;
        this.vy = 0;

        //Used for physics and angular movement
        this.force = 1;
        this.angle =0;
    }


    //Adds the velocity to the position. The result is a moving object
    move(){
        this.x+=this.vx
        this.y+=this.vy
    }

    //Draws a circle
    drawCircle(){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.fillStyle=this.color;
        ctx.rotate(this.angle*Math.PI/180)
        ctx.beginPath()
        ctx.arc(0,0,this.w/2,0,360*Math.PI/180,true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

    //Draws a rectangle
    drawRectangle()
    {
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.fillStyle=this.color;
        ctx.rotate(this.angle*Math.PI/180)
        ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h)
        ctx.restore()
    }

    //Draws a triangle
    drawTriangle()
    {
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.fillStyle=this.color;
        ctx.rotate(this.angle*Math.PI/180)
        ctx.beginPath()
        ctx.moveTo(this.w/2,0)
        ctx.lineTo(-this.w/2, this.h/2)
        ctx.lineTo(-this.w/2, -this.h/2)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

    //Draws an image
    drawImage()
   {
      ctx.save();
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle * Math.PI/180)
        ctx.drawImage(this.img, -this.w/2, -this.h/2, this.w, this.h)
      ctx.restore();
   }
   
    //Used for collision detection
    //Calculates distance between two objects
    distanceFrom(_obj)
    {
        //get the distance on the x axis 
        //get the distance on the y axis
        //get the true distance
        var dx = _obj.x - this.x;
        var dy = _obj.y - this.y;
        var dist = Math.sqrt(dx*dx + dy*dy);
        return dist;
    }
}