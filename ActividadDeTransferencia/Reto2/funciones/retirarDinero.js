// Se importa la funcion de validar el monto
import { validarMonto } from "./validarMonto.js";

// Funcion para retirar el dinero del saldo
export function retirarDinero (saldo,monto){
    if (!validarMonto(monto)) return saldo;

    if (monto > saldo){
        console.log("No tienes saldo suficiente");
        return saldo;
    }
    // Se resta al saldo el monto que se retiro
    saldo-= monto;
    console.log(`Retiraste $${monto}`);
    return saldo
}