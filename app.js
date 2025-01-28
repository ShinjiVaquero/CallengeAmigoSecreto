// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaración del array de amigos
let amigos = [];

// Creación de la función para agregar a los amigos
function agregarAmigo() {
    // Lectura de los datos
    nombre = document.getElementById("amigo").value;
    
    // validación de la entrada de datos
    if(nombre == ""){
        alert("Ingrese un nombre válido");
    }

    console.log(nombre);
}
// Llamado de las funciones
agregarAmigo();
