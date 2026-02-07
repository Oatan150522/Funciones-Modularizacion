import { calcularSubtotal } from "./calcularSubtotal.js";

export function calcularTotalSinIVA(productos) {
  let total = 0;

  for (let producto of productos) {
    total += calcularSubtotal(producto.precio, producto.cantidad);
  }

  return total;
}
