//returns a random number between a low and high range
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}

var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);
var timer = window.requestAnimationFrame(main);

var mouse = new GameObject();
mouse.x = 10000;

var buttons =
 [
    //these four are the start buttons
    new GameObject(),
    new GameObject(),
    new GameObject(),
    new GameObject(),
    //these three are for the specfic type moves
    new GameObject(),
    new GameObject(),
    new GameObject(),
    //these three are the normal moves 
    new GameObject(),
    new GameObject(),
    new GameObject()
]
var fightBackground = new GameObject();
fightBackground.img = document.querySelector(`#battleBackground`)
fightBackground.w = c.width;
fightBackground.h = c.height;

var p1_Pokemon = new GameObject(); 
p1_Pokemon.img = document.querySelector(`#snivy_p1`)
p1_Pokemon.x = 180
p1_Pokemon.y = 460
p1_Pokemon.w = 160
p1_Pokemon.h = 160


var ai_Pokemon = new GameObject();
ai_Pokemon.img = document.querySelector(`#snivy_ai`)
ai_Pokemon.x = 620
ai_Pokemon.y = 240
ai_Pokemon.w = 140
ai_Pokemon.h = 140



buttons[0].x = c.width * 1/3;
buttons[0].y = 300;
buttons[0].img = document.querySelector(`#snivy_ai`);
buttons[0].w = 108;

buttons[1].x = c.width * 1/2;
buttons[1].y = 300;
buttons[1].img = document.querySelector(`#tepig_ai`);
buttons[1].w = 85;

buttons[2].x = c.width * 2/3;
buttons[2].y = 300;
buttons[2].img = document.querySelector(`#oshawatt_ai`);
buttons[2].w = 81;

var state = menu;

c.addEventListener(`mousemove`, function(evt){
    var rect = c.getBoundingClientRect();
    mouse.x = evt.clientX - rect.left;
    mouse.y = evt.clientY - rect.top;

    //mouse.drawRect();
});

c.addEventListener(`click`, main);

state();

function main(e)
{
    state();
}

//set to negative one to make sure control if statement works and player does select something
var p1 = -1;
//this is so the control can check if the player lost or won, and bring them to the right state
var p1_status;
var ai;
var message;

function menu()
{
    message = `Choose a pokemon!`;

    var rps = [];
        rps[0] = `Snivy`;
        rps[1] = `Tepig`;
        rps[2] = `Oshawatt`;
    
    for(var i=0; i < 3; i++)
    {
        if(buttons[i].hitPoint(mouse))
        {   
            p1=i;
            ai = Math.floor(rand(0,2.9));

            if(p1 == 0)
            {
                p1_Pokemon.img = document.querySelector(`#snivy_p1`);
            }
            else if (p1 == 1)
            {
                p1_Pokemon.img = document.querySelector(`#tepig_p1`);
            }
            else
            {
                p1_Pokemon.img = document.querySelector(`#oshawatt_p1`);
            }

            if(ai == 0)
            {
                ai_Pokemon.img = document.querySelector(`#snivy_ai`);
            }
            else if (ai == 1)
            {
                ai_Pokemon.img = document.querySelector(`#tepig_ai`);
            }
            else
            {
                ai_Pokemon.img = document.querySelector(`#oshawatt_ai`);
            }

            message = `You Picked: ${rps[p1]} | AI Picked: ${rps[ai]}`;
            
        }
    }
    
    ctx.clearRect(0,0,c.width, c.height);

    if (p1 >= 0)
    {
    message = `You Picked: ${rps[p1]} | AI Picked: ${rps[ai]}`;
    }

    ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `32px Arial`;
            ctx.fillText(message, c.width/2, 100);
    ctx.restore();

    if (p1 >= 0)
    {
    message = `Press space to continue with your selected pokemon!`;

    ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `32px Arial`;
            ctx.fillText(message, c.width/2, 150);
    ctx.restore();
    }

    buttons[0].drawImg();
    buttons[1].drawImg();
    buttons[2].drawImg();

    
}

function game()
{
    ctx.clearRect(0,0,c.width,c.height)
    fightBackground.drawImg();
    p1_Pokemon.drawImg();
    ai_Pokemon.drawImg();
    
    
}

function win()
{
    
}

function lose()
{
    
}