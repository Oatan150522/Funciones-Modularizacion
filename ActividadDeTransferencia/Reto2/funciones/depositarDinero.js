// Se importa la funcion de validar
import { validarMonto } from "./validarMonto.js";
// Funcion para Depositar el dinero
export function depositarDinero (saldo, monto){
    if (!validarMonto(monto)) return saldo;

    // Esto es como para decir que se le sume al saldo el monto que depositaron
    saldo += monto
    console.log(`Depositaste $${monto}`);
    return saldo;
}