// Se importa el resto de funciones 
import { calcularSubtotal } from "./calcularSubtotal.js";
import { calcularIVA } from "./calcularIVA.js";
import { calcularTotalPagar } from "./calcularTotalPagar.js";
import { calcularTotalSinIVA } from "./calcularTotalSinIVA.js";

// Se utiliza la funcion de flecha
export const mostrarFactura = productos => {
  console.log("\nFACTURA");
    // Bucle fot para mirar los productos
  for (let producto of productos) {
    let subtotal = calcularSubtotal(producto.precio, producto.cantidad);

    console.log(
      `${producto.nombre} - $${producto.precio} x ${producto.cantidad} = $${subtotal}`
    );
  }
    // Variables para poder utilizarlo  
  let totalSinIVA = calcularTotalSinIVA(productos);
  let iva = calcularIVA(totalSinIVA);
  let totalPagar = calcularTotalPagar(totalSinIVA);

    // Se muestra la factura
  console.log("\n---------------------------");
  console.log("Total sin IVA:", totalSinIVA);
  console.log("IVA (19%):", iva.toFixed(2));
  console.log("Total a pagar:", totalPagar.toFixed(2));
};
