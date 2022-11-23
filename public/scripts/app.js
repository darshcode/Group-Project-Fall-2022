/*Web App Name: Take The Survey
File Name: app.js;
Group Name: Team A+;
Date: November 10, 2022
Student Name      Student ID
Alex Tang         301238850
Eva Fan           301238820
Darshmeen Dhillon 300689994
Faiyaz Muhammad   301227442
Sheila Donnelly   822281549
Wilson Wu         3012453494*/

//starts the application
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

