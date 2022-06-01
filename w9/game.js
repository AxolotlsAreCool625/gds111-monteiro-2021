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
p1_Pokemon.health = 96

var p1_health = new GameObject(); 
p1_health.img = document.querySelector(`#health`)
p1_health.x = 126
p1_health.y = 300
p1_health.w = 254
p1_health.h = 74

var p1_healthBar = new GameObject(); 
p1_healthBar.w = p1_Pokemon.health
p1_healthBar.h = 5;
p1_healthBar.x = 165;
p1_healthBar.y = 316;


var ai_Pokemon = new GameObject();
ai_Pokemon.img = document.querySelector(`#snivy_ai`)
ai_Pokemon.x = 620
ai_Pokemon.y = 240
ai_Pokemon.w = 140
ai_Pokemon.h = 140
ai_Pokemon.moveChoice = 0;
ai_Pokemon.health = 96

var ai_health = new GameObject(); 
ai_health.img = document.querySelector(`#health_ai`)
ai_health.x = c.width - 126
ai_health.y = 100
ai_health.w = 254
ai_health.h = 74

var ai_healthBar = new GameObject(); 
ai_healthBar.w = ai_Pokemon.health
ai_healthBar.h = 5;
ai_healthBar.x = c.width - 146;
ai_healthBar.y = 118;

var win_screen = new GameObject(); 
win_screen.w = c.width;
win_screen.h = c.height;


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

//These buttons are the moves
buttons[3].x = c.width * 3/5;
buttons[3].y = 360;
buttons[3].img = document.querySelector(`#tackle`);
buttons[3].w = 167;
buttons[3].h = 74;

buttons[4].x = c.width * 4/5;
buttons[4].y = 360;
buttons[4].img = document.querySelector(`#leer`);
buttons[4].w = 167;
buttons[4].h = 74;

buttons[5].x = c.width * 3/5;
buttons[5].y = 460;
buttons[5].img = document.querySelector(`#howl`);
buttons[5].w = 167;
buttons[5].h = 74;

buttons[6].x = c.width * 4/5;
buttons[6].y = 460;
buttons[6].img = document.querySelector(`#razorLeaf`);
buttons[6].w = 167;
buttons[6].h = 74;

buttons[7].x = c.width * 4/5;
buttons[7].y = 460;
buttons[7].img = document.querySelector(`#ember`);
buttons[7].w = 167;
buttons[7].h = 74;

buttons[8].x = c.width * 4/5;
buttons[8].y = 460;
buttons[8].img = document.querySelector(`#aquaJet`);
buttons[8].w = 167;
buttons[8].h = 74;

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
var ai;
var message;
var p1_status;

function menu()
{
    p1_status = `nothing`;

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
                p1_Pokemon.name = `Snivy`;
                win_screen = document.querySelector(`#snivy_win`)
            }
            else if (p1 == 1)
            {
                p1_Pokemon.img = document.querySelector(`#tepig_p1`);
                p1_Pokemon.name = `Tepig`;
                win_screen = document.querySelector(`#tepig_win`)

            }
            else
            {
                p1_Pokemon.img = document.querySelector(`#oshawatt_p1`);
                p1_Pokemon.name = `Oshawatt`;
                win_screen = document.querySelector(`#oshawatt_win`)

            }

            if(ai == 0)
            {
                ai_Pokemon.img = document.querySelector(`#snivy_ai`);
                ai_Pokemon.name = `Snivy`;
            }
            else if (ai == 1)
            {
                ai_Pokemon.img = document.querySelector(`#tepig_ai`);
                ai_Pokemon.name = `Tepig`;
            }
            else
            {
                ai_Pokemon.img = document.querySelector(`#oshawatt_ai`);
                ai_Pokemon.name = `Oshawatt`;
            }

            
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

function turn()
{
    for(var i=0; i < 3; i++)
    {   
        if(buttons[i].hitPoint(mouse))
        {
            movePicked = i
            if(movePicked == 3)
            {
                ai_Pokemon.health -= (p1_Pokemon.attack - ai_Pokemon.defence);
            }

            if(buttons[4].hitPoint(mouse))
            {
                ai_Pokemon.defence *= .5;
            }

            if(buttons[5].hitPoint(mouse))
            {
                p1_Pokemon.attack *= 1.5;
            }
    
            if(buttons[6].hitPoint(mouse))
            {
                if(ai == 0)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
                if(ai == 1)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
                if(ai == 2)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 2 - ai_Pokemon.defence);
                }
            }

            if(buttons[7].hitPoint(mouse))
            {
                if(ai == 0)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 2 - ai_Pokemon.defence);
                }
                if(ai == 1)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
                if(ai == 2)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
            }
    
            if(buttons[8].hitPoint(mouse))
            {
                if(ai == 0)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
                if(ai == 1)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 2 - ai_Pokemon.defence);
                }
                if(ai == 2)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
            }

            ai_Pokemon.moveChoice = Math.floor(rand(0,5.9));

            //type attack
            if(ai_Pokemon.moveChoice == 0 || ai_Pokemon.moveChoice == 1)
            {
                if(ai == 0)
                {
                    if(p1 == 0)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                    if(p1 == 1)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                    if(p1 == 2)
                    {
                    p1_Pokemon.health -= (ai_Pokemon.attack * 2 - p1_Pokemon.defence);
                    }
                }
                if(ai == 1)
                {
                    if(p1 == 0)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 2 - p1_Pokemon.defence);
                    }
                    if(p1 == 1)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                    if(p1 == 2)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                }
                if(ai == 2)
                {
                    if(p1 == 0)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                    if(p1 == 1)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 2 - p1_Pokemon.defence);
                    }
                    if(p1 == 2)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                }
            }

            //normal attack
            else if (ai_Pokemon.moveChoice == 2 || ai_Pokemon.moveChoice == 3)
            {
                p1_Pokemon.health -= (ai_Pokemon.attack - p1_Pokemon.defence);
            }
            //leer
            else if (ai_Pokemon.moveChoice == 4)
            {
                p1_Pokemon.defence *= 0.5;
            }
            //howl
            else
            {
                ai_Pokemon.attack *= 2;
            }
        }
    }
    state = game
}


