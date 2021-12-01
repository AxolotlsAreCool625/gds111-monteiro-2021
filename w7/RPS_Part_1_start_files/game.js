
/*----------Declare the variables----------*/

    //This is an array
    var rps = [];
    rps[0] = `Rock`;
    rps[1] = `Paper`;
    rps[2] = `Scissors`;

    /*----------Select the html elements ----------*/
    //Lists of buttons 
    var button = document.querySelectorAll(`button`);

    //Lists of Player's choice images and Computer's choice images.
    var pImg = document.querySelectorAll(`.player`);
    var cImg = document.querySelectorAll(`.cpu`);

    //The canvas element and it's context object
    var c = document.querySelector(`canvas`);
    var ctx = c.getContext(`2d`);

/*------------Define the functions-------------*/
    /*
    Random Number Generator returns a range of numbers. 
    Pass the low number then the high number to the function
    */
    function rand(low, high)
    {
        return Math.random()*(high-low)+low;
    }

    /*
    The play() function gets called on click. 
    Pass in the players choice 
    0 for rock
    1 for paper
    2 for scissors
    */
function play(index)
{
    //erase the canvas
    ctx.clearRect(0,0,c.width, c.height);

    //declare the variables for the player and cpu choices. 
    var pChoice = index;
    var cChoice = Math.floor(rand(0,2.9999999));

    //Used to store dipslay for the outcome.
    var outcome;
    var msg;

    //Check to see who won
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
       else 
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
        else 
        {
            outcome = `lose`;
        }
    }       
    else 
    {
        if(cChoice == 0)
        { 
            outcome = `lose`
        }
        else if(cChoice == 1) 
        {
            outcome = `win`
        }
        else 
        {
            outcome = `tie`
        }
    }  
    
    //Create the message to be displayed. This can be multiple variables if necessary.
    msg = `player:${rps[pChoice]} | cpu:${rps[cChoice]} | Outcome: ${outcome}`;
    
        /*
        Draw the images on the screen
        Be sure to make them the correct sizes
        */
        
        ctx.drawImage(pImg[pChoice], 100, 100, 100, 200)
        ctx.drawImage(cImg[cChoice], c.width-200, 100, 100, 200)
    
    /*
    Draw any text outputs to the canvas
    */
    ctx.save();
        ctx.fillStyle=`yellow`;
        ctx.font = `30px Arial`
        ctx.textAlign = `center`;
        ctx.fillText(msg, c.width/2, 30);
    ctx.restore();

    /*
       alert is used for debugging
    */
    //alert(msg)
}

/*---------------Make the Buttons clickable---------------*/

button[0].addEventListener(`click`, function(){
    play(0);
})

button[1].addEventListener(`click`, function(){
    play(1);
})

button[2].addEventListener(`click`, function(){
    play(2);
})