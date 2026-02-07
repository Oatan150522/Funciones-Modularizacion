// Funcion para agregar una nueva tarea
export function agregarTarea(tareas, nuevaTarea) {
    // Con el push se agrega un elemento al final del arreglo
  tareas.push({
    nombre: nuevaTarea,
    completada: false
  });

  console.log("Tarea agregada con éxito");

  return tareas;
}
