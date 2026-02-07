// Se importa las funciones
import { esParImpar } from "./esParImpar.js";
import { esPositivoNegativo } from "./esPositivoNegativo.js";
import { esPrimo } from "./esPrimo.js";

// Se crea la funcion par mirar el analisis
export function mostrarAnalisis(numero) {
  console.log("\nANÁLISIS DEL NÚMERO");

  console.log("Número:", numero);

  console.log("Par o impar:", esParImpar(numero));

  console.log("Signo:", esPositivoNegativo(numero));

  if (esPrimo(numero)) {
    console.log("¿Es primo?: Sí ");
  } else {
    console.log("¿Es primo?: No");
  }
}
