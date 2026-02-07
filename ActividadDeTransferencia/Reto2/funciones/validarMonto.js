// Esta funcion es para validar el monto que sea number
export function validarMonto(monto){
    // Es como.. esto no es un numero
    if (isNaN(monto)){
        console.log("Deber de ingresar valor tipo: Number");
        return false;
    }
    if (monto <= 0){
        console.log("Error: El monto tiene que ser mayor de 0");
        return false
    }
    return true;
}