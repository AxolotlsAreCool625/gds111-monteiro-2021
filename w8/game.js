//returns a random number between a low and high range
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}

var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

var mouse = new GameObject();
mouse.x = 10000;

var buttons = [
    new GameObject(),
    new GameObject(),
    new GameObject()
]

buttons[0].x = 100;
buttons[0].y = 300;

buttons[1].x = 300;
buttons[1].y = 300;

buttons[2].x = 500;
buttons[2].y = 300;

var state = game;

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

function menu()
{

}

function game()
{
    var p1;
    var ai;
    var result;
    var message = `Click Rock, Paper or Scissors`

    var rps = [];
        rps[0] = `Rock`;
        rps[1] = `Paper`;
        rps[2] = `Scissors`;
    
    for(var i=0; i < buttons.length; i++)
    {
        if(buttons[i].hitPoint(mouse))
        {   
            p1=i;
            ai = Math.floor(rand(0,2.9));

            if(p1 == 0)
            {
                if(ai == 0) result = `Tie`
                else if (ai == 1) result = `Lose`
                else result = `Win`
            }
            else if (p1 == 1)
            {
                if(ai == 0) result = `Win`
                else if (ai == 1) result = `Tie`
                else result = `Lose`
            }
            else
            {
                if(ai == 0) result = `Lose`
                else if (ai == 1) result = `Win`
                else result = `Tie`
            }

            message = `Player 1: ${rps[p1]} | AI : ${rps[ai]} | result: You ${result}!`;
            
        }
    }

    ctx.clearRect(0,0,c.width, c.height);

    ctx.save();
            ctx.textAlign =`center`;
            ctx.fillStyle = `#000000`;
            ctx.font = `32px Arial`;
            ctx.fillText(message, c.width/2, 100);
    ctx.restore();

    buttons[0].drawRect();
    buttons[1].drawRect();
    buttons[2].drawRect();
}

function win()
{
    
}

function lose()
{
    
}
           





