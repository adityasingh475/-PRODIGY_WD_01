const navbar = document.querySelector("nav");

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        
     navbar.style.background = "#0d6efd";

     navbar.style.transition = "0.4s";

     navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";  
     
     topBtn.style.display = "block";

}
else{

    navbar.style.background = "white";

    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    
    topBtn.style.display = "none";
}
topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

});