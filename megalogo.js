let zoomlogo = document.getElementById("megalogo");

   zoomlogo.firstElementChild.classList.remove("zoomlogozoom");
    zoomlogo.firstElementChild.classList.add("zoomlogo");


    let interval4 = setInterval(function(){ box1.getBoundingClientRect().top <=0 ? 
        changeClass4(): null}, 1000/60);
    
    function changeClass4()
    {
        zoomlogo.firstElementChild.classList.remove("zoomlogo");
        zoomlogo.firstElementChild.classList.add("zoomlogozoom");
      
    }



