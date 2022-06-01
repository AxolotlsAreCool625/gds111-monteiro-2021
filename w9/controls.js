var space = false;

document.addEventListener(`keydown`, press);
document.addEventListener(`keyup`, release);

function press(e)
{
    if(e.keyCode == 32){space=true;}
}
function release(e)
{
    if(e.keyCode == 32){
        
        if (state == menu)
        {
            if (p1 >= 0)
            {
            state = game
            game()
            }
        }

        if (state == game)
        {
            if (p1_status == won)
            {
                state = win
                won()
            }
            else if (p1_status == lost)
            {
                state = lose
                lost()
            }
        }
    
    
    }

}
