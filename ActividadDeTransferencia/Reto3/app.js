// Se importa solamente mostrar la factura
import { mostrarFactura } from "./funciones/index.js";

let productos = [
  { nombre: "Arroz", precio: 5000, cantidad: 3 },
  { nombre: "Leche", precio: 4000, cantidad: 2 },
  { nombre: "Pan", precio: 1000, cantidad: 5 }
];

mostrarFactura(productos);
