import { esPrimo } from "./esPrimo.js";

// Muestra el resultado final
export function mostrarResultado(numero) {
    if (esPrimo(numero)) {
        console.log(`El número ${numero} es primo`);
    } else {
        console.log(`El número ${numero} NO es primo`);
    }
}
