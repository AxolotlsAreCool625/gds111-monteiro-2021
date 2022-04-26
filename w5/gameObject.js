class GameObject
{
    constructor()
    {
        this.x = c.width * .5;
        this.y = c.height * .5;
        this.w = 100;
        this.h = 100;
        this.vx = 0;
        this.vy = 0;
        this.color = `skyblue`;
        this.fuel = 800;
        this.angle = 0;
        this.force = 0;
    }

    drawRect()
    {
        ctx.save();
            ctx.fillStyle = this.color;
            ctx.translate(this.x, this.y);
            ctx.fillRect(0-this.w/2, 0-this.h/2, this.w, this.h);
        ctx.restore();
    }

    drawCar()
    {
        ctx.save();

            ctx.fillStyle=this.color;
            this.drawRect();
            ctx.fillStyle = `black`;
            ctx.translate(this.x - this.w/3, this.y + this.h/2);
            ctx.rotate(this.angle*Math.PI/180);
            ctx.fillRect(0 - 10, 0 - 10, 20, 20);
            ctx.restore();
            ctx.save();
            ctx.fillStyle = `black`;
            ctx.translate(this.x + this.w/3, this.y + this.h/2);
            ctx.rotate(this.angle*Math.PI/180);
            ctx.fillRect(0 - 10, 0 - 10, 20, 20);

        ctx.restore();
    }
}