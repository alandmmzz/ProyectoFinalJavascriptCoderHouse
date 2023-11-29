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
addTaskBtn.addEventListener("click", ()=> modal.style.display = "block")

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", ()=> modal.style.display = "none")

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event)=> {
    if (event.target == modal) {
      modal.style.display = "none";
    }
})

acceptBtn.addEventListener("click", ()=> {
  var taskName = document.getElementById("taskName").value;
  var taskDay = document.getElementById("taskDay").value;
  let taskDate = document.getElementById("taskHour").value;
  var taskSubject = document.getElementById("taskSubject").value;
  var taskDescription = document.getElementById("taskDescription").value;
  createTaskCard(taskName, taskDay, taskDate, taskSubject, taskDescription);
  modal.style.display = "none";
})  

function Task(taskName, taskDay, taskDate, taskSubject, taskDescription) {
    this.name = taskName;
    this.subject = taskSubject;
    this.date = new Date(taskDate);
    this.day = taskDay;
    this.description = taskDescription;
}

function createTaskCard(taskName, taskDay, taskDate, taskSubject, taskDescription) {
    switch (taskDay) {
        case 'monday':
            let newTask = new Task(taskName, taskDay, taskDate, taskSubject, taskDescription);
            mondayTasksList.push(newTask);
            let mondayContainer = document.getElementById("mondayContainer");
            mondayContainer.innerHTML += `<div class="bg-dark cardTask d-flex flex-column rounded-4 ps-2 pe-2 mb-2">
            <div class="cardHeader fw-semibold"><p>${taskName}</p></div>
            <div class="cardSubject text-end"><p>${taskSubject}</p></div>
            <div class="cardDate text-end"><p>12:00-14:30</p></div>
        </div>`
  }
  }
