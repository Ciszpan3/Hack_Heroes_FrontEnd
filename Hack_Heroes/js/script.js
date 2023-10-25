window.addEventListener('scroll', reveal);
function reveal()
{
    //Animacje z osi Y

    let revealsY = document.querySelectorAll('.revealY');

    for(let i = 0; i < revealsY.length; i++)
    {
        let windowheight = window.innerHeight;
        let revealTop = revealsY[i].getBoundingClientRect().top;
        let revealPoint = 200;

        if(revealTop < windowheight - revealPoint)
        {
            revealsY[i].classList.add('active');
        }
        else
        {
            revealsY[i].classList.remove('active');
        }
    }

    //Animacje z osi X

    let revealsX = document.querySelectorAll('.revealX');

    //Z prawej strony

    for(let i = 0; i < revealsX.length; i++)
    {
        let windowheight = window.innerHeight;
        let revealTop = revealsX[i].getBoundingClientRect().top;
        let revealPoint = 200;

        if(revealTop < windowheight - revealPoint)
        {
            revealsX[i].classList.add('transition-right');
        }
        else
        {
            revealsX[i].classList.remove('transition-right');
        }
    }

    //Z lewej strony

    let revealsXFromLeft = document.querySelectorAll('.revealsXFromLeft');

    for(let i = 0; i < revealsXFromLeft.length; i++)
    {
        let windowheight = window.innerHeight;
        let revealTop = revealsXFromLeft[i].getBoundingClientRect().top;
        let revealPoint = 200;

        if(revealTop < windowheight - revealPoint)
        {
            revealsXFromLeft[i].classList.add('transition-left');
        }
        else
        {
            revealsXFromLeft[i].classList.remove('transition-left');
        }
    }
}

