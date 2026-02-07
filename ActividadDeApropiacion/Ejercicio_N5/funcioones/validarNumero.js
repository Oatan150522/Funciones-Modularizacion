// Se hace la funcion validarNumero para hacer validaciones es decir 
export function validarNumero (numero) {
    if (typeof numero !== "number") return false;
    // Si el numero es diferente a Integer (Entero) es falso
    if (!Number.isInteger(numero)) return false;
    if (numero <= 1 ) return false;
    return true;
}