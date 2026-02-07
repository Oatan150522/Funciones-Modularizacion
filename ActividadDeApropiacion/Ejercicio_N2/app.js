// Se importa la desde el index
import { calcularPromedio } from "./funciones/index.js";

// Se hacen variables para tomar las notas
let nota1 = 4.0;
let nota2 = 2.4;
let nota3 = 3.1;

// Se calcula el promedi y se llama la funcion
let promedioFinal = calcularPromedio(nota1, nota2, nota3);

// Se muestra el promedio
console.log("El promedio final es: ", promedioFinal.toFixed(2));
// condicional para saber si pasa o no pasa
if (promedioFinal >= 3.0) {
    console.log("Aprueda")
}else{
    console.log("Reprobo")
}
