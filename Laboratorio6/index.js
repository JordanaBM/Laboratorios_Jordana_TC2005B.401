//función para ahorrar codigo [document.getElementById() = __()];
function __(id){
    return document.getElementById(id);
  }
  
  //Validar contraseña
  function validarContraseña() {
    var pass = __('pass').value,
        pass2 = __('pass2').value;
    if(pass != '' && pass2 != ''){
      if(pass != pass2){
        //si las contraseñas no coinciden
        __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>';
      } else {
        //Si todo esta correcto 
        __('form').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Los datos son correctos :)</p>';
      }
    } else {
      //si los campos o uno, este vacio
      __('resultado').innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
    } 
  }
  
  //enviar formulario con la tecla ENTER
  function enterEnviar(event){
      if(event.keyCode == 13){
        validarContraseña()
      }
  }

//Para cambiar la letra cuando pases el mouse sobre ella 

function Llegar(id) {
	id.style.fontFamily= "Lucida Console";
	}
function Salir(id) {
	id.style.fontFamily= "Arial";
	}

//Función agregar aguas de horchata
__('purchase_horchata').onclick = () => {

  __('horchata').value = Number(__('horchata').value) + 1;

  let respuesta = "";

  let precio = 20* __('horchata').value;

  if(__('horchata').value > 0){
   
    respuesta += "<table><tr><th>Horchata</th><td>" + __('horchata').value +"</td><td>$" + precio + "</td></tr><table>";
  }
  __('cart_horchata').innerHTML = respuesta;

  return precio

}

//Función agregar aguas de tamarindo
__('purchase_tamarindo').onclick = () => {

  __('tamarindo').value = Number(__('tamarindo').value) + 1;

  let precio = 10* __('tamarindo').value
  let respuesta = "";

  if(__('tamarindo').value > 0){
    respuesta += "<table><tr><th>Tamarindo</th><td>" + __('tamarindo').value +"</td><td>$" + precio + "</td></tr><table>";
  }
  __('cart_tamarindo').innerHTML = respuesta;
  return precio

}

//Función agregar aguas de jamaica
__('purchase_jamaica').onclick = () => {

  __('jamaica').value = Number(__('jamaica').value) + 1;

  let precio = 15 * __('jamaica').value
  let respuesta = "";

  if(__('jamaica').value > 0){
    respuesta += "<table><tr><th>Jamaica</th><td>" + __('jamaica').value +"</td><td>$" + precio + "</td></tr><table>";
  }
  else if(__('jamaica').value == 0){
    respuesta += "<table><tr><th>Jamaica</th><td>0</td><td>$0</td></tr><table>";
  }
 

  __('cart_jamaica').innerHTML = respuesta;
  
}

//Para vaciar carrito
// __('vaciar_car').onclick = () => {

//   __('jamaica').value =  "0";
//   __('tamarindo').value = "0";
//   __('horchata').value = "0";

//   delete __('cart_jamaica').innerHTML
  
//     respuesta = "Su carrito ha sido vaciado";
//   __('vaciar').innerHTML = respuesta;
  
// }


//Para calcular el costo total de las aguas
__('total_car').onclick = () => {

  __('jamaica').value = Number(__('jamaica').value);
  __('tamarindo').value = Number(__('tamarindo').value);
  __('horchata').value = Number(__('horchata').value);

  var precio_jam = 0
  var precio_hor = 0
  var precio_tam = 0

  if (__('jamaica').value > 0){
    precio_jam = 15 * __('jamaica').value
  }

 
  if (__('horchata').value > 0){
    precio_hor = 20 * __('horchata').value
  }

  if (__('tamarindo').value > 0){
    precio_tam = 10 * __('tamarindo').value
  }
 
  var precio = precio_jam + precio_hor + precio_tam;
  let respuesta = "";

  respuesta += "<table><tr><th>Total: </th><td>$" + precio +"</td></tr><table>";
 
  __('pago').innerHTML = respuesta;
  
}

function passwordChanged() {
  var strength = __('strength');
  var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
  var enoughRegex = new RegExp("(?=.{8,}).*", "g");
  var pwd = document.getElementById("password");
  if (pwd.value.length == 0) {
      strength.innerHTML = 'Escribe tu contraseña';
  } else if (false == enoughRegex.test(pwd.value)) {
      strength.innerHTML = 'Contraseña mínima de 8 caracteres';
  } else if (strongRegex.test(pwd.value)) {
      strength.innerHTML = '<span style="color:green">Fuerte!</span>';
  } else if (mediumRegex.test(pwd.value)) {
      strength.innerHTML = '<span style="color:orange">Media!</span>';
  } else {
      strength.innerHTML = '<span style="color:red">Débil!</span>';
  }
}