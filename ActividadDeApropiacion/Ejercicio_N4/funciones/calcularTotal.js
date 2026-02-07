// Se puede usar una funcio para otras funcion
import { calcularIVA } from "./calcularIVA.js";

// funcion para retornar el total
export function calcularTotal (subtotal){
    let iva = calcularIVA(subtotal)
    return subtotal + iva
}