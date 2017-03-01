var inputNumber = $("#number");

function init() {
    
    var imgFlag = $("#peruFlag").attr("src", "image/pe.png");
    var codeNumber = $("#codeNumber").text(+51);
    var select = localStorage.getItem('country_select'); 
    var country_code = paises[select].phone_code;
    var country_url = paises[select].imageURL;
    
    //.prop()
    imgFlag.attr("src", country_url);
    codeNumber.text(country_code);
    
    var button = $("#next");
    button.click(onButtonClick);
}

function onButtonClick() {
    
    localStorage.setItem('Number', inputNumber.val());
    
    if(inputNumber.val() == '') {
        
        swal("Número inválido", "Debes ingresar un número según el país en el que resides")
            
    } else {
        onCode();
    }    
}

function onCode() {

    var lab = "LAB-";
    var aleatorio = Math.floor((Math.random()*999)+100);
    var concat = (lab += aleatorio);
    swal({
      title: "Se generó tu código",
      text: "Tú código de usuario es:" + concat,
      type: "info",
      showCancelButton: true,
      cancelButtonColor:"#ed0101",
      confirmButtonColor: "#D800BF",
      confirmButtonText: "Sí, acepto el código",
      cancelButtonText: "No, cancelar el código",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        swal("Código aceptado", "", "success");
        setTimeout(function(){
            location.href = 'signup.html';
        }, 2000);

      } else {
        swal("Código Eliminado", "Vuelve a intentarlo", "error");
        
      }
    });
    //alert("Tu código de usuario es : " + concat);
}

function validateNumber(_evt){
    
    number = window.event.keyCode;


    if((number>=48 && number<=57)|| number==8 || number==32){
            
    } else {
        
        _evt.preventDefault();
    }     
} 

