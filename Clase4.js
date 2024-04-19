/*async function mostrarUsuario() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
      const data = await response.json();
      console.log('Información del usuario:', data);
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  }
  mostrarUsuario();*/

  const fs = require('fs');
function appendFileSync('file.txt', data) {
    try {
        // Agrega contenido al archivo, creándolo si no existe
        fs.appendFileSync('file.txt', data);
        console.log("Contenido agregado exitosamente.");
    } catch (error) {
        // Maneja errores posibles durante la operación de escritura
        console.error("Error al agregar contenido al archivo:", error);
    }
}
appendFileSync('Contenido Correctamente')