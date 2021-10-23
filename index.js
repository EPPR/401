// EPPR Clase 401 : Archivo del branch TAREA.
// NOMBRE: ⬅️MC Suarez
// FECHA:  ⬅️10/23/2021

// Definición de una constante con una función anónima.
const getStatus = (name, age, online) => `${name} is ${age} years old and is ${(!!online)?'now':'NOT'} online`

// Definir 3 Variables de tipo Número, Cadena de Texto y Booleanos.
var age = 17; //Aquí poner una variable de tipo Número
var name = "Taiki"; // Aquí poner una variable de tipo Cadena de Texto
var online = false; // Aquí poner una variable de tipo Booleano.

// Programa Principal.
console.log('------ Running Program --------')
printTypeOf(age) // El resultado debe ser "number"
printTypeOfp(name) // El resultado debe ser "string"
printTypeOf(online) // El resultado debe ser "boolean"
console.log('------ Running getStatus() --------')
// Aquí escribe 🔽 las variables que pasarás como argumentos.
console.log( getStatus(name, age, online ) )
// Definición de otras funciones personales.
// Escribe 🔽 el nombre correcto de esta función. (Observa la línea 17 👀)
function printTypeOf( value ){
    console.log( `Value: "${value}"` )
    console.log( `Type of: ${typeof(value)}` )
}
// Esto hará que NodeJS cierre el servidor que se ha creado.
return false;
