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