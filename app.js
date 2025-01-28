let listaAmigos = []; // lista de amigos

function verificarNombre(amigo) {
    //const valor = document.getElementById('amigo').value.trim(); // se obtiene el valor del campo de texto del html

    // 1. La primera validación es si está vacío
    if (!amigo.trim()) {
      alert("El campo está vacío. Por favor, introduzca un nombre.");
      return false; // Falla la validación
    }

    // 2. La segunda validación es verificar si contiene dígitos
    if (/\d/.test(amigo)) { //    con /\d/ buscacmos cualquier carácter numérico (0-9).
      alert("Por favor, introduzca un nombre válido (sin números).");
      return false; // Falla la validación
    }

    // 3. La tercera validación es verificar si el nombre ya se encontraba en la lista
    if (listaAmigos.map(amigos => amigos.toLowerCase()).includes(amigo.toLowerCase())) {
        alert(`El nombre "${amigo}" ya fue agregado previamente.`);
        return;
    }
    // Si cae aquí es que pasa todas las validaciones y es un nombre correcto
    return true;
  }

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value; // capturando el valor del campo de entrada
    // Antes de agregar amigo, primero verificamos las validaciones
    if (!verificarNombre(amigo)) {
        return;
    }
    listaAmigos.push(amigo); // agregar el nombre a la lista
    
    // ahora tenemos que mostrar los nombres en el html
    const lista = document.getElementById('listadoAmigos');
    const li = document.createElement('li'); // creamos una viñeta para mostrar cada nombre
    li.textContent = amigo;
    lista.appendChild(li);

    limpiarCaja(); // limpiar el campo de entrada
}

function sortearAmigo() {
    // Lo 1ro es verificar si hay más de un amigo en la lista
    if (listaAmigos.length <= 1) {
        alert("Necesitas al menos 2 amigos para hacer un sorteo.");
        return; // Detenemos la función si no hay suficientes amigos
    }

    // Si hay suficientes amigos, se elige uno al azar
    const amigoGanador = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; 
    
    // Mostramos el amigo ganador en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoGanador}</strong></li>`;

    // Limpiar el registro de nombres anteriores
    listaAmigos = []; // Vacía el array de amigos
    const lista = document.getElementById('listadoAmigos');
    lista.innerHTML = ''; // Vacía la lista en el HTML
    //alert(`El amigo sorteado es: ${amigoGanador}`);
}
  