// Para que el usuario pueda ingresar en la terminal
import PromptSync from "prompt-sync";

// Se importa las funciones 
import {depositarDinero, retirarDinero, consultarSaldo, validarMonto} from "./funciones/index.js"

// Se realia un menu para que sea mas intuitivo
const prompt = PromptSync();

// Saldo inicial
let saldo = 0;

// variables para controlar el menu
let opcion = "";

while (opcion !== "4") {
  console.log("\nMENÚ BANCARIO");
  console.log("1. Depositar dinero");
  console.log("2. Retirar dinero");
  console.log("3. Consultar saldo");
  console.log("4. Salir");

  opcion = prompt("Elige una opción: ");

  if (opcion === "1") {
    let monto = Number(prompt("Monto a depositar: "));
    saldo = depositarDinero(saldo, monto);

  } else if (opcion === "2") {
    let monto = Number(prompt("Monto a retirar: "));
    saldo = retirarDinero(saldo, monto);

  } else if (opcion === "3") {
    consultarSaldo(saldo);

  } else if (opcion === "4") {
    console.log("Gracias por usar el banco");

  } else {
    console.log("Opción no válida");
  }
}