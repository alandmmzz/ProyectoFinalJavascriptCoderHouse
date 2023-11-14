const button = document.getElementById(startBtn);

button.onclick(alert("Se añadió a tus tareas pendientes."));


// let taskList = "";
// let taskName = "";
// let taskDate = "";
// let option;
// let username = prompt("Bienvenid@!, ingresa tu nombre para continuar: ");

// while (username == "") {
//     username = prompt("Por favor, ingresá un nombre válido: ");
// }

// alert("Mucho gusto, " + username, +" nos alegra que visites nuestro sitio web.");
// alert("A lo largo de las siguientes pre-entregas, Schedule it se convertirá en una página web que te ayudará a organizar tus tiempos y tareas pendientes.");
// if (true == confirm("Te gustaría empezar?")) {
//     seleccionarAccion();
// }

// function seleccionarAccion() {
//     option = prompt("Introduce el número de la siguiente acción que quieras realizar:\n1. Añadir tarea pendiente.\n2. Mostrar tareas pendientes.");
//     if (option == "1") {
//         crearTask();
//     } else { if (option == "2") {
//                 if (taskList != "") {
//                     alert(taskList);
//                     seleccionarAccion();
//                 } else {
//                     if (true == confirm("No tienes tareas pendientes, te gustaría añadir una?")) {
//                         crearTask();
//                     } else {
//                         seleccionarAccion();
//                     }
//                 }
//             }
//         }
// }

// function crearTask() {
//     taskName = prompt("Introduce el nombre de tu tarea: ");
//     taskDate = prompt("Introduce la fecha límite de tu tarea: ");
//     alert("Se añadió " + taskName + " a tus tareas pendientes.");
//     taskList = (taskName + ", " + taskDate + "\n" + taskList);
//     seleccionarAccion();
// }