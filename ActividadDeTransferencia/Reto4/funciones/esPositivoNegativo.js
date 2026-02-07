// Funcion para mirar si es negativo o Positovo
export function esPositivoNegativo(numero) {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Cero";
  }
}
