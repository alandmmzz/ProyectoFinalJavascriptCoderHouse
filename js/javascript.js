let mondayTasksList = [];

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var addTaskBtn = document.getElementById("addTaskBtn");

//Get the button to accept creating a card
var acceptBtn = document.getElementById("acceptBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
addTaskBtn.onclick = function() {
  modal.style.display = "block";
} 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

acceptBtn.onclick = function() {
    var taskName = document.getElementById("taskName").value;
    var taskDay = document.getElementById("taskDay").value;
    var taskDescription = document.getElementById("taskDescription").value;
   
    createTaskCard(taskName, taskDay, taskDescription);
    modal.style.display = "none";
  }

  function Task(taskName, taskDay, taskDescription) {
    this.name = taskName;
    this.day = taskDay;
    this.description = taskDescription;
}

  function createTaskCard(taskName, taskDay, taskDescription) {
    switch (taskDay) {
        case 'monday':
            let newTask = new Task(taskName, taskDay, taskDescription);
            mondayTasksList.push(newTask);
            let mondayContainer = document.getElementById("mondayContainer");
            mondayContainer.innerHTML += `<div class="bg-dark cardTask d-flex flex-column rounded-4 ps-2 pe-2 mb-2">
            <div class="cardHeader fw-semibold"><p>${taskName}</p></div>
            <div class="cardSubject text-end"><p>Materia</p></div>
            <div class="cardDate text-end"><p>12:00-14:30</p></div>
        </div>`
  }
  }


// let username = prompt("Bienvenid@!, ingresa tu nombre para continuar: ");
// while (username == "") {
//     username = prompt("Por favor, ingresá un nombre válido: ");
// }
// alert("Mucho gusto, " + username, +" nos alegra que visites nuestro sitio web.");
// alert("A lo largo de las siguientes pre-entregas, Schedule it se convertirá en una página web que te ayudará a organizar tus tiempos y tareas pendientes.");
// if (true == confirm("Te gustaría empezar?")) {
//     seleccionarAccion();
// } else {
//     alert("Gracias por usar Schedule It!");
// }

// function seleccionarAccion() {
//     option = prompt("Introduce el número de la siguiente acción que quieras realizar:\n1. Añadir tarea pendiente.\n2. Mostrar tareas pendientes.\n3. Mostrar tareas que finalizan hoy.");
//     switch (option) {
//         case '1':
//             crearTask();
//         case '2':
//             if (tasksList.length != 0) {
//                 tasksList.forEach(task => {
//                     taskShow = (task.name + ", " + task.dueDate.toDateString() + "\n" + taskShow);
//                 });
//                 alert(taskShow);
//                 taskShow = [];
//                 seleccionarAccion();
//             } else {
//                 noPendingTasks(1);
//             }
//         case '3':
//             if (tasksList.length != 0) {
//                 const today = new Date();
//                 const result = tasksList.filter((el) => el.dueDate.toDateString() == today.toDateString());
//                 if (result.length != 0) {
//                     result.forEach(task => {
//                         taskShow = (task.name + ", " + task.dueDate.toDateString() + "\n" + taskShow);
//                     });
//                     alert(taskShow);
//                     taskShow = [];
//                     seleccionarAccion();
//                 } else {
//                     noPendingTasks(today);
//                 }
//             } else {
//                 noPendingTasks(1);
//             }
//         case null:
//             alert("Gracias por usar Schedule It!");
//             break;
//         default:
//             alert("Please select a valid option.");
//             seleccionarAccion();
//     }
// }

// function noPendingTasks(date) {
//     if (date == "1") {
//         if (true == confirm("No tienes ninguna tarea pendiente, te gustaría añadir una?")) {
//             crearTask();
//         } else {
//             seleccionarAccion();
//         }
//     } else {
//         if (true == confirm("No tienes tareas pendientes para el día " + date.toDateString() + " te gustaría añadir una?")) {
//             crearTask();
//         } else {
//             seleccionarAccion();
//         }
//     }
// };


// function crearTask() {
//     taskName = prompt("Introduce el nombre de tu tarea: ");
//     taskDate = prompt("Introduce la fecha límite de tu tarea en formato DD/MM/YYYY: ");
//     taskDate = new Date(parseInt(taskDate.substring(6, 10)), parseInt(taskDate.substring(3, 5)) - 1, parseInt(taskDate.substring(0, 2)))
//     taskSubject = prompt("Introduce la asignatura de tu tarea: ");
//     alert("Se añadió " + taskName + " a tus tareas de " + taskSubject + " pendientes.");
//     let newTask = new Task(taskName, taskDate, taskSubject);
//     tasksList.push(newTask);
//     seleccionarAccion();
// }

// function Task(taskName, taskDate, taskSubject) {
//     this.name = taskName;
//     this.dueDate = taskDate;
//     this.subject = taskSubject;
// }
