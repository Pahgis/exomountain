
function test(){

    const icon = document.querySelector("#backtotop")
    const triggerChange = document.querySelector("#about");
    const positions = triggerChange.getBoundingClientRect();
  
    if(scrollY <= positions.y){
       icon.style.display="none";
    }
    else{
       icon.style.display="block";
    }
   }
