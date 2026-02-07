// Se importa la funcion de calcularpromedio
import { apruebaNoaprueba } from "./apruebaNoaprueba.js";

// Esta funcion es para mostrar el mensaje Final
export function mensajeFinal (nombre, promedio){
    let estado = apruebaNoaprueba(promedio)
    console.log(
        `Hola ${nombre}, tu promedio es ${promedio.toFixed(2)} y ${estado}`
    );
    
}