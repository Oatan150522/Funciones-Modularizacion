// Se importa la funcion de calcular iva
import { calcularIVA } from "./calcularIVA.js";

// Funcion par poder mirar el total a pagar
export function calcularTotalPagar (totalSinIVA){
    return totalSinIVA + calcularIVA(totalSinIVA)
}