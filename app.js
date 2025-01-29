// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaración del array de amigos
let amigos = [];


// Creación de la función para agregar a los amigos
function agregarAmigo() {
    // Lectura de los datos
    let nombre = document.getElementById("amigo").value;
    // validación de la entrada de datos
    if(nombre === ""){
        alert("Ingrese un nombre válido");
    }else{
        amigos.push(nombre);
        // Llamado de lq función para crear los elementos del HTML
        actualizarListaHTML();
    }

    // limpiar el valor introducido
    document.getElementById("amigo").value = "";

}

// Función para actualizar la lista del HTML
function actualizarListaHTML(){
    let lista = document.getElementById("listaAmigos");
    // Limpiar la lista antes de agregar los elementos
    lista.innerHTML = "";

    // Iteración para agregar a los amigos a la lista
    amigos.forEach(amigo => {
        // se declara una variable para crear el elemento li
        let li = document.createElement("li");
        // Se asigna el valor del amigo al contenido de li
        li.textContent = amigo;
        // Se crea el elemento li de la lista
        lista.appendChild(li);
    });
}

// Función para Sortear los elementos de una lista
function sortearAmigo(){
    // validar que el array no esté vacío
    if(amigos.length === 0){
        alert("No existen amigos para sortear");
    }else{
        // Generación del índice aleatorio
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        console.log(amigoSorteado);
        alert("El amigo sorteado es: " + amigos[amigoSorteado]);
    }

}

// Llamado de las funciones
agregarAmigo();