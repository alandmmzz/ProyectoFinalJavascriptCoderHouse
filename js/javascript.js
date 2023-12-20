const today = new Date();

function getDayText(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 7:
      return "Sunday";
    case 1:
      return "Monday";
    case 8:
      return "Monday";
    case 2:
      return "Tuesday";
    case 9:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 10:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 11:
      return "Thursday";
    case 5:
      return "Friday";
    case 12:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

let taskList = [];
let taskQuantity = 0;

const columnTitles = document.querySelectorAll("p.columnTitle");

var i = 0;
columnTitles.forEach((title) => {
  title.textContent = getDayText(today.getDay() + i);
  i++;
});

// let inputHour = document.querySelector("input#taskHour");
// inputHour.setAttribute("min", (today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()));
// inputHour.setAttribute("max", (addDays(today, 6)).getFullYear() + "-" + (addDays(today, 6)).getMonth() + 1 + "-" + (addDays(today, 6)).getDate());

// ADD A TASK 
var addTaskModal = document.querySelector("div#addTaskModal");
var addTaskBtn = document.querySelector("button#addTaskBtn");
var acceptBtn = document.getElementById("acceptBtn");
// Get the <span> element that closes the modal
var addTaskCloseBtn = document.querySelector("span.addTask.close");

// OPEN A TASK 
var taskInformationModal = document.querySelector("div#taskInformationModal");

//NO TASKS MESSAGE
const noTasksContainer = document.querySelector("div#noTasksContainer");

const getTaskList = localStorage.getItem("taskList");
if (getTaskList == null) {
  console.log(getTaskList);
  noTasksContainer.style.display = "block";
} else {
  taskList = getTaskList;
  taskList = JSON.parse(localStorage.getItem("taskList"));
  console.table(taskList);
  taskList.forEach((task)=> {
    task.id = taskQuantity + 1;
    taskQuantity ++;
    task.date = new Date(task.date);
    task.datetime = new Date(task.datetime);
  })
  UpdateLists();
}

function openTaskInformation(id) {
  let showTask = taskList.find((task)=> task.id == id);
  console.log();
  taskInformationModal.innerHTML = `<div class="modal-content bg-dark text-light">
  <div>
      <span id="taskInformationTitle" class="fs-3 fw-bold">${showTask.name}</span>
      <span class="openTask close">&times;<span>
  </div>
  <div class="modal-body">
      <div class="mb-3">
          <p>Subject: ${showTask.subject}</p>
      </div>
      <div class="mb-3">
          <p>Due date:  ${showTask.date.toDateString()}</p>
      </div>
      <div class="mb-3">
          <p>Task description: ${showTask.description}</p>
      </div>
  </div>
  <div class="modal-footer">
      <button id="deleteBtn" type="button" class="btn btn-danger delete">Delete task</button>
  </div>
</div>`
  taskInformationModal.style.display = "block";
  const taskInformationCloseBtn = document.querySelector("span.openTask.close");
  taskInformationCloseBtn.addEventListener("click", () => (taskInformationModal.style.display = "none"));
  const deleteTaskBtn = document.querySelector("button#deleteBtn");
  deleteTaskBtn.addEventListener("click", () => {
    taskList.splice((taskList.indexOf(taskList.find((task)=> task.id == id))), 1);
    UpdateLists();
    taskInformationModal.style.display = "none";
    Toastify({
      text: "Task deleted",
      duration: 3000,
      newWindow: true,
      gravity: "top", 
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #fc6076, #ff9a44)",
      },
    }).showToast();
  });
}

// When the user clicks on <span> (x), close the modal
addTaskCloseBtn.addEventListener("click", () => (addTaskModal.style.display = "none"));

// When the user clicks on the button, open the modal
addTaskBtn.addEventListener("click", () => (addTaskModal.style.display = "block"));

// When the user clicks on <span> (x), close the modal
addTaskCloseBtn.addEventListener("click", () => (addTaskModal.style.display = "none"));

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == addTaskModal) {
    addTaskModal.style.display = "none";
  } else { if (event.target == taskInformationModal) {
    taskInformationModal.style.display = "none";
  }}
});

acceptBtn.addEventListener("click", () => {
  var taskName = document.querySelector("input#taskName").value;
  console.log(taskName);
  let taskDate = document.querySelector("input#taskHour").value;
  console.log(taskDate);
  var taskSubject = document.querySelector("*#taskSubject").value;
  console.log(taskSubject);
  var taskDescription = document.querySelector("textarea#taskDescription").value;
  console.log(taskDescription);
  taskQuantity ++;
  let newTask = new Task(
    taskQuantity,
    taskName,
    taskDate,
    taskSubject,
    taskDescription
  );
  taskList.push(newTask);
  console.log(taskList);
  UpdateLists();
  addTaskModal.style.display = "none";
  Toastify({
    text: "Task created successfully",
    duration: 3000,
    newWindow: true,
    gravity: "top", 
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #20E2D7, #F9FEA5);",
    },
  }).showToast();
});

function Task(taskQuantity, taskName, taskDate, taskSubject, taskDescription) {
  this.id = taskQuantity;
  this.name = taskName;
  this.subject = taskSubject;
  this.date = new Date(
    parseInt(taskDate.substring(0, 4)),
    parseInt(taskDate.substring(5, 7)) - 1,
    parseInt(taskDate.substring(8, 10))
  );
  this.datetime = new Date(taskDate);
  this.description = taskDescription;
}

function UpdateLists(){
  let datei = today.getFullYear() + "," + (today.getMonth() + 1) + "," + today.getDate();
  datei = new Date(datei);
  for (let i = 0; i < 7; i++) {
    let iContainer = document.querySelectorAll("div.containerDate");
    iContainer[i].innerHTML = " ";
    datei = addDays(datei, 1);
  }
  datei = today.getFullYear() + "," + (today.getMonth() + 1) + "," + today.getDate();
  datei = new Date(datei);
  for (let i = 0; i < 7; i++) {
    console.log(datei);
    const result = taskList.filter(
      (el) => el.date.toDateString() == datei.toDateString()
    );
    let iContainer = document.querySelectorAll("div.containerDate");
    result.forEach((task) => {
      iContainer[i].innerHTML += `<div id="task${task.id}" class="cardTask d-flex flex-column rounded-4 ps-2 pe-2 mb-2" onclick="openTaskInformation(${task.id})">
              <div class="taskHeader fw-semibold"><p>${task.name}</p></div>
              <div class="taskSubject text-end"><p>${task.subject}</p></div>
              <div class="taskDate text-end"><p>${task.datetime.getHours()}:${task.datetime.getMinutes() < 10 ? ("0" + task.datetime.getMinutes()) : task.datetime.getMinutes()}</p></div>
          </div>`;
    });
    datei = addDays(datei, 1);
  }
  localStorage.setItem("taskList", JSON.stringify(taskList));
  console.log(taskList.length);
  taskList.length < 1 ?
    noTasksContainer.style.display = "block" :
    noTasksContainer.style.display = "none";
}

let subjects = [];

async function getSubjects() {
  const response = await fetch("/js/subjects.json");
  const subjectsJSON = await response.json();
  await subjects.push(...subjectsJSON)
}