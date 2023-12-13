let buttonsm = document.querySelector("#btnm");
let menubox = document.querySelector("#sidemenu");
let closemenu = document.querySelector("#mm");



menubox.firstElementChild.classList.remove("sidemenu");
menubox.firstElementChild.classList.add("sidemenuvible");

buttonsm.addEventListener("click", open);

function open (click)
{

    
    
    menubox.firstElementChild.classList.remove("sidemenuvible");
    menubox.firstElementChild.classList.add("sidemenu");
    buttonsm.removeEventListener("click", open);
    buttonsm.addEventListener("click", close);
    wagenbox.lastElementChild.classList.remove("wagenmenu");
   wagenbox.lastElementChild.classList.add("wagenmenuvible");
   buttonw.addEventListener("click", openwag);
  buttonw.removeEventListener("click", closewag);
}


function close (click)
{
    
    menubox.firstElementChild.classList.remove("sidemenu");
    menubox.firstElementChild.classList.add("sidemenuvible");
    buttonsm.addEventListener("click", open);
    buttonsm.removeEventListener("click", close);

}

closemenu.addEventListener("click", close2)
function close2 (click)
{
    
    menubox.firstElementChild.classList.remove("sidemenu");
    menubox.firstElementChild.classList.add("sidemenuvible");
    buttonsm.addEventListener("click", open);
    buttonsm.removeEventListener("click", close);
    wagenbox.lastElementChild.classList.remove("wagenmenu");
   wagenbox.lastElementChild.classList.add("wagenmenuvible");
   buttonw.addEventListener("click", openwag);
  buttonw.removeEventListener("click", closewag);

}
//wagen

let buttonw = document.querySelector("#wagen");
let wagenbox = document.querySelector("#wagenmenu");

wagenbox.lastElementChild.classList.remove("wagenmenu");
   wagenbox.lastElementChild.classList.add("wagenmenuvible");

buttonw.addEventListener("click", openwag);
function openwag (click)
{
    menubox.firstElementChild.classList.remove("sidemenu");
    menubox.firstElementChild.classList.add("sidemenuvible");
    buttonsm.addEventListener("click", open);
    buttonsm.removeEventListener("click", close);
   wagenbox.lastElementChild.classList.remove("wagenmenuvible");
   wagenbox.lastElementChild.classList.add("wagenmenu");
  buttonw.removeEventListener("click", openwag);
  buttonw.addEventListener("click", closewag);
}

function closewag (click)
{
   wagenbox.lastElementChild.classList.remove("wagenmenu");
   wagenbox.lastElementChild.classList.add("wagenmenuvible");
   buttonw.addEventListener("click", openwag);
  buttonw.removeEventListener("click", closewag);
  
  
}

let buttonwgmenu = document.getElementById("favoritescr");

buttonwgmenu.addEventListener("click", openwag);
function openwag (click)
{
    wagenbox.lastElementChild.classList.remove("wagenmenuvible");
   wagenbox.lastElementChild.classList.add("wagenmenu");
    menubox.firstElementChild.classList.remove("sidemenu");
    menubox.firstElementChild.classList.add("sidemenuvible");
    buttonsm.addEventListener("click", open);
    buttonw.addEventListener("click", openwag);
    buttonw.addEventListener("click", closewag);

}


