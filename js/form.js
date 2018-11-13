  

function begin(){

  var name=document.getElementById("name");

  var surname=document.getElementById("surname");

  name.addEventListener("input",validation,false);

  surname.addEventListener("input",validation,false);

  validation();
}

function validation(){
  if (name.value=="" && surname.value==""){

    name.setCustomValidity("Introduce name or surname");

    name.style.background="#FFDDDD";

    surname.style.background="#FFDDDD";
  }
  else{
    name.setCustomValidity("");

    name.style.background="#FFFFFF";

    surname.style.background="#FFFFFF";

  }

}


window.addEventListener("load",begin,false);