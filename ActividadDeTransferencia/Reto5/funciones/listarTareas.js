
// Funcion de flecha para enlistar lsa tareas
export const listarTareas = (tareas) => {
  console.log("\nLISTA DE TAREAS");
//   Se isa eñ lengt para mirar cuantas tareas hay
  if (tareas.length === 0) {
    console.log("No hay tareas registradas.");
    return;
  }
//   foreach es para recorrer un arreglo sin usar un for
  tareas.forEach((tarea, index) => {
    let estado = tarea.completada ? "Bien" : "Mal";
    console.log(`${index + 1}. ${tarea.nombre} ${estado}`);
  });
};
