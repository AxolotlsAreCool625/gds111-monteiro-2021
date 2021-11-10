var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);
var timer = window.requestAnimationFrame(main);

var startLine = new GameObject();
startLine.x = 150;
startLine.h = c.height;
startLine.w = 10;

var finishLine = new GameObject(); 
finishLine.x = c.width -150;
finishLine.h = c.height;
finishLine.w = 10;

var car = new GameObject();
car.img = document.querySelector(`#car`)
car.color = '#333';
car.h = 52 * 1.2;
car.w =100 * 1.2;
car.x = startLine.x - car.w/2;
car.vx = 5;

var startingFuel = 1240;
var fuel = startingFuel;
var fuelBarFull = 300;

var fuelBar = new GameObject();
fuelBar.w = fuelBarFull;
fuelBar.h = 50;
fuelBar.y = 50;


function main()
{
   ctx.clearRect(0,0,c.width, c.height)


   if(fuel > 0)
   {
      car.move();
      fuel -= car.vx*2
   }


   startLine.drawRect();
   finishLine.drawRect();

   car.drawImage();
   //car.drawRect();
   //fuelBar
   fuelBar.w = -(fuel/startingFuel) * fuelBarFull
   ctx.fillRect(fuelBar.x, fuelBar.y, fuelBar.w, fuelBar.h)

   ctx.font = `35px Arial`;
   ctx.textAlign = `left`;
   ctx.fillText(`FUEL: ${fuel}`, 160, 150)
   timer = window.requestAnimationFrame(main) 
}













