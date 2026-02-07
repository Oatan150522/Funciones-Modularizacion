import { validarNumero } from "./validarNumero.js";
import { contadarDivisor } from "./contarDivisor.js";

export function esPrimo(numero) {
    if (!validarNumero(numero)) return false;

    return contadarDivisor(numero) === 2;
}
