var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

class GameObject
{
   constructor()
   {
      this.x = c.width/2;
      this.y = c.height/2;
      this.w = 100;
      this.h = 100;
      this.color = `lime`;
      this.angle = 0;
      this.vx=2;
      this.vy=2;
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
    ctx.save();
      ctx.fillStyle = 'green';
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
    ctx.restore();
   }

   move()
   {
       this.x += this.vx
       this.y += this.vy
   }

}

var jay = new GameObject();
jay.vx==0
jay.vy=0

var timer = window.requestAnimationFrame(main)

function main()
{
   ctx.clearRect(0,0,c.width, c.height)

   jay.move()

   if(jay.x > c.width + jay.w/2)
   {
       jay.x = 0 - jay.w/2
   }

   jay.drawRect();
   timer = window.requestAnimationFrame(main) 
}
