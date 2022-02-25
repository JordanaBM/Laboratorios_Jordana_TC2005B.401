//Función para calcular el promedio de un array
function promedioArray(myArray) {
    var i = 0, suma = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        suma = suma + myArray[i++];
}
    return suma / ArrayLen;
}

//Prueba 1 
var myArray = [1, 5, 2, 3, 7];
var a = promedioArray(myArray);
console.log('El promedio del array',myArray, 'es:',a)

//Prueba 2
var myArray2 = [2,7,9,23,-2,-6];
var b = promedioArray(myArray2);
console.log('El promedio del array',myArray2, 'es:',b)

//Prueba 3
var myArray3 = [0,12,23,-34,55];
var c = promedioArray(myArray3);
console.log('El promedio del array',myArray3, 'es:',c)

//Función para escribir en un archivo

const fs = require('fs');

function escribirTXT (palabra){
    palabra = palabra + '\n';
    fs.appendFileSync('./EscribirTXT.txt', palabra);
}

//Prueba 1
var palabra = 'Hola, esta es la primera prueba de escritura';
escribirTXT(palabra);
//Prueba 2
var palabra2 = 'Esta es la segunda prueba de escritura';
escribirTXT(palabra2);
//Prueba 3
var palabra3 = 'Si todo salió bien esta es la última prueba de escritura';
escribirTXT(palabra3);


//Problema ordenar los números de un array de menor a mayor por método de la burbuja

function ordenar(array)
{
    for(j=0;j<array.length;j++)
    {
        for(i=0;i<array.length;i++)
        {
            //Si el elemento en array[i] es mayor al elemento que sigue
            if(array[i]>array[i+1])
            {
                //Realizamos un swap
                var aux=array[i];
                array[i]=array[i+1];
                array[i+1]=aux;
            }
        }
    }
    return array;
}

console.log('\nProblema de ordenamiento con método de la burbuja\n')
//Prueba 1 
// myArray = [1, 5, 2, 3, 7];
var A = ordenar(myArray);
console.log('El array ordenado de',myArray, 'es:',A)

//Prueba 2
//myArray2 = [2,7,9,23,-2,-6];
var B = ordenar(myArray2);
console.log('El array ordenado de',myArray2, 'es:',B)

//Prueba 3
// myArray3 = [0,12,23,-34,55];
var C = ordenar(myArray3);
console.log('El array ordenado de',myArray3, 'es:',C)
