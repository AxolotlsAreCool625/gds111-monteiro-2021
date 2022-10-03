var space = false;

document.addEventListener(`keydown`, press);
document.addEventListener(`keyup`, release);

function press(e)
{
    if(e.keyCode == 32){space=true;}
}

function release(e)
{
    if(e.keyCode == 32)
    {
        
        if (state == menu)
        {
            if (p1 >= 0)
            {
            state = game
            game()
            }
        }

        
    
        if (state == win)
        {
            state = menu
            menu()
        }
        if (state == lose)
        {
            state = menu
            menu()
        }
    
    
    }

}
