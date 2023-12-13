let box1 = document.querySelector(".element-mitte2");

box1.firstElementChild.classList.remove("priceinfo");
box1.firstElementChild.classList.add("priceinfo2");



let interval = setInterval(function(){ box1.getBoundingClientRect().top <=400 ? 
    changeClass(): null}, 1000/60);

function changeClass()
{
  box1.firstElementChild.classList.remove("priceinfo2");
  box1.firstElementChild.classList.add("priceinfo");
 
}

let interval2 = setInterval(function(){ box1.getBoundingClientRect().top >=171 ? 
    changeClass2(): null}, 1000/60);

function changeClass2()
{
  
  box1.firstElementChild.classList.remove("priceinfo");
  box1.firstElementChild.classList.add("priceinfo2");
  
}

let interval3 = setInterval(function(){ box1.getBoundingClientRect().top <=-270 ? 
    changeClass3(): null}, 1000/60);

function changeClass3()
{
  
  box1.firstElementChild.classList.remove("priceinfo");
  box1.firstElementChild.classList.add("priceinfo2");
  
}