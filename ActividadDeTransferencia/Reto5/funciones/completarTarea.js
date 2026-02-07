// Funcion para completar una tarea
export function completarTarea(tareas, numero) {
  let index = numero - 1;

  if (index < 0 || index >= tareas.length) {
    console.log("Número inválido");
    return tareas;
  }

  tareas[index].completada = true;
  console.log("Tarea marcada como completada");

  return tareas;
}
