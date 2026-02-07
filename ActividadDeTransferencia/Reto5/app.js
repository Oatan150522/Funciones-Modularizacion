import promptSync from "prompt-sync";

import {
  agregarTarea,
  listarTareas,
  completarTarea,
  eliminarTarea,
  mostrarMenu
} from "./funciones/index.js";

// Para que el usuario pueda ingrear en la terminal
const prompt = promptSync();

// este es el arreglo para agregar tareas
let tareas = [];
let opcion = "";

// Bucles para 
while (opcion !== "5") {
  mostrarMenu();

  opcion = prompt("Elige una opción: ");

  if (opcion === "1") {
    let nombre = prompt("Nombre de la tarea: ");
    tareas = agregarTarea(tareas, nombre);

  } else if (opcion === "2") {
    listarTareas(tareas);

  } else if (opcion === "3") {
    let num = Number(prompt("Número de tarea a completar: "));
    tareas = completarTarea(tareas, num);

  } else if (opcion === "4") {
    let num = Number(prompt("Número de tarea a eliminar: "));
    tareas = eliminarTarea(tareas, num);

  } else if (opcion === "5") {
    console.log("Saliendo del programa...");

  } else {
    console.log("Opción inválida");
  }
}
