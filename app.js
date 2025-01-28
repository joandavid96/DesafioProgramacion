let listaNombres = [];
let contador = 0;

//let textoAmigo = document.getElementById('amigo').value; 

function verificarNombre() {
    const valor = document.getElementById('amigo').value.trim(); // se obtiene el valor del campo de texto del html

    // 1. La primera validación es si está vacío
    if (!valor) {
      alert("El campo está vacío. Por favor, introduzca un nombre.");
      return false; // Falla la validación
    }

    // 2. La segunda validación es verificar si contiene dígitos
    if (/\d/.test(valor)) { //    con /\d/ buscacmos cualquier carácter numérico (0-9).
      alert("Por favor, introduzca un nombre válido (sin números).");
      return false; // Falla la validación
    }

    // Si cae aquí es que pasa todas las validaciones y es un nombre correcto
    return true;
  }


function agregarAmigo() {
    // Antes de agregar amigo, primero verificamos las validaciones
    if (!verificarNombre()) {;
        return;
    }
}
  