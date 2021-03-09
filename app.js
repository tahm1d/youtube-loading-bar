const load = document.querySelector(".loading-bar__item");

let count = 1;

let counter = setInterval(function()
{
    if(count==100)
    {
        clearInterval(counter); //takes only one param, setInterval variable
    }

    
        load.style.width = count+"%";
        count++;

    
},10);