function game()
{
    var p1_hp;
    var ai_hp;

    ctx.clearRect(0,0,c.width,c.height)
    fightBackground.drawImg();
    p1_Pokemon.drawImg();
    ai_Pokemon.drawImg();

    p1_health.drawImg();

    ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `32px Arial`;
            ctx.fillText(p1_Pokemon.name, 80, 300);
    ctx.restore();

    p1_healthBar.drawRect();

    ai_health.drawImg();

    ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `32px Arial`;
            ctx.fillText(ai_Pokemon.name, c.width - 80, 100);
    ctx.restore();

    ai_healthBar.drawRect();

    p1_hp = `HP:${p1_Pokemon.health}`;

    ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `16px Arial`;
            ctx.fillText(p1_hp, 60, 321);
    ctx.restore();
    
    ai_hp = `HP:${ai_Pokemon.health}`;

    ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `16px Arial`;
            ctx.fillText(ai_hp, c.width - 40, 121);
    ctx.restore();


    
    buttons[3].drawImg();
    buttons[4].drawImg();
    buttons[5].drawImg();

    if(p1 == 0)
    {
        buttons[6].drawImg();
    }
    else if (p1 == 1)
    {
        buttons[7].drawImg();
    }
    else
    {
        buttons[8].drawImg();
    }

    
    for(var z=0; z < 8; z++)
    {   
        if(buttons[z].hitPoint(mouse))
        {
            movePicked = z
            if(movePicked == 3)
            {
                ai_Pokemon.health -= (p1_Pokemon.attack - ai_Pokemon.defence);
            }

            if(buttons[4].hitPoint(mouse))
            {
                ai_Pokemon.defence *= .5;
            }

            if(buttons[5].hitPoint(mouse))
            {
                p1_Pokemon.attack *= 1.5;
            }
    
            if(buttons[6].hitPoint(mouse))
            {
                if(ai == 0)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
                if(ai == 1)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
                if(ai == 2)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 2 - ai_Pokemon.defence);
                }
            }

            if(buttons[7].hitPoint(mouse))
            {
                if(ai == 0)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 2 - ai_Pokemon.defence);
                }
                if(ai == 1)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
                if(ai == 2)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
            }
    
            if(buttons[8].hitPoint(mouse))
            {
                if(ai == 0)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
                if(ai == 1)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 2 - ai_Pokemon.defence);
                }
                if(ai == 2)
                {
                    ai_Pokemon.health -= (p1_Pokemon.attack * 0.5 - ai_Pokemon.defence);
                }
            }

            ai_Pokemon.moveChoice = Math.floor(rand(0,5.9));

            //type attack
            if(ai_Pokemon.moveChoice == 0 || ai_Pokemon.moveChoice == 1)
            {
                if(ai == 0)
                {
                    if(p1 == 0)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                    if(p1 == 1)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                    if(p1 == 2)
                    {
                    p1_Pokemon.health -= (ai_Pokemon.attack * 2 - p1_Pokemon.defence);
                    }
                }
                if(ai == 1)
                {
                    if(p1 == 0)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 2 - p1_Pokemon.defence);
                    }
                    if(p1 == 1)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                    if(p1 == 2)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                }
                if(ai == 2)
                {
                    if(p1 == 0)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                    if(p1 == 1)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 2 - p1_Pokemon.defence);
                    }
                    if(p1 == 2)
                    {
                        p1_Pokemon.health -= (ai_Pokemon.attack * 0.5 - p1_Pokemon.defence);
                    }
                }
            }

            //normal attack
            else if (ai_Pokemon.moveChoice == 2 || ai_Pokemon.moveChoice == 3)
            {
                p1_Pokemon.health -= (ai_Pokemon.attack - p1_Pokemon.defence);
            }
            //leer
            else if (ai_Pokemon.moveChoice == 4)
            {
                p1_Pokemon.defence *= 0.5;
            }
            //howl
            else
            {
                ai_Pokemon.attack *= 2;
            }
        }
    }
        
    if(p1_Pokemon.health <= 0 || ai <= 0)
    {
        if(ai_Pokemon.health <= 0)
        {
            state = win
        }
        else
        {
            state = lose
        }
    }
    

    
}


function win()
{
    ctx.clearRect(0,0,c.width,c.height)
    win_screen.drawImg()
    //this is so the control can check if the player lost or won, and bring them to the right state
    p1_status = `nothing`;
}

function lose()
{
    //this is so the control can check if the player lost or won, and bring them to the right state
    p1_status = `nothing`;
}