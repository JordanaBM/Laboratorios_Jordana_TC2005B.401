
//Ejercicio 1 -- Tabla de cuadrados
const num = prompt("Escriba un número entero: ");


function tabla_cuadrados_cubos(){
    let resultado = "<table>";
    resultado += "<tr><td>Número</td>" + "<td>n^2</td>" + "<td>n^3</td></tr>";
    for(let i = 1; i <= num;i++){
        resultado += "<tr>";
        resultado += "<td>" + i +  "</td>" + "<td>" + i*i +  "</td>"  + "<td>" + i*i*i +  "</td>";
        resultado += "</tr>";
    }
    resultado += "</table>";
    return resultado;
}

document.getElementById("resultados1").innerHTML = tabla_cuadrados_cubos();


//Ejercicio 2 -- Suma de números random

var num1 = Math.floor(Math.random()*10);
var num2 = Math.floor(Math.random()*10);

var inicio = Date.now();
const suma = prompt("¿Cuánto es: " + num1 + "+" + num2 + "?");
var fin = Date.now();

function sumar(){
    resultado = num1 + num2;

    let respuesta = "La suma de " + num1 + " + " + num2 + " es: " + resultado + "<br></br>"
    
    if (resultado == suma){
        respuesta = respuesta + "Tu respuesta es correcta";
    }
    else{
        respuesta = respuesta + "Tu respuesta es incorrecta";
    }
    
    let tiempo = (fin - inicio)/1000;

    respuesta = respuesta + "<br></br>Con un tiempo de: " + tiempo + " segundos";

    return respuesta;
}

document.getElementById("resultados2").innerHTML = sumar();

//Ejercicio 3 -- Función contador


//Para crear Arrays con longitud y números aleatorios
function randomArray(){

    let num = Math.floor(Math.random() * 10)

    new Array(num)

    {length: num}

    () => Math.floor(Math.random() * 10);

    let miarray = Array.from({length: num}, () => Math.floor( Math.random() * (50 - (-50) + 1)) -50);


    return miarray;

}


//Para imprimir el array
function imprimirArray(array){

    var imprimir = "";
    
    for (let i=0; i < array.length; i++) {

        imprimir = "[" + array[i] + "] " + imprimir; 

    }

    imprimir = imprimir + "<br></br>";

    return imprimir;
}


//Prueba contador 

var prueba_contador = [1,2,-3,0]

var esperado = imprimirArray(prueba_contador)

esperado = esperado + "Enteros: 2<br></br>Negativos: 1<br></br>Ceros: 1<br></br><br></br>";

esperado = esperado + "<p><em>Por función (Respuesta obtenida)</em><p></p><br>"

var funcion_contador = contador(prueba_contador)

esperado = esperado + funcion_contador


//Con arrays randoms

var dato = randomArray();

function contador (dato){

    imprimirArray(dato)

    let entero = 0
    let cero = 0
    let negativo = 0

    for (let i=0; i < dato.length; i++) {
        
        if(dato[i] > 0){
            entero ++;
        }
        else if(dato[i] < 0){
            negativo ++;
        }
        else if(dato[i] == 0){
            cero ++;
        }
    
    }

    respuesta = imprimirArray(dato) + "Enteros: " + entero + "<br></br>Negativos: " + negativo + "<br></br>Ceros: " + cero;
    return respuesta;
    
}

document.getElementById("pruebaContador").innerHTML = esperado;
document.getElementById("resultados3").innerHTML = contador(dato);


//Ejercicio 4 -- Función promedios

var prueba_promedio = [3,5,6,-1]

var esperado = imprimirArray(prueba_promedio) + "El promedio del array es: 3.25<br></br><br></br>"

esperado = esperado + "<p><em>Por función (Respuesta obtenida)</em><p></p><br>"

var funcion_promedio = promedios(prueba_promedio)

esperado = esperado + funcion_promedio

var datos = randomArray();

function promedios (datos){

    datos.forEach(function(item,index,arr){
        console.log(item);
    });

    var suma = 0;

    for (let i=0; i < datos.length; i++) {
        
        suma = datos[i] + suma

    }

    let promedio = suma/datos.length

    resultado = imprimirArray(datos) + "El promedio del array es: " + promedio;

    return resultado;
    
}

document.getElementById("pruebaPromedio").innerHTML = esperado;
document.getElementById("resultados4").innerHTML = promedios(datos);



//Ejercicio 5 -- Función inverso

var prueba_inverso = 456

var esperado = "Número = 456<br></br>" + "Invertido: 654<br></br><br></br>"

esperado = esperado + "<p><em>Por función (Respuesta obtenida)</em><p></p><br>"

var funcion_inverso = inverso(prueba_inverso)

esperado = esperado + funcion_inverso

var numero = Math.floor( Math.random() * 157);


function inverso(numero){

  var invertido = 0
  var resto = numero
  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )

  respuesta = "Número = " + numero +"<br></br>" + "Invertido: " + invertido
  return respuesta

}

document.getElementById("pruebaInverso").innerHTML = esperado;
document.getElementById("resultados5").innerHTML = inverso(numero);



//Ejercicio 6 -- Calcular área y perímetro de un rectángulo

class Rectangulo {
    constructor (ancho,alto) {
      this.alto = alto;
      this.ancho = ancho;
    }
    // Getter area
    get area() {
        //document.write("El área es: " + this.calcArea() + "<br></br>" )
       //return this.calcArea(); 
       let respuesta =  "Base: " + this.ancho + "<br>Altura: " + this.alto + "<br></br>"
       respuesta = respuesta + "El área es: " + this.calcArea() + "<br></br>"
       return respuesta
     }
    // Método calcular área
    calcArea () {
      return this.alto * this.ancho;
    }

     // Getter perimetro
     get perimetro() {
        //document.write("El perímetro es: " + this.calcPeri() + "<br></br>" )
       //return this.calcArea(); 
       let respuesta = "El perímetro es: " + this.calcPeri() + "<br></br>"
       return respuesta
     }
    // Método cacular perímetro
    calcPeri () {
      return 2*this.alto + 2*this.ancho;
    }

  }
  
  //Prueba 1

  var rectangulo = new Rectangulo (15,10)

  var esperado = "Base: 15<br>Altura: 10<br></br>" + "El área es: 150<br></br>"

  esperado = esperado + "El perímetro es: 50<br></br>"


  document.getElementById("pruebaRect").innerHTML = esperado; 
  document.getElementById("resultados6").innerHTML = rectangulo.area; 
  document.getElementById("resultados7").innerHTML = rectangulo.perimetro; 

  //Prueba 2

  var rectangulo = new Rectangulo (30,20)

  var esperado = "Base: 30<br>Altura: 20<br></br>" + "El área es: 600<br></br>"

  esperado = esperado + "El perímetro es: 100<br></br>"

  document.getElementById("pruebaRect2").innerHTML = esperado; 
  document.getElementById("resultados8").innerHTML = rectangulo.area; 
  document.getElementById("resultados9").innerHTML = rectangulo.perimetro;
  


