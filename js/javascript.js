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
      return "Thurday";
    case 11:
      return "Thurday";
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

const columnTitles = document.querySelectorAll("p.columnTitle");

var i = 0;
columnTitles.forEach((title) => {
  title.textContent = getDayText(today.getDay() + i);
  i++;
});

// let inputHour = document.querySelector("input#taskHour");
// inputHour.setAttribute("min", (today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()));
// inputHour.setAttribute("max", (addDays(today, 6)).getFullYear() + "-" + (addDays(today, 6)).getMonth() + 1 + "-" + (addDays(today, 6)).getDate());

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var addTaskBtn = document.getElementById("addTaskBtn");
//Get the button to accept creating a card
var acceptBtn = document.getElementById("acceptBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
addTaskBtn.addEventListener("click", () => (modal.style.display = "block"));

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", () => (modal.style.display = "none"));

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

acceptBtn.addEventListener("click", () => {
  let datei = today.getFullYear() + "," + (today.getMonth() + 1) + "," + today.getDate();
  datei = new Date(datei);
  for (let i = 0; i < 6; i++) {
    let iContainer = document.querySelectorAll("div.containerDate");
    iContainer[i].innerHTML = "";
    datei = addDays(datei, 1);
  }
  var taskName = document.getElementById("taskName").value;
  console.log("variable creada con nombre", taskName);
  let taskDate = document.getElementById("taskHour").value;
  console.log("variable creada con nombre", taskDate);
  var taskSubject = document.getElementById("taskSubject").value;
  console.log("variable creada con nombre", taskSubject);
  var taskDescription = document.getElementById("taskDescription").value;
  let newTask = new Task(
    taskName,
    taskDate,
    taskSubject,
    taskDescription
  );
  console.log("variable creada con nombre", newTask.name);
  taskList.push(newTask);
  console.log(taskList);
  datei = today.getFullYear() + "," + (today.getMonth() + 1) + "," + today.getDate();
  datei = new Date(datei);
  for (let i = 0; i < 6; i++) {
    console.log(datei);
    const result = taskList.filter(
      (el) => el.date.toDateString() == datei.toDateString()
    );
    console.log(result);
    let iContainer = document.querySelectorAll("div.containerDate");
    result.forEach((task) => {
      iContainer[
        i
      ].innerHTML += `<div class="bg-dark cardTask d-flex flex-column rounded-4 ps-2 pe-2 mb-2">
              <div class="cardHeader fw-semibold"><p>${task.name}</p></div>
              <div class="cardSubject text-end"><p>${task.subject}</p></div>
              <div class="cardDate text-end"><p>${task.datetime.getHours()}:${task.datetime.getMinutes()}</p></div>
          </div>`;
    });
    datei = addDays(datei, 1);
  }
  modal.style.display = "none";
});

function Task(taskName, taskDate, taskSubject, taskDescription) {
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

