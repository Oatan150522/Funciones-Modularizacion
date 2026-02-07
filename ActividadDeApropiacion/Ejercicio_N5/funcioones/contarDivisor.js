// ffuncion para saber cuantos divisores tiene un numero
export function contadarDivisor(numero) {
    let divisores = 0;
    // ciclo for para contarlos
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }
    return divisores;
}