# Amigo Secreto
Este es un proyecto sencillo que permite al usuario agregar nombres de amigos, validarlos y prepararlos para un sorteo de “Amigo Secreto”. 

## Descripción
Este proyecto está enfocado en la experiencia de registrar amigos para un juego de “Amigo Secreto”. El usuario ingresa un nombre y el sistema verifica:
- Que el campo no esté vacío.
- Que no contenga números (por ejemplo, “Pedro123” es inválido).
- Que no exista ya en la lista (evitar nombres repetidos).

Tras validar el nombre, se agrega a una lista visible. Posteriormente, podrás implementar una funcionalidad para “sortear” o asignar amigos secretos.

## Características
1. Validación de entradas:
- Campo vacío.
- Nombres con dígitos.
- Duplicados en la lista.

## Requisitos
Navegador web moderno (cualquier versión reciente de Chrome, Firefox, Safari, Edge, etc.).

## Instalación / Uso
Clonar el repositorio (o descargarlo):

git clone https://github.com/joandavid96/amigo-secreto-alura.git
Abrir el archivo index.html en tu navegador preferido.

## Interacción:
Ingresa un nombre en el campo de texto.
Presiona el botón “Añadir”.
El nombre se validará y, si es correcto, se mostrará en la lista.
Presionar el botón de “Sortear” cuando esté implementado.

### Estructura principal de archivos:

.
├── index.html

├── style.css

├── script.js

└── assets

    └── (imágenes, íconos, etc.)

index.html: archivo principal de la interfaz.
style.css: estilos básicos (puede tener tu diseño personalizado).
script.js: contiene la lógica de validación y de gestión de la lista.
assets: carpeta con imágenes (por ejemplo, ícono para sortear, banner, etc.).

### Funciones clave
1. verificarLista():
- Verifica que el campo de entrada no esté vacío.
- Checa que no contenga números.
- Confirma que el nombre no exista ya en la lista.

2. agregarAmigo():
- Invoca a verificarLista(); si la validación es exitosa, añade el nombre al array y a la lista del DOM.
- Añade el nombre del amigo a la lista y lo muestra en pantalla.
- Limpia el cuadro de texto

3. sortearAmigo():
- Verifica que hay más de 2 amigos para poder sortear.
- Elige un amigo al azar y lo muestra
- Limpia la lista de amigos.

# Contribuciones
¡Las contribuciones son bienvenidas! Puedes hacer un fork del proyecto, crear una rama con tu mejora y abrir un Pull Request.
