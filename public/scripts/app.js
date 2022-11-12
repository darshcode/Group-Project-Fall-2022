//starts the aplication
// IIFE 
(function (){
    function Start(){
        console.log('App Started');
    }

    window.addEventListener('load', Start);

})();

//Show hidden add survey content div
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }