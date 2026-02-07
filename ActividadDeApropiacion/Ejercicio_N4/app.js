// Se importan las funciones
import { calcularSubtotal, calcularIVA, calcularTotal } from "./funciones/index.js";

// Variables para los datos de la compra 
let cantidad = 3;
let precio = 5000;

// Subtotal
let subtotal = calcularSubtotal(cantidad,precio);

// Iva
let iva = calcularIVA(subtotal);

// total
let total = calcularTotal(subtotal);

// Se muestran los resultados
console.log("Compra realizada");
console.log("Cantidad:", cantidad);
console.log("Precio unitario:", precio);

console.log("Subtotal:", subtotal);
console.log("IVA (19%):", iva.toFixed(2));
console.log("Total a pagar:", total.toFixed(2));


