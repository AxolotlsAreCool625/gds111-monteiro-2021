class GameObject
{
   constructor()
   {
      this.x = c.width/2;
      this.y = c.height/2;
      this.w = 100;
      this.h = 100;
      this.color = `red`;
      this.angle = 0;
      this.vx=0;
      this.vy=0;
      this.img;
   }

   drawImage()
   {
      ctx.save();
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle * Math.PI/180)
        ctx.drawImage(this.img, -this.w/2, -this.h/2, this.w, this.h)
      ctx.restore();
   }

   drawRect()
   {
      ctx.save();
         ctx.translate(this.x, this.y)
         ctx.rotate(this.angle * Math.PI/180)
         ctx.fillStyle = this.color
         ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h)
         ctx.fillStyle=`black`;
         ctx.fillRect(-5,-5,10,10)
      ctx.restore();
   }

   drawCircle()
   {
      ctx.save();
         ctx.fillStyle = this.color
         ctx.translate(this.x, this.y)
         ctx.rotate(this.angle * Math.PI/180)
         ctx.beginPath()
         ctx.arc(0, 0, this.w/2, 0, 360*Math.PI, true)
         ctx.closePath()
         ctx.fill()
         ctx.fillStyle=`black`;
         ctx.fillRect(-5,-5,10,10)
      ctx.restore();
   }

   drawTri()
   {
      ctx.save()
         ctx.fillStyle = this.color
         ctx.translate(this.x, this.y)
         ctx.rotate(this.angle * Math.PI/180)
         ctx.beginPath()
            ctx.moveTo(0+this.w/2, 0)
            ctx.lineTo(0-this.w/2, 0+this.h/2)
            ctx.lineTo(0-this.w/2, 0-this.h/2)
         ctx.closePath()
         ctx.fill()
         ctx.fillStyle=`black`;
         ctx.fillRect(-5,-5,10,10)
      ctx.restore()
   }
   move()
   {
      this.x += this.vx;
      this.y += this.vy;
   }
}