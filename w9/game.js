//returns a random number between a low and high range
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}

var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

var mouse = new GameObject();
mouse.x = 10000;

var buttons =
 [
    new GameObject(),
    new GameObject(),
    new GameObject()
]

var p1_Pokemon = new GameObject(); 
p1_Pokemon.img = document.querySelector(`snivy_p1`)

var ai_Pokemon = new GameObject();
ai_Pokemon.img = document.querySelector(`snivy_ai`)

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

var p1;
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

            message = `You Picked: ${rps[p1]} | AI Picked: ${rps[ai]}`;
            
        }
    }

    ctx.clearRect(0,0,c.width, c.height);

    ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `32px Arial`;
            ctx.fillText(message, c.width/2, 100);
    ctx.restore();

    buttons[0].drawImg();
    buttons[1].drawImg();
    buttons[2].drawImg();
}

function game()
{
   
}

function win()
{
    
}

function lose()
{
    
}