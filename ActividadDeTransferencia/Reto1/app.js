import { calcularPromedio, mensajeFinal } from "./funciones/index.js";

// Datos del estudiante
let nombre = "Jhonatan";
let nota1 = 4.0;
let nota2 = 3.5;
let nota3 = 2.8;

//calcular el promedio
let promedio = calcularPromedio(nota1,nota2,nota3);

// Se muestran el mensaje final
mensajeFinal(nombre, promedio);