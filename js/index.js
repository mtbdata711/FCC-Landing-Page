
var accordion1 = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion1.length; i++) {
  accordion1[i].onclick = function() {

  if( !this.classList.contains('active') ){
      closeAll();
    }
  
  this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

function closeAll(){
   for (i = 0; i < accordion1.length; i++) {
      accordion1[i].classList.remove("active");
        accordion1[i].nextElementSibling.style.maxHeight = null;
    }
}


var accordion = document.getElementsByClassName("accordion2");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].onclick = function() {

  if( !this.classList.contains('active') ){
      closeAll();
    }
  
  this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

function closeAll(){
   for (i = 0; i < accordion.length; i++) {
      accordion[i].classList.remove("active");
        accordion[i].nextElementSibling.style.maxHeight = null;
    }
}


function myFunction711() {
    document.getElementById("One").click();
}


function myFunction1() {
    document.getElementById("Two").click();
}


function myFunction2() {
    document.getElementById("Three").click();
}


function myFunction3() {
    document.getElementById("Four").click();
}


function collapseall() {  //problematic part
    var x = document.getElementsByClassName("panel");
    var b;
    for (b = 0; b < x.length; b++) {
        x[b].style.maxHeight = null;
        x[b].previousElementSibling.classList.remove('active');
  }
}




function NavBar() {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}