//Alerta Bienvenida


Swal.fire({
    title: "Bienvenid@"
});


//VARIABLE FORMULARIO COMPLETO
var form = $("#formulario_contacto");
//consumir api REST, INSERTANDO PARAMETROS PARA SU CORRECTO FUNCIONAMIENTO
function iniciarMap(){
    var coord = {lat:-33.44911939083252 ,lng: -70.6395641652073};
    var map = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
//OCULTAR FORMULARIO DE ENTRADA, AL MOMENTO DE CLIKCEAR SE DESLIZA Y APARECE
 $(document).ready(function(){
    $('#formulario_contacto_div').hide();
    $('#boton_contacto').click(function(){
        $('#formulario_contacto_div').slideDown();
         
     });
  
 });

//CONSUMIENDO API VALOR BITOCOIN
const opcionesCriptomoneda=async()=>{
    const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    const respuesta= await fetch(url);
    const resultado=await respuesta.json();

    //console.log(resultado);
    let selectCripto=document.querySelector("#criptomoneda");
    let opcionesHTML=`<option value="">- Selecciona -</option>`;

    resultado.Data.map(opcion=>{
        opcionesHTML+=`<option value="${opcion.CoinInfo.Name}">${opcion.CoinInfo.FullName}</option>`;
    });
    selectCripto.innerHTML=opcionesHTML;

}

const cotizarMoneda=()=>{

    const moneda=document.querySelector("#moneda").value;
    const cripto=document.querySelector("#criptomoneda").value;

    if (moneda === '' || cripto === '')
    {
        mostrarError("#msj-error","FALTA SELECCIONAR CAMPOS");
        return;
    }

    cotizar(moneda, cripto);    
}

const cotizar=async(moneda="USD",cripto="BTC")=>{
    const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
    //console.log(url);

    const respuesta= await fetch(url);
    let resultado=await respuesta.json();
    resultado=resultado.DISPLAY[cripto][moneda];

    let divResultado=document.querySelector("#divResultado");
    //SPINNER
    //divResultado.innerHTML= `<div style="text-align:center">`;
    
    divResultado.innerHTML= `<div class="precio"> el precio es de: <span>${resultado.PRICE}</span></div>`;
    
}
//se implementara el manejo de errores a futuro, por ahora no es relevante
const mostrarError=(elemento,mensaje)=>
{
    divError=document.querySelector(elemento);
    divError.innerHTML=`<p class="red darken-4 error">${mensaje}</p`;
    setTimeout(()=>{ divError.innerHTML=``;}, 2000);
}

//SUBMIT TEST
function submitForm() {
    $("#formulario_contacto").submit();
 }
 //VALIDAR FORMULARIO SUBSCRI 
 function validar_sub(){
    nombre  = document.getElementById("nombre").value;
    email  = document.getElementById("email").value;
    telefono  = document.getElementById("telefono").value;
    aceptar_correos  = document.getElementById("aceptar_correos").checked;
    expresion= /\w+@\w+\.+[a-z]/;
    
    expresionNombre= /^[a-zA-ZñÑ-áéíóúÄËÏÖÜÁÉÍÓÚ ]+$/i;

    if (email ==="" && nombre ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes completar todos los campos antes de continuar",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }

    else if (nombre ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes ingresar un nombre",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (telefono ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes ingresar un numero de telefono",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (!aceptar_correos)
    {
        Swal.fire({
            title:"Alerta",
            text:"debes aceptar el envio de correos",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (nombre.length>50)
    {
        Swal.fire({
            title:"Alerta",
            text:"el nombre ingresado es muy largo",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (email ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes ingresar un email",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (!expresion.test(email) && !expresionNombre.test(nombre) )
    {
        Swal.fire({
            title:"Alerta",
            text:"datos ingresados invalidos",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,
        });
        return false;
    }

    else if (!expresion.test(email))
    {
        Swal.fire({
            title:"Alerta",
            text:"correo invalido",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,
        });
        return false;
    }
    else if (!expresionNombre.test(nombre))
    {
        Swal.fire({
            title:"Alerta",
            text:"su nombre no es valido",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,
        });
        return false;

    }

 };
 //VALIDAR FORMULARIO CONTACTO
function validar(){
    var nombre,email;
    expresion= /\w+@\w+\.+[a-z]/;
    
    expresionNombre= /^[a-zA-ZñÑ-áéíóúÄËÏÖÜÁÉÍÓÚ ]+$/i;
    nombre = document.getElementById("floatingname").value;
    email  = document.getElementById("floatingemail").value;
    telefono  = document.getElementById("floatingphone").value;
    asunto  = document.getElementById("floatingsubject").value;
    mensaje  = document.getElementById("floatingtextarea").value;
   // fromulario = document.getElementById("formulario");
    //submit = document.getElementById("enviarF").ready;
    

    //evento SUBMIT FORMULARIO
   // fromulario.addEventListener("enviarF",(e) =>{
        
     //   e.preventDefault();
       // console.log("funciono");
    //})

    if (email ==="" && nombre ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes completar todos los campos antes de continuar",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }

    else if (nombre ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes ingresar un nombre",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (telefono ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes ingresar un numero de telefono",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (asunto ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes ingresar un asunto",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (mensaje ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes ingresar un mensaje",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (nombre.length>50)
    {
        Swal.fire({
            title:"Alerta",
            text:"el nombre ingresado es muy largo",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (email ==="")
    {
        Swal.fire({
            title:"Alerta",
            text:"debes ingresar un email",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,

        });
        return false;
    }
    else if (!expresion.test(email) && !expresionNombre.test(nombre) )
    {
        Swal.fire({
            title:"Alerta",
            text:"datos ingresados invalidos",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,
        });
        return false;
    }

    else if (!expresion.test(email))
    {
        Swal.fire({
            title:"Alerta",
            text:"correo invalido",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,
        });
        return false;
    }
    else if (!expresionNombre.test(nombre))
    {
        Swal.fire({
            title:"Alerta",
            text:"su nombre no es valido",
            icon:"warning",
            confirmButtonText:"Aceptar",
            timer: 5000,
            timerProgressBar: true,
            allowOutssideClick: true,
            allowEscapeKey: true,
            allowEnterkey: true,
        });
        return false;

    }

    
    
}