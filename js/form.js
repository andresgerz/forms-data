var age;  

function begin(){

  var age=document.getElementById("age");


  age.addEventListener("change",change_range,false);

  document.personal_data.addEventListener("invalid",validation,true);

  document.getElementById("send").addEventListener("click",send,false);
}

function change_range(){

  var out=document.getElementById("range");

  var calculate=age.value-40;

  if (calculate<40){
    calcuate=0;

    age.value=40;
  }
  out.innerHTML=calculate+" a "+ age.value;
}


function validation(e){
  var element=e.target;
  element.style.background="#FFDDDD";
}

function send(){
  var correct=document.personal_data.checkValidity();

  if (correct==true){
    document.personal_data.submit();
  }

}


window.addEventListener("load",begin,false);

// $(document).ready(function (e) {
//   $("#send").click(confirm_data) 
// });

// function confirm_data(){

//   // var myUser = $("#name").val();
//   // alert("The user's name is: "+ myUser);
//   $(":input").each(function () { 
//     alert($(this).val());

//   if ($("#male").prop("checked")){
//     alert("You are male");
//   }else{
//     alert("You are female");
//   }
     
//   });

// }
//==========================================================================================

$(document).ready(function () {
  $("#name").focus(function (){
    
    var fieldNAme = $(this);

    if(fieldNAme.val()==fieldNAme.attr("value")){

      fieldNAme.val("");
    }
  });

  $("#form-datas").submit(function(){
    
    if($("#name").val()=="" || $("#name").val()=="Obligatorio nombre"){
      alert("Complete to the name please: ");

      $("#name").focus();

      return false;
    }
  });

  $("#age").blur(function () { 
    var userAge=$(this).val();

    if(isNaN(userAge)){
      alert("Introduce a number please: ");

      $(this).focus();
      $(this).val("");

    }
    
  });

  var myArray=new Array();

  var i=0;

  $(":checkbox").click(function () { 

    $("#knowledge").text("");

    $(":checkbox").each(function () {
      if ($(this).prop("checked")){
        $("#knowledge").append($(this).val() + "<br/>" );
      } 
       
    });
    
    // myArray[i]=$(this).val();
    // // alert("Position: " + i + " " + myArray[i]);

    // $("#knowledge").append(myArray[i]);
    // i++;
    
  });

  $("#refer").change(function() {
    
    alert("The country is: "+ $(this).val() );
    
  });
});

$(document).ready(function () {

  // $("#paypal").click(function () {

  //   $("#e-mail").attr("disabled",false).focus().css("background-color","white") ;
  //   $("#target").attr("disabled", true).css("background-color","lightblue");

  //   });
  
  // $("#visa, #mastercard").click(function() {
    
  //   $("#target").attr("disabled", false).focus().css("background-color","white");
  //   $("#e-mail").attr("disabled", true).css("background-color","lightblue") ; 

  // });

  $("#visa, #mastercard").click(function () { 
    
    $("#target").css("visibility", "visible");
    $("#nro-target").css("visibility", "visible");
    
    $("#mail").css("visibility", "hidden");
    $("#e-mail").css("visibility", "hidden");
    
    $("#target").focus();
  });

  $("#paypal").click(function () { 
    
    $("#target").css("visibility", "hidden");
    $("#nro-target").css("visibility", "hidden");
    
    $("#mail").css("visibility", "visible");
    $("#e-mail").css("visibility", "visible");
    
    $("#e-mail").focus();
  });
  
});