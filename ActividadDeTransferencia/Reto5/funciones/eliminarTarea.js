// Fucion para elimuinar una tarea
export function eliminarTarea(tareas, numero) {
  let index = numero - 1;

  if (index < 0 || index >= tareas.length) {
    console.log("Número inválido");
    return tareas;
  }
//   el splice sirve para bastante cosas como eliminar insertar o reemplazar elementos dentro de un arreglo
  tareas.splice(index, 1);
  console.log("Tarea eliminada");

  return tareas;
}
