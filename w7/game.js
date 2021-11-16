var rps = [];
rps[0] = 'Rock'
rps[1] = 'Paper'
rps[2] = 'Scissors'
var button = document.querySelectorAll('button')


function rand(low, high)
{
    return Math.random()*(high-low)+low;
}



function play(index)
{

    var pChoice = index;
    var cChoice = Math.floor(rand(0,2.99999))
    var outcome;

    if(pChoice == 0)
    {
        if(cChoice == 0)
        {
            outcome = `tie`;
        }
        else if(cChoice == 1)
        {
            outcome = `lose`;
        }
        else(cChoice == 2)
        {
            outcome = `win`;
        }
    }
    else if(pChoice == 1)
    {
        if(cChoice == 0)
        {
            outcome = `win`;
        }
        else if(cChoice == 1)
        {
            outcome = `tie`;
        }
        else(cChoice == 2)
        {
            outcome = `lose`;
        }
    }
    else(pChoice == 2)
    {
        if(cChoice == 0)
        {
            outcome = `lose`;
        }
        else if(cChoice == 1)
        {
            outcome = `win`;
        }
        else(cChoice == 2)
        {
            outcome = `tie`;
        }
    } 

    /*
var results = [
    [`tie`, `lose`, `win`]
    [`win`, `tie`, `lose`]
    [`lose`, `win`, `tie`]
]  */


    alert(`player:${pChoice} | cpu:${cChoice}`)
}

button[0].addEventListener('click', function(){
    play(0);
})

button[1].addEventListener('click', function(){
    play(1);
})

button[2].addEventListener('click', function(){
    play(2);
})

