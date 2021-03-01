function muestraMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function ocultaMenu(){
      var el = document.getElementById("mobileMenu");
      var x = document.getElementById("myLinks");
      
      //MenuMobile no visible
      if(el.offsetParent === null){
          x.style.display = "none";
      }
  }

window.onresize = ocultaMenu;